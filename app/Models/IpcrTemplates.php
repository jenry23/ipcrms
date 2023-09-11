<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IpcrTemplates extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $guarded = ['id'];
}
