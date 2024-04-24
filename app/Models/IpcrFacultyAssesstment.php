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

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(User::class, 'faculty_id');
    }

    public function dean(): BelongsTo
    {
        return $this->belongsTo(User::class, 'dean_id');
    }

    public function hrmo(): BelongsTo
    {
        return $this->belongsTo(User::class, 'hrmo_id');
    }

    public function campus_director(): BelongsTo
    {
        return $this->belongsTo(User::class, 'campus_director_id');
    }

    public function vp(): BelongsTo
    {
        return $this->belongsTo(User::class, 'vp_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function ipcr_template(): BelongsTo
    {
        return $this->belongsTo(IpcrTemplates::class);
    }
}
