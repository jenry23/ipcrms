<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class IpcrFacultyAssesstment extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $guarded = ['id'];

    protected $appends = [
        'faculty_name',
    ];

    public function getFacultyNameAttribute(): string
    {
        return $this->faculty->name;
    }

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(User::class, 'faculty_id');
    }

    public function ipcr_template(): BelongsTo
    {
        return $this->belongsTo(IpcrTemplates::class);
    }
}
