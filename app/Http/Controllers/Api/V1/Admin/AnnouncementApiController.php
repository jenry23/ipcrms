<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\Announcement;
use App\Models\IpcrFacultyAssesstment;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Str;
use App\Models\Permission;
use Illuminate\Support\Facades\DB;

class AnnouncementApiController extends Controller
{
    public function index()
    {
        $user_id = Auth::user()->id;

        $announcement = Announcement::with(['faculty'])->get()
            ->filter(function (Announcement $announcement) use ($user_id) {
                $faculty_ids = explode(',', $announcement->faculty_ids);

                return in_array($user_id, $faculty_ids);
            });

        return new IpcrResource($announcement);
    }

    public function getFaculty()
    {
        $ipcr_faculty = User::all();

        return response()->json($ipcr_faculty);
    }

    public function store(Request $request)
    {
        $user_id = Auth::user()->id;
        $format_permission_name = Str::snake($request->title);
        $permission_name = "$format_permission_name" . "_" . "$user_id";
        $faculty_ids = collect($request->faculty_id)->pluck('id')->toArray();

        $data = [
            'title' => $request->title,
            'date_of_submission' => $request->date_of_submission,
            'message' => $request->message,
            'from' => $user_id,
            'permission_name' => $permission_name,
            'faculty_ids' => implode(",", $faculty_ids)
        ];

        Announcement::create($data);

        return response()->json($data);
    }

    public function getFacultyAssesstment()
    {
        $user_id = Auth::user()->id;
        $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template'])->where('faculty_id', $user_id)->first();

        return new IpcrResource($ipcr_faculty);
    }

    public function getCampusDirectorAssesstment()
    {
        $ipcr_faculty = IpcrFacultyAssesstment::with(['ipcr_template'])->get();

        return new IpcrResource($ipcr_faculty);
    }

    public function destroy(int $id)
    {
        $ipcr_function = IpcrFacultyAssesstment::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
