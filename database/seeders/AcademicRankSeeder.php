<?php

namespace Database\Seeders;

use App\Models\AcademicRank;
use Illuminate\Database\Seeder;

class AcademicRankSeeder extends Seeder
{
    public function run()
    {
        $academic_rank = [
            [
                'id'    => 1,
                'name' => 'Professor I',
            ],
            [
                'id'    => 2,
                'name' => 'Professor II',
            ],
            [
                'id'    => 3,
                'name' => 'Professor III',
            ],
            [
                'id'    => 4,
                'name' => 'Professor IV',
            ],
        ];

        AcademicRank::insert($academic_rank);
    }
}
