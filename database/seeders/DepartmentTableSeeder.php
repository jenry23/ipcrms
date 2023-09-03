<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentTableSeeder extends Seeder
{
    public function run()
    {
        $departments = [
            [
                'id'    => 1,
                'name' => 'CCS',
                'code' => 'CCS',
                'url'  => '/md/department/CCS.png'
            ],
            [
                'id'    => 2,
                'name' => 'CTE',
                'code' => 'CTE',
                'url'  => '/md/department/CTE.png'
            ],
            [
                'id'    => 3,
                'name' => 'CBMA',
                'code' => 'CBMA',
                'url'  => '/md/department/CBMA.png'
            ],
            [
                'id'    => 4,
                'name' => 'CHMT',
                'code' => 'CHMT',
                'url'  => '/md/department/CHMT.png'
            ],
            [
                'id'    => 5,
                'name' => 'COE',
                'code' => 'COE',
                'url'  => '/md/department/COE.png'
            ],
            [
                'id'    => 6,
                'name' => 'CIT',
                'code' => 'CIT',
                'url'  => '/md/department/CIT.png'
            ],

            [
                'id'    => 7,
                'name' => 'CAS',
                'code' => 'CAS',
                'url'  => '/md/department/CAS.png'
            ],
            [
                'id'    => 8,
                'name' => 'CCJE',
                'code' => 'CCJE',
                'url'  => '/md/department/CCJE.png'
            ],
            [
                'id'    => 9,
                'name' => 'CONAH',
                'code' => 'CONAH',
                'url'  => '/md/department/CONAH.png'
            ]
        ];

        Department::insert($departments);
    }
}
