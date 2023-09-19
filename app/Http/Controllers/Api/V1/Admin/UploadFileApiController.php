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
use Illuminate\Support\Facades\Storage;

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

        $ipcr_functions = IpcrFunction::whereIn('id', $ipcr_template_id)
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

    public function show($id)
    {
        $user = Auth::user();

        if ($user->roles()->first()->title === 'Faculty') {
            $ipcr_files = IpcrUploadFiles::with(['ipcrFunction', 'uploader'])->where('faculty_id', $user->id)
                ->where('ipcr_function_id', $id)
                ->get();
        } else {
            $ipcr_files = IpcrUploadFiles::with(['ipcrFunction', 'uploader'])->where('ipcr_function_id', $id)
                ->get();
        }


        return response()->json($ipcr_files);
    }
}
