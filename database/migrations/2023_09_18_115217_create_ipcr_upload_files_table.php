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
            $table->foreignId('ipcr_performance_function_id')->constrained('ipcr_performance_functions');
            $table->string('file_name');
            $table->string('description');
            $table->string('remarks')->nullable();
            $table->foreignId('faculty_id')->constrained('users');
            $table->boolean('is_approved')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_upload_files');
    }
}
