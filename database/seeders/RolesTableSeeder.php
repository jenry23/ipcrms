<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        $roles = [
            [
                'id'    => 1,
                'title' => 'Admin',
            ],
            [
                'id'    => 2,
                'title' => 'Faculty',
            ],
            [
                'id'    => 3,
                'title' => 'Dean',
            ],
            [
                'id'    => 4,
                'title' => 'Hrmo',
            ],
            [
                'id'    => 5,
                'title' => 'Campus Director',
            ],
            [
                'id' => 6,
                'title' => 'Vp'
            ]
        ];

        Role::insert($roles);
    }
}
