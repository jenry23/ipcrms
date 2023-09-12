<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFacultyAssesstment;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class IpcrFacultyAssesstmentApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrFacultyAssesstment::get());
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $file = $request->templates;
        $name = $file->getClientOriginalName();
        Storage::disk('public')->put($name, file_get_contents($file));

        IpcrFacultyAssesstment::where([
            'faculty_id' =>  $request->faculty_id ? (int) $request->faculty_id :  $user->id,
            'ipcr_template_id' => (int) $request->template_id
        ])->update([
            'status_id' => $request->status_id ?? null,
            'file_name' => $name
        ]);

        return response()->json();
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
}
