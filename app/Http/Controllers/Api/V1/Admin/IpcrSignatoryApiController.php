<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\IpcrResource;
use App\Models\IpcrSignatory;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class IpcrSignatoryApiController extends Controller
{
    public function index()
    {
        return new IpcrResource(IpcrSignatory::get()->sortBy('order'));
    }

    public function store(Request $request)
    {
        $payload = $request->all();

        foreach ($payload as $key => $data) {
            $where = isset($data['id']) ? ['id' => $data['id']] : ['name_of_signatories' => $data['name_of_signatories']];

            $ipcr = IpcrSignatory::updateOrCreate(
                $where,
                [
                    'name_of_signatories' => $data['name_of_signatories'],
                    'level_of_assestment' => $data['level_of_assestment'],
                    'position' => $data['position'],
                    'order' => $key,
                ]
            );
        }

        return (new IpcrResource($ipcr))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function destroy(int $id)
    {
        $ipcr_function = IpcrSignatory::findOrFail($id);
        $ipcr_function->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
