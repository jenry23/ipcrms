<template>
	<div class="container-fluid">
		<form>
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary card-header-icon">
							<h4 class="card-title">
								<div class="row">
									<div class="col-md-10">
										<strong>Faculty</strong>
									</div>
									<div class="col-md-2">
										<button class="btn btn-sm btn-warning" @click.prevent="rateYourself">
											Rate Yourself
										</button>
									</div>
								</div>
							</h4>
						</div>
						<div class="container-fluid">
							<div
								class="card"
								style="background-color: hsl(40, 100%, 97%); width: 90rem; margin-left: 43px"
							>
								<div class="card-body">
									<div class="float-right">
										<p class="remove-space">SPMS Form 02</p>
										<p class="remove-space">Date: September 2021</p>
										<p class="remove-space">Revised: 03</p>
									</div>
									<br />
									<br />
									<br />
									<div class="d-flex justify-content-center">
										<h4 style="font-weight: 900">INDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW</h4>
									</div>
									<div>
										<p style="word-wrap: break-word">
											I,<input type="text" size="15" v-model="forms.name" placeholder="Name" />
											<input
												type="text"
												size="20"
												v-model="forms.academic_rank"
												placeholder="Academic Rank"
											/>
											of the Laguna State Polytechnic University, commit to deliver and agree to
											the rated of the following in accordance with the indicated measures for
											the <input type="text" size="5" v-model="forms.semester" /> Semester of
											Academic Year <input type="text" size="5" v-model="forms.year" />.
										</p>
									</div>
									<table class="table table-border">
										<tr>
											<th v-for="signatory in templates[0].ipcr_signatory" :key="signatory.id">
												{{ signatory.level_of_assestment }} :
												{{ signatory.name_of_signatories }}
											</th>
										</tr>
										<tr>
											<th v-for="signatory in templates[0].ipcr_signatory" :key="signatory.id">
												{{ signatory.position }}
											</th>
										</tr>
									</table>
									<table class="table table-border two-table">
										<tr>
											<th rowspan="2" colspan="1">PERFORMANCE INDICATOR</th>
											<th rowspan="2" colspan="1">TARGET</th>
											<th rowspan="2" colspan="1">ACCOMPLISHED</th>
											<th rowspan="2" colspan="1">DATE OF SUBMISSION/COMPLETION</th>
											<th rowspan="2" colspan="1">DATE SUBMITTED/ COMPLETED</th>
											<th rowspan="1" colspan="4">Rating</th>
											<th rowspan="2" colspan="1">Remarks</th>
										</tr>
										<tr>
											<th scope="col">QTY</th>
											<th scope="col">QL/E</th>
											<th scope="col">T</th>
											<th scope="col">A</th>
										</tr>
										<tbody v-for="(functions, index) in templates[0].ipcr_function" :key="index">
											<td colspan="10">{{ functions.name }}</td>
											<!-- <tr
												v-for="(subFunction, subIndex) in functions.ipcr_sub_function"
												:key="subIndex"
											>
												<td colspan="10">{{ subFunction.name }}</td>
											</tr>
											<tr
												v-for="(ipcr_performance, ipcrPerformanceIndex) in functions
													.ipcr_sub_function[index]"
												:key="ipcrPerformanceIndex"
											>
											{{ ipcr_performance.name }}
												<tr
													v-if="
														ipcr_performance instanceof Array && ipcr_performance[index]
													"
												>
												{{ ipcr_performance[index].name }}
												</tr>
											</tr> -->
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="card-body">
							<div class="card" v-if="Object.keys(faculty).length !== 0">
								<div class="row">
									<div class="col-md-4">
										<h3>Assessment by {{ faculty.faculty_name }}</h3>
									</div>
									<div class="col-md-4 mt-4">
										<h5>Status: {{ faculty.status_id }}</h5>
									</div>
									<div class="col-md-1 mt-3">
										<button class="btn btn-sm btn-primary" @click="viewFiles(faculty.id)">
											View
										</button>
									</div>
									<div class="col-md-1 mt-3">
										<button
											class="btn btn-sm btn-success"
											@click.prevent="downloadIpcr(faculty.ipcr_template, faculty.faculty_name)"
										>
											Download
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="card-footer"></div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<style>
.remove-space {
	margin: 0;
	padding: 0;
}
table,
th,
td {
	border: 1px solid !important;
}
.two-table th {
	border: 1px solid black;
	text-align: center;
}
.two-table th {
	vertical-align: middle !important;
}
</style>

  <script>
	export default {
		data () {
			return {
				status: '',
				activeField: '',
				faculty: [],
				forms: [],
				templates: [{
					"ipcr_function": [
						{
							"id": 1,
							"name": "INSTRUCTION",
							"order": 0,
							"created_at": "2023-09-17 10:00:24",
							"updated_at": "2023-09-17 10:00:24",
							"deleted_at": null,
							"ipcr_sub_function": [
								{
									"id": 1,
									"name": "1. Plan and prepare instructional materials to enhance instruction",
									"order": 0,
									"ipcr_function_id": 1,
									"created_at": "2023-09-17 10:01:02",
									"updated_at": "2023-09-17 10:01:02",
									"deleted_at": null,
									"ipcr_performance": [
										{
											"id": 1,
											"name": "a) No. of Syllabus prepared",
											"order": 0,
											"ipcr_sub_function_id": 1,
											"created_at": "2023-09-17 10:03:13",
											"updated_at": "2023-09-17 10:03:13",
											"deleted_at": null
										},
										{
											"id": 2,
											"name": "b) No. of Course Guide",
											"order": 1,
											"ipcr_sub_function_id": 1,
											"created_at": "2023-09-17 10:03:13",
											"updated_at": "2023-09-17 10:03:13",
											"deleted_at": null
										}
									]
								},
								{
									"id": 2,
									"name": "2. Organizes classroom instruction",
									"order": 1,
									"ipcr_function_id": 1,
									"created_at": "2023-09-17 10:01:02",
									"updated_at": "2023-09-17 10:01:02",
									"deleted_at": null,
									"ipcr_performance": []
								},
								{
									"id": 3,
									"name": "3. Teaching effectiveness",
									"order": 2,
									"ipcr_function_id": 1,
									"created_at": "2023-09-17 10:01:02",
									"updated_at": "2023-09-17 10:01:02",
									"deleted_at": null,
									"ipcr_performance": []
								},
								{
									"id": 4,
									"name": "4. Prepare and check Summative\/Evaluate\/Formative Tests",
									"order": 3,
									"ipcr_function_id": 1,
									"created_at": "2023-09-17 10:01:10",
									"updated_at": "2023-09-17 10:01:10",
									"deleted_at": null,
									"ipcr_performance": []
								}
							]
						},
						{
							"id": 2,
							"name": "RESEARCH",
							"order": 1,
							"created_at": "2023-09-17 10:00:24",
							"updated_at": "2023-09-17 10:00:24",
							"deleted_at": null,
							"ipcr_sub_function": []
						},
						{
							"id": 3,
							"name": "EXTENSION",
							"order": 2,
							"created_at": "2023-09-17 10:00:24",
							"updated_at": "2023-09-17 10:00:24",
							"deleted_at": null,
							"ipcr_sub_function": []
						}
					],
					"ipcr_signatory": [
						{
							"id": 1,
							"name_of_signatories": "Mark Bernardino",
							"level_of_assestment": "Discussed with",
							"position": "Ratee",
							"order": 0,
							"created_at": "2023-09-17 10:03:56",
							"updated_at": "2023-09-17 10:03:56",
							"deleted_at": null
						},
						{
							"id": 2,
							"name_of_signatories": "Engr. Beltran P. Pedrigal",
							"level_of_assestment": "Assessed by",
							"position": "Campus Director",
							"order": 1,
							"created_at": "2023-09-17 10:03:56",
							"updated_at": "2023-09-17 10:03:56",
							"deleted_at": null
						}
					]
				}],
			}
		},

		mounted () {
			this.fetchFacultyIPCR();
		},

		methods: {
			focusField (name) {
				this.activeField = name
			},

			clearFocus () {
				this.activeField = ''
			},

			rateYourself () {
				axios.get('ipcr-templates/get-active').then((response) => {
					let data = response.data;
					if (Object.keys(data).length === 0) {
						this.$toast.error("Please Upload IPCR Template to Admin");
					} else {
						this.$toast.success("IPCR Create Rate Yourself!");
						this.templates = data;
						this.fetchFacultyIPCR();
					}
				}).catch((error) => {
					console.log(error);
				})
			},

			downloadIpcr (ipcr, faculty_name) {
				let id = ipcr.id;
				let file = `${ipcr.file_name} by ${faculty_name}`;
				let replace_filename = file.replace('.xlsx', '');
				let file_name = `${replace_filename}.xlsx`;

				axios.get(`ipcr-templates/download/${id}`, {
					headers: {
						Accept: 'application/octet-stream',
					},
					responseType: 'arraybuffer',
				})
					.then((response) => {
						const url = window.URL.createObjectURL(new Blob([response.data]));
						const link = document.createElement('a');
						link.href = url;
						link.setAttribute('download', file_name);
						document.body.appendChild(link);
						link.click();
					})
			},

			fetchFacultyIPCR () {
				axios.get('ipcr-faculty-assesstment/faculty').then((response) => {
					let data = response.data.data
					this.faculty = data;
				})
			},

			chooseFiles: function () {
				document.getElementById("fileUpload").click()
			},

			updatedIPCR (evt, id, status_id) {
				const files = evt.target.files[0];
				if (status_id === 'Done Assessment') {
					this.$toast.error("Files Already Assesst!!");
				} else {

					if (files) {
						let form = new FormData();
						form.append('templates', files);
						form.append('template_id', id);
						form.append('status_id', 'Done Assessment')
						let config = {
							header: {
								'Content-Type': 'multipart/form-data'
							}
						}
						axios
							.post(`ipcr-faculty-assesstment`, form, config)
							.then(response => {
								this.$toast.success("IPCR Assessment successfully updated!");
								this.fetchFacultyIPCR();
							}).catch(error => {
								let message = error.response.data.message || error.message
								this.$toast.error(message);
							})
					} else {
						this.$toast.error("Please insert updated files!!");
					}
				}
			},
		}
	}
  </script>
