<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrFunctionTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ipcr_function_templates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ipcr_template_id')->constrained('ipcr_templates');
            $table->foreignId('ipcr_function_id')->constrained('ipcr_functions');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ipcr_function_templates');
    }
}
