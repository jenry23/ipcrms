<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSignatureIpcrFacultyAssessmentTable extends Migration
{
    public function up()
    {
        Schema::table('ipcr_faculty_assesstments', static function (Blueprint $table) {
            $table->foreignId('vp_id')->nullable()->constrained('users');
            $table->string('dean_signature')->nullable();
            $table->string('hrmo_signature')->nullable();
            $table->string('campus_director_signature')->nullable();
            $table->string('vp_signature')->nullable();
        });
    }

    public function down()
    {
        //
    }
}
