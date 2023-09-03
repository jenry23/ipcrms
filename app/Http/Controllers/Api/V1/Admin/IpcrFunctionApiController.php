<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrFunction;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class IpcrFunctionApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrFunction::with(['ipcrSubFunction'])->get()->sortBy('order'));
    }

    public function store(Request $request)
    {
        $payload = $request->all();

        foreach ($payload as $key => $data) {
            $where = isset($data['id']) ? ['id' => $data['id']] : ['name' => $data['name']];

            $ipcr = IpcrFunction::updateOrCreate(
                $where,
                [
                    'name' => $data['name'],
                    'order' => $key,
                ]
            );
        }

        return (new IpcrResource($ipcr))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());
        $user->roles()->sync($request->input('roles.*.id', []));

        return (new IpcrResource($user))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function destroy(int $id)
    {
        $ipcr_function = IpcrFunction::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
