<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LocalesController extends Controller
{
    public function languages()
    {
        return response()->json([
            'languages' => config('project.supported_languages'),
            'locale'    => app()->getLocale(),
        ]);
    }

    public function messages()
    {
        return response()->json([
            'auth'       => Auth::user(),
            'cruds'      => trans('cruds'),
            'global'     => trans('global'),
            'pagination' => trans('pagination'),
            'panel'      => trans('panel'),
            'passwords'  => trans('passwords'),
            'validation' => trans('validation'),
        ]);
    }
}
