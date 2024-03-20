<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrTemplates extends Migration
{
    public function up()
    {
        Schema::create('ipcr_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('year')->nullable();
            $table->boolean('active');
            $table->string('file_name')->nullable();
            $table->string('size')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_templates');
    }
}
