<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\Admin\FacultyResource;
use App\Models\AcademicRank;
use App\Models\Department;
use App\Models\Faculty;
use App\Models\IpcrFunction;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class FacultyApiController extends Controller
{
    public function index()
    {
        return new FacultyResource(Faculty::with(['ipcrFunction', 'department', 'academicRank'])->get()->sortBy('order'));
    }

    public function create(User $user)
    {
        return response([
            'meta' => [
                'academic_rank' => AcademicRank::get(),
                'department' => Department::get(),
                'functions' => IpcrFunction::get(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $payload = $request->all();

        foreach ($payload as $key => $data) {
            $where = isset($data['id']) ? ['id' => $data['id']] : ['name' => $data['name']];

            $to_save = [
                'name' => $data['name'],
                'academic_rank_id' => is_array($data['academic_rank'])
                    ? $data['academic_rank']['id']
                    : $data['academic_rank'],
                'department_id' => is_array($data['department']) ? $data['department']['id'] : $data['department'],
                'ipcr_function_id' => is_array($data['ipcr_function']) ? $data['ipcr_function']['id'] : $data['ipcr_function'],
            ];

            $faculty = Faculty::updateOrCreate(
                $where,
                $to_save
            );
        }

        return (new FacultyResource($faculty))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function destroy(int $id)
    {
        $faculty = Faculty::findOrFail($id);
        $faculty->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
