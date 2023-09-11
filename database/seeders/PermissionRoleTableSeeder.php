<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class PermissionRoleTableSeeder extends Seeder
{
    public function run()
    {
        // Admin
        $admin = Role::findOrFail(1);
        $admin_permissions = Permission::all();
        $admin->permissions()->sync($admin_permissions->pluck('id'));

        // Not Admin
        $faculty = $admin_permissions->filter(function ($permission) {
            return substr($permission->title, 0, 5) != 'user_'
                && substr($permission->title, 0, 5) != 'role_'
                && substr($permission->title, 0, 11) != 'permission_'
                && $permission->title != 'faculty_access';
        });

        Role::where('id', '!=', 1)->each(function (Role $role) use ($faculty) {
            $role->permissions()->sync($faculty);
        });
    }
}
