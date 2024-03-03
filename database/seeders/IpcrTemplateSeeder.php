<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\IpcrFunction;
use App\Models\IpcrPerformanceFunction;
use App\Models\IpcrSubFunction;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IpcrTemplateSeeder extends Seeder
{
    private const IPCR_FUNCTION = [
        [
            'name' => 'Instruction',
            'ipcr_sub_functions' => [
                [
                    'name' => '1. Plan and prepare instructional materials to enhance insctruction',
                    'ipcr_performance_funtions' =>  [
                        'a)  No. of Syllabus prepared', 'b) No. of Course Guide', 'c) No. of SLM', 'd) Number of subject areas with community immersion/involvement component',
                    ]
                ],
                [
                    'name' => '2. Organizes classroom instruction.',
                    'ipcr_performance_funtions' =>  [
                        'a) Attendance Sheet', 'b)  Class records'
                    ]
                ],
                [
                    'name' => '3. Teaching effectiveness',
                    'ipcr_performance_funtions' =>  [
                        'a) Evaluation of Teaching Effectivess (CQA-SF-012)', 'b) Classroom Observation (CQA-SF-012)'
                    ]
                ],
                [
                    'name' => '4. Prepare and check  Summative/Evaluative/ Formative Tests.',
                    'ipcr_performance_funtions' =>  [
                        'a) TOS/ Rubrics', 'b)  Test Questions (term exams) / Performance`s based activities', 'c)  Answer Keys'
                    ]
                ],
                [
                    'name' => '5. Compute & Evaluate  Grades.',
                    'ipcr_performance_funtions' =>  [
                        'a) No. of grading sheets submitted & encoded'
                    ]
                ],
                [
                    'name' => '6. Consultation services to faculty and  students.',
                    'ipcr_performance_funtions' =>  [
                        'a)  Accomplishment Report'
                    ]
                ],
                [
                    'name' => '7. Prepare accomplishment report.',
                    'ipcr_performance_funtions' =>  [
                        'a)  Accomplishment Report'
                    ]
                ],
            ]
        ],
        [
            'name' => 'Research',
            'ipcr_sub_functions' => [
                [
                    'name' => '8. Research program/projects/studies.',
                    'ipcr_performance_funtions' =>  [
                        'a) Submitted and/or Approved R&D Proposal',
                        'b) Research Implemented and/or Completed within the Timeframe',
                        'c) Research Presented in Regional/National/International Conferences',
                        'd) Research Published in Peer-reviewed Journals',
                        'e) Filed/Published/Approved Intellectual Property Rights',
                        'f) Research Utilized/Deployed through Commercialization/Extension/Policy',
                        'g) Number of citations in journals/books',
                    ]
                ],
            ]
        ],
        [
            'name' => 'Extension',
            'ipcr_sub_functions' => [
                [
                    'name' => '9.  Extension projects.',
                    'ipcr_performance_funtions' =>  [
                        'a)  Extension proposal submitted/activity conducted',
                        'b)  Persons trained/provided with technical advise',
                        'c) Persons who avail the service who rated the service as good or better',
                        'd) Persons given training or advisory who rated the timeliness of service delivery as good or better',
                        'e) Technical advice responded within 3 days upon request',
                    ]
                ],
            ]
        ],
        [
            'name' => 'SUPPORT FUNCTION',
            'ipcr_sub_functions' => [
                [
                    'name' => '10.  Perform Officially-Deligated Assignment',
                    'ipcr_performance_funtions' =>  [
                        'a) Accomplishment Report'
                    ]
                ],
                [
                    'name' => '11. Participate in the Flag Raising Ceremony',
                    'ipcr_performance_funtions' =>  [
                        'a)  Attendance'
                    ]
                ]
            ]
        ],
        [
            'name' => 'ADMINISTRATIVE FUNCTIONS',
            'ipcr_sub_functions' => [
                [
                    'name' => '19. Perform Administrative Designation Functions',
                    'ipcr_performance_funtions' =>  [
                        'a. Prepare',
                        'b. Submit',
                        'C. Increase',
                    ]
                ]
            ]
        ],
    ];

    public function run()
    {
        $data = self::IPCR_FUNCTION;

        DB::transaction(function () use ($data) {
            foreach ($data as $key => $ipcrFunction) {
                $ipcr_function = IpcrFunction::create([
                    'name' => $ipcrFunction['name'],
                    'order' => $key
                ]);

                foreach ($ipcrFunction['ipcr_sub_functions'] as $key2 => $subFunction) {
                    $subfunction = IpcrSubFunction::create([
                        'name' => $subFunction['name'],
                        'order' => $key2,
                        'ipcr_function_id' => $ipcr_function->id
                    ]);

                    foreach ($subFunction['ipcr_performance_funtions'] as $key3 => $performance) {
                        IpcrPerformanceFunction::create([
                            'name' => $performance,
                            'order' => $key3,
                            'ipcr_sub_function_id' => $subfunction->id
                        ]);
                    }
                }
            }
        });
    }
}
