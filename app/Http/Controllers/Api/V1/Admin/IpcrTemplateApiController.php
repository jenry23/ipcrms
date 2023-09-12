<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFacultyAssesstment;
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
        $file = $request->templates;
        $ipcr_templates = [];

        DB::transaction(function () use ($file, &$ipcr_templates) {
            $name = $file->getClientOriginalName();
            $size = $file->getSize();
            $year = Carbon::now()->format('Y');

            IpcrTemplates::updateOrCreate(
                [
                    'name' => $name
                ],
                [
                    'name' => $name,
                    'year' => $year,
                    'active' => false,
                    'file_name' => $name,
                    'size' => $size,
                ]
            );

            $ipcr_templates = ['name' => $name];

            Storage::disk('public')->put($name, file_get_contents($file));
        });

        return (new IpcrResource($ipcr_templates))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function getActiveIPCR()
    {
        $ipcr_active = IpcrTemplates::where('active', true)->first();

        if ($ipcr_active) {
            $user = Auth::user();

            IpcrFacultyAssesstment::updateOrCreate([
                'ipcr_template_id' => $ipcr_active->id,
                'faculty_id' => $user->id
            ], [
                'status_id' => 'On Going Assesment',
                'ipcr_template_id' => $ipcr_active->id,
                'faculty_id' => $user->id,
                'department_id' => $user->userDetails->department_id,
                'file_name' => $ipcr_active->file_name
            ]);
        }

        return response()->json($ipcr_active);
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
