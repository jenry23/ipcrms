<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\Department;
use App\Models\IpcrFacultyAssesstment;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\IpcrTemplates;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;

class IpcrFacultyAssesstmentApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrFacultyAssesstment::get());
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $roles = $user->roles()->first();

        if ($roles->title === 'Faculty') {
            $ipcr_active = IpcrTemplates::where('active', true)->first();
            $request['faculty_name'] = $user->name;
            $data = json_encode($request->all(), true);

            IpcrFacultyAssesstment::create([
                'status_id' => 'On Going Assesment',
                'ipcr_template_id' => $ipcr_active->id,
                'faculty_id' => $user->id,
                'department_id' => $user->userDetails->department_id,
                'data' => $data
            ]);
        } else {
            $roles_id = Str::snake($roles->title) . "_id";
            $roles_name = Str::snake($roles->title) . "_name";
            $request[$roles_name] = $user->name;
            $data = json_encode($request->all(), true);

            $ipcr_faculty_assement = IpcrFacultyAssesstment::findOrFail($request->id);

            $ipcr_faculty_assement->update([
                'data' => $data,
                $roles_id => $user->id
            ]);
        }

        return response()->json();
    }

    public function getFacultyAssesstment()
    {
        $user_id = Auth::user()->id;
        $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template', 'faculty', 'dean', 'hrmo', 'campus_director'])->where('faculty_id', $user_id)->get();

        return new IpcrResource($ipcr_faculty);
    }

    public function getCampusDirectorAssesstment()
    {
        $user = Auth::user();
        $roles = $user->roles()->first();

        if ($roles->title === 'Dean') {
            $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template', 'faculty', 'dean', 'hrmo', 'campus_director'])
                ->where('department_id', $user->userDetails->department_id)
                ->get();
        } else {
            $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template', 'faculty', 'dean', 'hrmo', 'campus_director'])
                ->get();
        }

        return new IpcrResource($ipcr_faculty);
    }

    public function getDepartmentAssesstment($department_id)
    {
        $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template', 'faculty', 'dean', 'hrmo', 'campus_director'])
            ->where('department_id', $department_id)
            ->get();

        $department_name = Department::find($department_id)->name ?? null;

        return new IpcrResource([
            'ipcr' => $ipcr_faculty,
            'department_name' => $department_name
        ]);
    }


    public function destroy(int $id)
    {
        $ipcr_function = IpcrFacultyAssesstment::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function downloadIPCR($id)
    {
        $ipcr_active = IpcrFacultyAssesstment::findOrFail($id);
        $filename = $ipcr_active->file_name;
        $ipcr_active_url = Storage::disk('public')->path($ipcr_active->file_name);

        return response()->download($ipcr_active_url, $filename, [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'inline; filename="' . $filename . '"'
        ]);
    }

    public function uploadSignature(Request $request)
    {
        $user = Auth::user();
        $roles = $user->roles()->first();

        $assessment_id = $request->assessment_id;
        $ipcr_faculty = IpcrFacultyAssesstment::findOrFail($assessment_id);

        $file = $request->file('files');

        $filename = $file->getClientOriginalName();

        Storage::disk('public')->put($filename, file_get_contents($file));
        $url = URL::asset('storage/' . $filename);

        if ($roles->id === 3) {
            $ipcr_faculty->update([
                'dean_signature' => $url,
                'dean_id' => Auth::user()->id,
                'status_id' => 'Done Evaluated by Dean'
            ]);
        } elseif ($roles->id === 4) {
            $ipcr_faculty->update([
                'hrmo_signature' => $url,
                'hrmo_id' => Auth::user()->id,
                'status_id' => 'Done Evaluated by HRMO'
            ]);
        } elseif ($roles->id === 5) {
            $ipcr_faculty->update([
                'campus_director_signature' => $url,
                'campus_director_id' => Auth::user()->id,
                'status_id' => 'Done Evaluated by Campus Director'
            ]);
        } elseif ($roles->id === 1) {
            $ipcr_faculty->update([
                'faculty_signature' => $url,
                'faculty_id' => Auth::user()->id,
                'status_id' => 'On Going Assessment'
            ]);
        }

        return new IpcrResource($ipcr_faculty);
    }
}
