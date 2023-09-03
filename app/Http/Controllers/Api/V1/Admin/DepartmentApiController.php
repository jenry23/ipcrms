<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Http\Resources\Admin\DepartmentResource;

class DepartmentApiController extends Controller
{
    public function index()
    {
        return new DepartmentResource(Department::get());
    }
}
