<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('made_by_user_id');
            $table->unsignedBigInteger('item_id');
            $table->decimal('purchase_item_amount');
            $table->varchar('purchase_item_unit', 10);
            $table->decimal('purchase_item_cost');
            $table->varchar('purchase_item_location', 100);
            $table->foreign('made_by_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
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
        //
        Schema::dropIfExists('purchases');
    }
};
