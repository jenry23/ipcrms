<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->string('contact_number')->nullable();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('academic_rank_id')->constrained('academic_ranks');
            $table->foreignId('department_id')->constrained('departments');
            $table->foreignId('role_id')->constrained('roles');
            $table->string('file_name')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
