<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use \DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasAdvancedFilter, SoftDeletes, Notifiable, HasFactory;

    public $table = 'users';

    protected $appends = [
        'role_name',
    ];

    protected $hidden = [
        'remember_token',
        'password',
    ];

    protected $orderable = [
        'id',
        'name',
        'email',
        'email_verified_at',
    ];

    protected $dates = [
        'email_verified_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'name',
        'email',
        'ipcr_id',
        'email_verified_at',
        'roles.title',
    ];

    protected $fillable = [
        'name',
        'email',
        'ipcr_id',
        'email_verified_at',
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getIsAdminAttribute()
    {
        return $this->roles()->where('title', 'Admin')->exists();
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setEmailVerifiedAtAttribute($value)
    {
        $this->attributes['email_verified_at'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }

    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function scopeHasRole(Builder $query, string $role)
    {
        return $query->whereHas('roles', function (Builder $q) use ($role) {
            $q->where('title', $role);
        });
    }

    public function scopeHasNotRole(Builder $query, string $role)
    {
        return $query->whereHas('roles', function (Builder $q) use ($role) {
            $q->where('title', '!=', $role);
        });
    }

    public function getRoleNameAttribute()
    {
        return $this->roles->first()->title;
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function userDetails()
    {
        return $this->hasOne(UserDetail::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
