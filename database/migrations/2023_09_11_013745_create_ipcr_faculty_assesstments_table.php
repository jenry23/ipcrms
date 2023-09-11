<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrFacultyAssesstmentsTable extends Migration
{
    public function up()
    {
        Schema::create('ipcr_faculty_assesstments', function (Blueprint $table) {
            $table->id();
            $table->string('status_id');
            $table->foreignId('ipcr_template_id')->constrained('ipcr_templates');
            $table->foreignId('faculty_id')->constrained('users');
            $table->foreignId('dean_id')->nullable()->constrained('users');
            $table->foreignId('hrmo_id')->nullable()->constrained('users');
            $table->foreignId('campus_director_id')->nullable()->constrained('users');
            $table->foreignId('department_id')->constrained('departments');
            $table->string('file_name')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_faculty_assesstments');
    }
}
