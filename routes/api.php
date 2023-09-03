<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // IPCR
    Route::resource('ipcr', 'IpcrFunctionApiController');

    // IPCR sub function
    Route::resource('ipcr-sub', 'IpcrSubFunctionApiController');

    // IPCR performance function
    Route::resource('ipcr-performance', 'IpcrPerformanceFunctionApiController');

    // IPCR performance function
    Route::resource('ipcr-signatory', 'IpcrSignatoryApiController');

    // Department
    Route::resource('department', 'DepartmentApiController');

    // Faculty
    Route::resource('faculty', 'FacultyApiController');
});
