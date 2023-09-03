<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrPerformanceFunctionsTable extends Migration
{
    public function up()
    {
        Schema::create('ipcr_performance_functions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('order');
            $table->foreignId('ipcr_sub_function_id')->constrained('ipcr_sub_functions');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_performance_functions');
    }
}
