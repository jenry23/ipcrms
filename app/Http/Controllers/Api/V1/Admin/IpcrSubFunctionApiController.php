<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrSubFunction;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class IpcrSubFunctionApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrSubFunction::with(['ipcrFunction'])->get()->sortBy('order'));
    }

    public function store(Request $request)
    {
        $payload = $request->all();

        foreach ($payload as $key => $data) {
            $where = isset($data['id']) ? ['id' => $data['id']] : ['name' => $data['name']];

            $ipcr = IpcrSubFunction::updateOrCreate(
                $where,
                [
                    'name' => $data['name'],
                    'order' => $key,
                    'ipcr_function_id' => $data['ipcr_function_id']
                ]
            );
        }

        return (new IpcrResource($ipcr))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function destroy(int $id)
    {
        $ipcr_function = IpcrSubFunction::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
