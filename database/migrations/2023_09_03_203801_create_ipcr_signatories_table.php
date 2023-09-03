<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIpcrSignatoriesTable extends Migration
{
    public function up()
    {
        Schema::create('ipcr_signatories', function (Blueprint $table) {
            $table->id();
            $table->string('name_of_signatories');
            $table->string('level_of_assestment');
            $table->string('position');
            $table->integer('order');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ipcr_signatories');
    }
}
