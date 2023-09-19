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
										<button
											class="btn btn-sm btn-warning"
											@click.prevent="rateYourself"
											v-if="availableRate"
										>
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
								v-if="templates.ipcr_function"
							>
								<form @submit.prevent="submitForm">
									<div class="card-body">
										<div class="float-right">
											<p class="remove-space">SPMS Form 02</p>
											<p class="remove-space">Date: {{ dateToday }}</p>
											<p class="remove-space">Revised: 03</p>
										</div>
										<br />
										<br />
										<br />
										<div class="d-flex justify-content-center">
											<h4 style="font-weight: 900">
												INDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW
											</h4>
										</div>
										<div>
											<p style="word-wrap: break-word">
												I,<input type="text" size="15" :value="$t('auth.name')" disabled />
												<input type="text" size="20" :value="$t('auth.role_name')" disabled />
												of the Laguna State Polytechnic University, commit to deliver and
												agree to the rated of the following in accordance with the indicated
												measures for the
												<input type="text" size="5" v-model="templates.semester" /> Semester
												of Academic Year
												<input type="text" size="5" v-model="templates.year" />.
											</p>
										</div>
										<table class="table table-border">
											<tr>
												<th v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
													{{ signatory.level_of_assestment }} :
													{{ signatory.name_of_signatories }}
												</th>
											</tr>
											<tr>
												<th v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
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
											<tbody v-for="(functions, index) in templates.ipcr_function" :key="index">
												<td colspan="10">{{ functions.name }}</td>
												<tr
													v-for="(subFunction, index1) in functions.ipcr_subfunctions"
													:key="index1"
												>
													<td colspan="10">{{ subFunction.name }}</td>
												</tr>
												<tr
													v-for="(performance, index2) in functions.ipcr_performance"
													:key="index2 + performance"
												>
													<td>{{ performance.name }}</td>
													<td style="display: none">
														<input type="text" v-model="performance.id" />
													</td>
													<td><input type="number" v-model="performance.target" /></td>
													<td>
														<input type="number" v-model="performance.accomplished" />
													</td>
													<td>
														<input type="date" v-model="performance.date_of_submission" />
													</td>
													<td>
														<input type="date" v-model="performance.date_completed" />
													</td>
													<td>
														<input
															type="number"
															v-model="performance.quality"
															style="width: 50px"
														/>
													</td>
													<td>
														<input
															type="number"
															v-model="performance.qle"
															style="width: 50px"
															disabled
														/>
													</td>
													<td>
														<input
															type="number"
															v-model="performance.tar"
															style="width: 50px"
															disabled
														/>
													</td>
													<td>
														<input
															type="number"
															v-model="performance.asc"
															style="width: 50px"
															disabled
														/>
													</td>
													<td><input type="text" v-model="performance.remarks" /></td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="5">
														Comments and Recommendations for Development Purposes:
														<input
															type="text"
															v-model="templates.recommendation"
															size="70"
														/>
													</td>
													<td>Numerical Rating: {{ numericalRating }}</td>
													<td colspan="4">Adjectival Rating: {{ adjectivalRating }}</td>
												</tr>
												<tr>
													<td colspan="2">Discuss with: {{ templates.faculty_name }}</td>
													<td colspan="2">Assessed by: {{ templates.dean_name }}</td>
													<td colspan="2">Checked by:</td>
													<td colspan="4">Final Rating:</td>
												</tr>
												<tr>
													<th colspan="2">RATEE</th>
													<th colspan="2">CAMPUS DIRECTOR</th>
													<th colspan="2">HRMO</th>
													<th colspan="4">VICE PRESIDENT FOR ACADEMIC AFFAIRS</th>
												</tr>
											</tfoot>
										</table>
									</div>
									<div>
										<button class="btn btn-primary mb-4 btn-sm float-right">Submit</button>
										<button class="btn btn-danger mb-4 btn-sm float-right">Cancel</button>
									</div>
								</form>
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
										<button
											class="btn btn-sm btn-primary"
											@click.prevent="viewFiles(faculty.data)"
										>
											View
										</button>
									</div>
									<div class="col-md-1 mt-3">
										<button class="btn btn-sm btn-success" @click.prevent="downloadFiles(faculty.data)">
											Download
										</button>
									</div>
								</div>
							</div>
						</div>
						<facultytemplate :templates="json"></facultytemplate>
						<VueHtml2pdf
							:manual-pagination="true"
							:enable-download="true"
							:paginate-elements-by-height="2000"
							pdf-orientation="landscape"
							pdf-content-width="1200px"
							pdf-format="a3"
							ref="html2Pdf"
						>
							<section slot="pdf-content">
								<facultytemplate :templates="json"></facultytemplate>
							</section>
						</VueHtml2pdf>
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
	font-weight: 500;
}
.two-table th {
	border: 1px solid black;
	text-align: center;
}
.two-table th {
	vertical-align: middle !important;
}
.two-table tbody {
	border: 1px solid !important;
}
</style>
<script>
	import _ from 'lodash';
	import facultytemplate from './facultytemplate.vue'
	import VueHtml2pdf from 'vue-html2pdf'

	export default {
		components: {
			facultytemplate,
			VueHtml2pdf
		},

		data () {
			return {
				status: '',
				activeField: '',
				faculty: [],
				form: [],
				templates: [],
				availableRate: true,
				json: [],
			}
		},

		computed: {
			numericalRating () {
				let result = 0;
				_.each(this.templates.ipcr_function, (value, key) => {
					if (value.ipcr_performance.length > 0) {
						let sum = 0;
						_.each(value.ipcr_performance, (value2, key2) => {
							if (value2.quality) {
								sum += parseInt(value2.quality);
							}
						})
						result = sum;
					}
				});
				return result;
			},

			adjectivalRating () {
				return this.numericalRating / 100;
			},

			dateToday () {
				let date = new Date();
				this.templates.date_today = `${date.getMonth()}, ${date.getFullYear()}`;
				return this.templates.date_today;
			},
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
					if (Object.keys(data).length !== 0) {
						this.faculty = response.data;
						this.availableRate = false
						this.templates = []
					}
				})
			},

			submitForm () {
				axios.post(`ipcr-faculty-assesstment`, this.templates).then(response => {
					this.$toast.success("IPCR Assessment successfully saved!");
					this.fetchFacultyIPCR();
				}).catch(error => {
					let message = error.response.data.message || error.message
					this.$toast.error(message);
				})
			},

			viewFiles (data) {
				this.json = JSON.parse(data);
			},

			downloadFiles (data) {
				this.json = JSON.parse(data);
				this.$refs.html2Pdf.generatePdf()
			},
		}
	}
  </script>
