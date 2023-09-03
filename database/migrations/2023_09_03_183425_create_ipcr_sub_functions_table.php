<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrSubFunctionsTable extends Migration
{
    public function up()
    {
        Schema::create('ipcr_sub_functions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('order');
            $table->foreignId('ipcr_function_id')->constrained('ipcr_functions');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_sub_functions');
    }
}
