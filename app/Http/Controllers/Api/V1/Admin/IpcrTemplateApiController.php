<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFacultyAssesstment;
use App\Models\IpcrFunction;
use App\Models\IpcrFunctionTemplate;
use App\Models\IpcrSignatory;
use App\Models\IpcrSubFunction;
use App\Models\IpcrTemplates;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class IpcrTemplateApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrTemplates::get());
    }

    public function store(Request $request)
    {
        $payload = $request->data;

        DB::transaction(function () use ($payload) {
            $year = Carbon::now()->format('Y');

            $ipcr_template = IpcrTemplates::updateOrCreate(
                [
                    'year' => $year
                ],
                [
                    'year' => $year,
                    'active' => false,
                ]
            );

            foreach ($payload as $data) {
                IpcrFunctionTemplate::updateOrCreate(
                    ['ipcr_template_id' => $ipcr_template->id, 'ipcr_function_id' => $data['id']],
                    ['ipcr_template_id' => $ipcr_template->id, 'ipcr_function_id' => $data['id']]
                );
            }
        });

        return (new IpcrResource($payload))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function getActiveIPCR()
    {
        $ipcr_active = IpcrTemplates::where('active', true)->first();

        $ipcr_function_id = IpcrFunctionTemplate::where('ipcr_template_id', $ipcr_active->id)->pluck('ipcr_function_id');

        // $ipcr_functions = IpcrFunction::with(['ipcrSubFunction.ipcrPerformance'])
        //     ->whereIn('id', $ipcr_function_id)
        //     ->get()
        //     ->pluck('name')
        //     ->flatten()
        //     ->toArray();

        $relationships = ['ipcrSubFunction'];

        $ipcr_functions = IpcrFunction::whereIn('id', $ipcr_function_id)
            ->get()
            ->each(function ($array) use ($relationships) {
                $sub_function = [];
                $performance = [];
                $ipcr_subfunctions = $array->ipcrSubFunction()->get();

                foreach ($ipcr_subfunctions as $sub_function) {
                    foreach ($sub_function->ipcrPerformance as $performance) {
                        $performance[] = $performance->name;
                        dd($performance);
                    }
                    $sub_function[] = $sub_function->name;
                }

                dd($performance);
                // dd($array->ipcrSubFunction()->ipcrPerformance);

                $ipcr_perforamce = $array->ipcrSubFunction()->get()->ipcrPerformance()->pluck('name');
                dd($ipcr_perforamce);
                return [
                    'name' => $array->name,
                    'ipcr_subfunctions' => $ipcr_subfunctions,
                ];
            });

        // dd($page);
        //
        // foreach ($relationships as $rel) {
        //     dd($page->{$rel}());
        //     $ipcr_functions[$rel] = $page->{$rel}()->pluck('id');
        // }
        // dd($page);

        dd($ipcr_functions);
        $ipcr_signatories = IpcrSignatory::get();
        // if ($ipcr_active) {
        //     $user = Auth::user();

        //     IpcrFacultyAssesstment::updateOrCreate([
        //         'ipcr_template_id' => $ipcr_active->id,
        //         'faculty_id' => $user->id
        //     ], [
        //         'status_id' => 'On Going Assesment',
        //         'ipcr_template_id' => $ipcr_active->id,
        //         'faculty_id' => $user->id,
        //         'department_id' => $user->userDetails->department_id
        //     ]);
        // }

        return response()->json(['ipcr_function' => $ipcr_functions->toArray(), 'ipcr_signatory' => $ipcr_signatories]);
    }

    public function downloadIPCR($id)
    {
        $ipcr_active = IpcrTemplates::findOrFail($id);
        $filename = $ipcr_active->file_name;
        $ipcr_active_url = Storage::disk('public')->path($ipcr_active->file_name);

        return response()->download($ipcr_active_url, $filename, [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'inline; filename="' . $filename . '"'
        ]);
    }

    public function setActive(Request $request)
    {
        $id = $request->id;
        $ipcr_template = IpcrTemplates::findOrFail($id);
        $ipcr_template->update(['active' => true]);
    }

    public function destroy(int $id)
    {
        $ipcr_function = IpcrSubFunction::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
