<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\AcademicRank;
use App\Models\IpcrFacultyAssesstment;
use App\Models\IpcrFunction;
use App\Models\IpcrFunctionTemplate;
use App\Models\IpcrPerformanceFunction;
use App\Models\IpcrSignatory;
use App\Models\IpcrSubFunction;
use App\Models\IpcrTemplates;
use App\Models\Role;
use App\Models\UserDetail;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class IpcrTemplateApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrTemplates::get());
    }

    public function store(Request $request)
    {
        $payload = $request->data;
        $template_name = $request->template_name;

        DB::transaction(function () use ($payload, $template_name) {
            $ipcr_template = IpcrTemplates::updateOrCreate(
                [
                    'name' => $template_name
                ],
                [
                    'name' => $template_name,
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
        $ipcr_active = IpcrTemplates::where('active', true)->latest()->first();

        $ipcr_function_id = IpcrFunctionTemplate::where('ipcr_template_id', $ipcr_active->id)->pluck('ipcr_function_id');
        $ipcr_functions = IpcrFunction::whereIn('id', $ipcr_function_id)
            ->get()
            ->map(function ($array) {
                $performance = collect();
                $ipcr_subfunctions = $array->ipcrSubFunction()->get();
                $sub_function = $ipcr_subfunctions->map(function ($array) {
                    if ($array->has('ipcrPerformance')) {
                        $performance = collect();

                        $array->ipcrPerformance->map(function ($data) use ($performance) {
                            if ($data->has('uploadFiles')) {
                                $user_id = Auth::user()->id;
                                $faculty_date = $data->uploadFiles->where('faculty_id', $user_id)->first();
                                $date_completed = $faculty_date ? Carbon::parse($faculty_date->created_at)->format('Y-m-d') : null;
                                $total_approved = $data->uploadFiles()->where('faculty_id', $user_id)->where('is_approved', true)->count();
                            }

                            $performance->push([
                                'id' => $data->id,
                                'name' => $data->name,
                                'date_completed' => $date_completed,
                                'total_approved' => $total_approved
                            ]);
                        });
                    }

                    return ['id' => $array->id, 'name' => $array->name, 'ipcr_performance' => $performance->toArray()];
                });

                return [
                    'name' => $array->name,
                    'ipcr_subfunctions' => $sub_function->toArray(),
                ];
            });

        $user = Auth::user();
        $roles = UserDetail::with('academic_rank')->where('user_id', $user->id)->first();

        return response()->json([
            'name' => $user->name,
            'roles_name' => isset($roles->academic_rank) ?  $roles->academic_rank->name : null,
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
