<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DateTimeInterface;

class IpcrUploadFiles extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    protected $guarded = ['id'];

    protected $orderable = [
        'id',
        'ipcr_function_id',
        'ipcr_performance_function.name',
        'file_name',
        'description',
        'remarks',
        'faculty_id',
        'is_approved',
    ];

    protected $filterable = [
        'id',
        'file_name',
        'description',
        'remarks',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function uploader()
    {
        return $this->belongsTo(User::class, 'faculty_id');
    }

    public function ipcrFunction()
    {
        return $this->belongsTo(IpcrFunction::class);
    }

    public function ipcrPerformanceFunction()
    {
        return $this->belongsTo(IpcrPerformanceFunction::class);
    }
}
