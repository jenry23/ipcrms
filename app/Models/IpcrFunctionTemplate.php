<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class IpcrFunctionTemplate extends Model
{
    use HasAdvancedFilter, HasFactory;

    protected $guarded = ['id'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function ipcrTemplate(): HasOne
    {
        return $this->hasOne(IpcrTemplates::class);
    }

    public function ipcrFunction(): HasMany
    {
        return $this->hasMany(IpcrFunction::class);
    }
}
