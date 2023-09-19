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
    Route::get('users/me', 'UsersApiController@me')->name('users.me');
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

    // Templates
    Route::get('ipcr-templates/download/{id}', 'IpcrTemplateApiController@downloadIPCR');
    Route::get('ipcr-templates/get-active', 'IpcrTemplateApiController@getActiveIPCR');
    Route::resource('ipcr-templates', 'IpcrTemplateApiController');
    Route::post('ipcr-templates/set-active', 'IpcrTemplateApiController@setActive');

    // IPCR faculty Assesstment function
    Route::get('ipcr-faculty-assesstment/faculty', 'IpcrFacultyAssesstmentApiController@getFacultyAssesstment');
    Route::get('ipcr-faculty-assesstment/campus-director', 'IpcrFacultyAssesstmentApiController@getCampusDirectorAssesstment');
    Route::get('ipcr-faculty-assesstment/download/{id}', 'IpcrFacultyAssesstmentApiController@downloadIPCR');
    Route::resource('ipcr-faculty-assesstment', 'IpcrFacultyAssesstmentApiController');

    // Upload Files
    Route::get('upload-file/download/{id}', 'UploadFileApiController@downloadFile');
    Route::get('upload-file/ipcr-function', 'UploadFileApiController@getActiveFunctions');
    Route::resource('upload-file', 'UploadFileApiController');

    // Announcement
    Route::get('announcement/faculty', 'AnnouncementApiController@getFaculty');
    Route::resource('announcement', 'AnnouncementApiController');
});
