<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class IpcrPerformanceFunction extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $guarded = ['id'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function ipcrSubFunction(): BelongsTo
    {
        return $this->belongsTo(IpcrSubFunction::class);
    }

    public function uploadFiles(): HasMany
    {
        return $this->hasMany(IpcrUploadFiles::class);
    }
}
