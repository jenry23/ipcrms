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
                'name' => 'College of Computer Studies',
                'code' => 'CCS',
                'url'  => '/md/department/CCS.png'
            ],
            [
                'id'    => 2,
                'name' => 'College of Teacher Education',
                'code' => 'CTE',
                'url'  => '/md/department/CTE.png'
            ],
            [
                'id'    => 3,
                'name' => 'College of Business Management Administration',
                'code' => 'CBMA',
                'url'  => '/md/department/CBMA.png'
            ],
            [
                'id'    => 4,
                'name' => 'College of Hospitality Management and Tourism',
                'code' => 'CHMT',
                'url'  => '/md/department/CHMT.png'
            ],
            [
                'id'    => 5,
                'name' => 'College of Engineering',
                'code' => 'COE',
                'url'  => '/md/department/COE.png'
            ],
            [
                'id'    => 6,
                'name' => 'College of Industrial Technology',
                'code' => 'CIT',
                'url'  => '/md/department/CIT.png'
            ],

            [
                'id'    => 7,
                'name' => 'College of Arts and Sciences',
                'code' => 'CAS',
                'url'  => '/md/department/CAS.png'
            ],
            [
                'id'    => 8,
                'name' => 'College of Criminal Justice Education',
                'code' => 'CCJE',
                'url'  => '/md/department/CCJE.png'
            ],
            [
                'id'    => 9,
                'name' => 'College of Natural and Allied Health',
                'code' => 'CONAH',
                'url'  => '/md/department/CONAH.png'
            ]
        ];

        Department::insert($departments);
    }
}
