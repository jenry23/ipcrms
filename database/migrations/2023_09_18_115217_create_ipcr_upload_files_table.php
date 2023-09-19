<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrUploadFilesTable extends Migration
{
    public function up()
    {
        Schema::create('ipcr_upload_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ipcr_function_id')->constrained('ipcr_functions');
            $table->string('file_name');
            $table->string('description');
            $table->foreignId('faculty_id')->constrained('users');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_upload_files');
    }
}
