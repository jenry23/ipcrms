<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFacultyAssesstment;
use App\Models\IpcrFunction;
use Illuminate\Http\Request;
use App\Models\IpcrFunctionTemplate;
use App\Models\IpcrTemplates;
use App\Models\IpcrUploadFiles;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Carbon;

class UploadFileApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrFacultyAssesstment::get());
    }

    public function store(Request $request)
    {
        $file = $request->file('files');

        $filename = $file->getClientOriginalName();
        Storage::disk('public')->put($filename, file_get_contents($file));

        $data = [
            'ipcr_performance_function_id' => $request->ipcr_performance_function_id,
            'ipcr_function_id' => $request->ipcr_function_id,
            'description' => $request->description,
            'faculty_id' => Auth::user()->id,
            'file_name' => $filename
        ];

        $ipcr_uplopded_files = IpcrUploadFiles::create($data);

        return response()->json($ipcr_uplopded_files);
    }

    public function getActiveFunctions()
    {
        $ipcr_active = IpcrTemplates::where('active', true)->first();

        $ipcr_template_id = IpcrFunctionTemplate::where('ipcr_template_id', $ipcr_active->id)
            ->pluck('ipcr_function_id');

        $ipcr_functions = IpcrFunction::with(['ipcrSubFunction.ipcrPerformance'])
            ->whereIn('id', $ipcr_template_id)
            ->get();

        return response()->json($ipcr_functions);
    }

    public function downloadFile($id)
    {
        $ipcr_active = IpcrUploadFiles::findOrFail($id);
        $filename = $ipcr_active->file_name;
        $ipcr_active_url = Storage::disk('public')->path($ipcr_active->file_name);

        return response()->download($ipcr_active_url, $filename, [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'inline; filename="' . $filename . '"'
        ]);
    }

    public function remarks($id, $value)
    {
        $remarks = IpcrUploadFiles::findOrFail($id)->update(['remarks' => $value]);

        return response()->json($remarks);
    }

    public function approvedFile($id)
    {
        $json_results = null;

        DB::transaction(function () use ($id, &$json_results) {
            $upload_files = IpcrUploadFiles::findOrFail($id);

            $upload_files->update(['is_approved' => true]);

            $ipcr_active_assessment = IpcrFacultyAssesstment::where('faculty_id', $upload_files->faculty_id)
                ->latest()
                ->first();

            if ($ipcr_active_assessment) {
                $json_data = json_decode($ipcr_active_assessment->data, true);

                foreach ($json_data['ipcr_function'] as $key => $data) {
                    if ($data['ipcr_subfunctions']) {
                        foreach ($data['ipcr_subfunctions'] as $key1 =>  $ipcr_subfunctions) {
                            foreach ($ipcr_subfunctions['ipcr_performance'] as $key2 => $ipcr_performance) {
                                if ($ipcr_performance['id'] === $upload_files->ipcr_performance_function_id) {
                                    $total_approved_ipcr = IpcrUploadFiles::where('faculty_id', $upload_files->faculty_id)
                                        ->where('ipcr_performance_function_id',  $upload_files->ipcr_performance_function_id)
                                        ->where('is_approved', true)
                                        ->count();

                                    $json_data['ipcr_function'][$key]['ipcr_subfunctions'][$key1]['ipcr_performance'][$key2]['accomplished']  = $total_approved_ipcr;

                                    $json_data['ipcr_function'][$key]['ipcr_subfunctions'][$key1]['ipcr_performance'][$key2]['date_completed']  = Carbon::parse($upload_files->created_at)->format('Y-m-d');
                                }
                            }
                        }
                    }
                }
            }

            $ipcr_active_assessment->update(['data' => json_encode($json_data, true)]);

            $json_results = $json_data;
        });

        return response()->json($json_results);
    }

    public function showData(int $id, Request $request)
    {
        $user = Auth::user();

        if ($user->roles()->first()->title === 'Faculty') {
            $ipcr_files = IpcrUploadFiles::with(['ipcrPerformanceFunction', 'uploader'])
                ->where('faculty_id', $user->id)
                ->where('ipcr_function_id', $id)
                ->advancedFilter();
        } else {
            $ipcr_files = IpcrUploadFiles::with(['ipcrPerformanceFunction', 'uploader'])
                ->where('ipcr_function_id', $id)
                ->advancedFilter();
        }

        return new IpcrResource($ipcr_files);
    }
}
