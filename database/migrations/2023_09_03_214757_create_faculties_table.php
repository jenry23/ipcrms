<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacultiesTable extends Migration
{
    public function up()
    {
        Schema::create('faculties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('academic_rank_id')->constrained('academic_ranks');
            $table->foreignId('department_id')->constrained('departments');
            $table->foreignId('ipcr_function_id')->constrained('ipcr_functions');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('faculties');
    }
}
