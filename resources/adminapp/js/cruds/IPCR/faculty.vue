<template>
	<div class="container-fluid">
		<form>
			<div class="row">
				<div class="col-md-12">
					<div class="card" style="width: 90vw">
						<div class="card-header card-header-primary card-header-icon">
							<h4 class="card-title">
								<div class="row">
									<div class="col-md-10">
										<strong>Faculty</strong>
									</div>
									<div class="col-md-2">
										<button class="btn btn-sm btn-warning" @click.prevent="rateYourself"
											v-if="availableRate">
											Rate Yourself
										</button>
									</div>
								</div>
							</h4>
						</div>
						<div class="container-fluid" v-if="templates.ipcr_function">
							<input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />
							<button class="btn btn-sm btn-primary ml-5" @click="openFileInput">Upload Signature</button>

							<div class="card"
								style="background-color: hsl(40, 100%, 97%); margin-left: 43px"
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
												I,<input type="text" size="15" v-model="templates.name" disabled />
												<input type="text" size="20" v-model="templates.roles_name" disabled />
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
												<th>
													Conforme:
													{{ $t('auth.name') }}
												</th>
												<th v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
													{{ signatory.level_of_assestment }} :
													{{ signatory.name_of_signatories }}
												</th>
											</tr>
											<tr>
												<th style="text-align: center;">
													Ratee
												</th>
												<th style="text-align: center;" v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
													{{ signatory.position }}
												</th>
											</tr>
										</table>
										<table class="table table-border two-table">
											<thead>
												<tr>
													<th class="ipcr-font-size" rowspan="2" colspan="1">PERFORMANCE INDICATOR</th>
													<th class="ipcr-font-size" rowspan="2" colspan="1">TARGET</th>
													<th class="ipcr-font-size" rowspan="2" colspan="1">ACCOMPLISHED</th>
													<th class="ipcr-font-size" rowspan="2" colspan="1">DATE OF SUBMISSION/COMPLETION</th>
													<th class="ipcr-font-size" rowspan="2" colspan="1">DATE SUBMITTED/COMPLETED</th>
													<th class="ipcr-font-size" rowspan="1" colspan="4">Rating</th>
													<th class="ipcr-font-size" rowspan="2" colspan="1">Remarks</th>
												</tr>
												<tr>
													<th class="ipcr-font-size" scope="col">QTY</th>
													<th class="ipcr-font-size" scope="col">QL/E</th>
													<th class="ipcr-font-size" scope="col">T</th>
													<th class="ipcr-font-size" scope="col">A</th>
												</tr>
											</thead>
											<tbody>
												<template v-for="ipcrFunction in templates.ipcr_function">
													<tr>
														<td colspan="10">{{ ipcrFunction.name }}</td>
													</tr>
													<template v-for="ipcrSubfunction in ipcrFunction.ipcr_subfunctions">
														<tr>
															<td colspan="10">{{ ipcrSubfunction.name }}</td>
														</tr>
														<template v-for="performance in ipcrSubfunction.ipcr_performance">
															<tr>
																<td>{{ performance.name }}</td>
													<td style="display: none">
														<input type="text" v-model="performance.id" />
													</td>
													<td><input type="number" v-model="performance.target" /></td>
													<td>
														<input type="number" v-model="performance.accomplished" disabled/>
													</td>
													<td>
														<input type="date" v-model="performance.date_of_submission" disabled/>
													</td>
													<td>
														<input type="date" v-model="performance.date_completed" disabled/>
													</td>
													<td>
														<input
															type="number"
															v-model="performance.quantity"
															style="width: 50px"
															disabled
														/>
													</td>
													<td>
														<input
															type="number"
															v-model="performance.quality"
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
													<td><input type="text" v-model="performance.remarks" disabled/></td>
															</tr>
														</template>
													</template>
												</template>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="5">
														Comments and Recommendations for Development Purposes:
														<input type="text" v-model="templates.recommendation" size="70"
															disabled />
													</td>
													<td>Numerical Rating: {{ numericalRating }}</td>
													<td colspan="4">Adjectival Rating: {{ adjectivalRating }}</td>
												</tr>
												<tr>
													<td v-for="(signatory, index) in signatures" colspan="2" :key="index">
														<span v-if="signatory.name">
															{{ signatory.name }}
															<img :src="signatory.signature" alt="My Image" style=" width: 128px; height: 50px;">
														</span>
													</td>
												</tr>
												<tr>
													<th colspan="2">RATEE</th>
													<th colspan="2">DEAN</th>
													<th colspan="2">HRMO</th>
													<th colspan="4">CAMPUS DIRECTOR</th>
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
										<h3>To Be Assessed By </h3>
									</div>
									<div class="col-md-4 mt-4">
										<h5>Status: {{ faculty.status_id }}</h5>
									</div>

									<div class="col-md-1 mt-3">
										<button class="btn btn-sm btn-primary" @click.prevent="viewFiles(faculty)">
											View
										</button>
									</div>
									<div class="col-md-1 mt-3">
										<button class="btn btn-sm btn-success"
											@click.prevent="downloadFiles(faculty.data)">
											Download
										</button>
									</div>
								</div>
							</div>
						</div>
						<facultytemplate :templates="json" :signatures="signatures">
							<template>
								<input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />
								<button class="btn btn-sm btn-primary ml-5" @click.prevent="openFileInput">Upload Signature</button>
							</template>
						</facultytemplate>
						<VueHtml2pdf
						 :manual-pagination="true" :enable-download="true" :paginate-elements-by-height="2000"
							pdf-orientation="landscape" pdf-content-width="1200px" pdf-format="a1" ref="html2Pdf">
							<section slot="pdf-content">
								<facultytemplate :templates="json" :signatures="signatures"></facultytemplate>
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

.ipcr-font-size {
	font-size: small !important;
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
			signatures: [],
			json: [],
		}
	},

	computed: {
		numericalRating () {
			let result = 0;
			let total_ipcr_performance1 = 0;

			_.each(this.templates.ipcr_function, (value, key) => {
				let sum1 = 0;
				let total_ipcr_performance2 = 0;

				_.each(value.ipcr_subfunctions, (value2, key2) => {
					let sum = 0;
					let total_ipcr_performance3 = 0;

					_.each(value2.ipcr_performance, (value3, key4) => {
						if (value3.asc) {
							sum += parseFloat(value3.asc);
						}
						total_ipcr_performance3 = key4 + 1;
					})
					total_ipcr_performance2 += total_ipcr_performance3
					sum1 += sum;
				})
				total_ipcr_performance1 += total_ipcr_performance2;
				result += sum1;
			});

			let compute = result / total_ipcr_performance1;

			return parseFloat(compute.toFixed(2));
		},

		adjectivalRating () {
			let value = null;

			if(this.numericalRating >= 4 && this.numericalRating < 5) {
				value = 'Very Satisfactory';
			} else if(this.numericalRating >= 3 && this.numericalRating < 4) {
				value = 'Satisfactory';
			} else if(this.numericalRating >= 2 && this.numericalRating < 3) {
				value = 'Unsatisfactory';
			} else if(this.numericalRating >= 1 && this.numericalRating < 2) {
				value = 'Poor';
			} else {
				value = 'Outstanding';
			}

			return value;
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

		setQuantity (value) {
			let sum = 0;

			if (value.target) {
				sum = parseInt(value.accomplished) / parseInt(value.target)
			}

			return sum;
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

		fetchFacultyIPCRFiles () {

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
			this.json = JSON.parse(data.data);

			this.signatures = [
				{
					'title': 'Discussed with:',
					'name': data.faculty_id ? data.faculty.name : null,
					'signature': data.faculty_signature ?? null,
				}, {
					'title': 'Assessed by:',
					'name': data.dean_id ? data.dean.name : null,
					'signature': data.dean_signature ?? null
				},
				{
					'title': 'Checked by:',
					'name': data.hrmo_id ? data.hrmo.name : null,
					'signature': data.hrmo_signature ?? null
				},
				{
					'title': 'Final Rating:',
					'name': data.campus_director_id ? data.campus_director.name : null,
					'signature': data.campus_director_signature ?? null
				}]
		},

		downloadFiles (data) {
			this.json = JSON.parse(data);
			this.$refs.html2Pdf.generatePdf()
		},

		openFileInput () {
			// Trigger a click event on the hidden file input when the button is clicked
			this.$refs.fileInput.click();
		},

		handleFileUpload (event) {
			let form = new FormData();
			let selectedFile = event.target.files[0];

			let data = {
				'assessment_id': this.faculty.id,
				'files': selectedFile,
				'is_faculty': 1
			}

			_.each(data, (value, key) => {
				form.append(key, value);
			})

			let config = {
				header: {
					'Content-Type': 'multipart/form-data',
				}
			}

			axios.post(`ipcr-faculty-assesstment/upload-signature`, form, config).then(response => {
				this.$toast.success("Signature Sucessfully Saved!");
				this.fetchFacultyIPCR();
				window.location.reload();
			}).catch(error => {
				let message = error.response.data.message || error.message
				this.$toast.error(message);
			})
			// You can now use the selectedFile object as needed
		},
	}
}
</script>
