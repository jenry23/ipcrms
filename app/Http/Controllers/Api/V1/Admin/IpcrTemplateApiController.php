<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFacultyAssesstment;
use App\Models\IpcrFunction;
use App\Models\IpcrFunctionTemplate;
use App\Models\IpcrPerformanceFunction;
use App\Models\IpcrSignatory;
use App\Models\IpcrSubFunction;
use App\Models\IpcrTemplates;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

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
        $ipcr_functions = IpcrFunction::whereIn('id', $ipcr_function_id)
            ->get()
            ->map(function ($array) {
                $performance = collect();
                $ipcr_subfunctions = $array->ipcrSubFunction()->get();
                $ipcr_subfunctions_id = $ipcr_subfunctions->pluck('id');
                $sub_function = $ipcr_subfunctions->map(fn ($array) => ['id' => $array->id, 'name' => $array->name]);
                $performance = IpcrPerformanceFunction::whereIn('ipcr_sub_function_id', $ipcr_subfunctions_id)
                    ->get()
                    ->map(fn ($array) => ['id' => $array->id, 'name' => $array->name]);

                return [
                    'name' => $array->name,
                    'ipcr_subfunctions' => $sub_function->toArray(),
                    'ipcr_performance' => $performance->toArray(),
                ];
            });


        return response()->json([
            'ipcr_function' => $ipcr_functions->toArray(),
            'ipcr_signatory' => IpcrSignatory::get(),
        ]);
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
