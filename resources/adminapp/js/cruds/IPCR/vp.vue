<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-primary card-header-icon">
						<h4 class="card-title">
							<div class="row">
								<div class="col-md-10">
									<strong>Vice President Of Academic Affairs</strong>
								</div>
							</div>
						</h4>
					</div>
					<div class="card-body" v-if="Object.keys(faculty).length !== 0">
						<div class="card" v-for="fac in faculty" :key="fac.id">
							<div class="row">
								<div class="col-md-4">
									<h3>Final Check IPCR of {{ fac.faculty.name }}</h3>
								</div>
								<div class="col-md-4 mt-4">
									<h5>Status: {{ fac.status_id }}</h5>
								</div>

								<div class="col-md-1 mt-3">
									<button class="btn btn-sm btn-primary" @click.prevent="editFiles(fac)">
										Edit
									</button>
								</div>
								<div class="col-md-1 mt-3">
									<button class="btn btn-sm btn-success" @click.prevent="downloadFiles(fac.data)">
										Download
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="container-fluid" v-if="templates.ipcr_function">
						<input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />
						<button class="btn btn-sm btn-primary ml-5" @click="openFileInput">Upload Signature</button>

						<div class="card" style="background-color: hsl(40, 100%, 97%); width: 90rem; margin-left: 43px">
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
										<h4 style="font-weight: 900">INDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW</h4>
									</div>
									<div>
										<p style="word-wrap: break-word">
											I,<input type="text" size="15" v-model="templates.name" disabled />
											<input type="text" size="20" v-model="templates.roles_name" disabled />
											of the Laguna State Polytechnic University, commit to deliver and agree to
											the rated of the following in accordance with the indicated measures for
											the
											<input type="text" size="5" v-model="templates.semester" disabled />
											Semester of Academic Year
											<input type="text" size="5" v-model="templates.year" disabled />.
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
										<tbody>
											<template v-for="(ipcrFunction, index) in templates.ipcr_function">
												<tr>
													<td colspan="10">{{ ipcrFunction.name }}</td>
												</tr>
												<template
													v-for="(ipcrSubfunction, index1) in ipcrFunction.ipcr_subfunctions">
													<tr>
														<td colspan="10">{{ ipcrSubfunction.name }}</td>
													</tr>
													<template
														v-for="(performance, index2) in ipcrSubfunction.ipcr_performance">
														<tr>
															<td>{{ performance.name }}</td>
															<td style="display: none">
																<input type="text" v-model="performance.id" />
															</td>
															<td>
																<input type="number" v-model="performance.target"
																	disabled />
															</td>
															<td>
																<input type="number" v-model="performance.accomplished"
																	disabled />
															</td>
															<td>
																<input type="date"
																	v-model="performance.date_of_submission" disabled />
															</td>
															<td>
																<input type="date" v-model="performance.date_completed"
																	disabled />
															</td>
															<td>
																<input type="number" v-model="performance.quantity"
																	style="width: 50px" disabled />
															</td>
															<td>
																<input type="number" v-model="performance.quality"
																	style="width: 50px" disabled />
															</td>
															<td>
																<input type="number" v-model="performance.tar"
																	style="width: 50px" disabled />
															</td>
															<td>
																<input type="number" v-model="performance.asc"
																	style="width: 50px" disabled />
															</td>
															<td>
																<input type="text" v-model="performance.remarks"
																	disabled />
															</td>
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
												<td v-for="(signatory, index) in signatures"
													:colspan="signatory.title === 'Final Rating:' ? '4' : '2'"
													:key="index">
													{{ signatory.title }}
													<span v-if="signatory.name">
														{{ signatory.name }}
														<img :src="signatory.signature" alt="My Image"
															style=" width: 128px; height: 50px;">
													</span>
												</td>
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
									<button class="btn btn-primary mb-4 btn-sm float-right" type="submit">
										Submit
									</button>
									<button class="btn btn-danger mb-4 btn-sm float-right">Cancel</button>
								</div>
							</form>
						</div>
					</div>
					<VueHtml2pdf :manual-pagination="true" :enable-download="true" :paginate-elements-by-height="2000"
						pdf-orientation="landscape" pdf-content-width="1200px" pdf-format="a3" ref="html2Pdf">
						<section slot="pdf-content">
							<facultytemplate :templates="templates" :signatures="signatures"></facultytemplate>
						</section>
					</VueHtml2pdf>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
			templates: [],
			json: [],
			assestment_id: '',
			template_id: '',
			signatures: [],
		}
	},

	mounted () {
		this.fetchVPIPCR();
	},

	computed: {
		numericalRating () {
			let result = 0;
			_.each(this.templates.ipcr_function, (value, key) => {
				let sum1 = 0;
				_.each(value.ipcr_subfunctions, (value2, key2) => {
					let sum = 0;
					_.each(value2.ipcr_performance, (value3, key4) => {
						if (value3.quality) {
							sum += parseInt(value3.quality);
						}
					})
					sum1 += sum;
				})
				result += sum1;
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

	methods: {
		focusField (name) {
			this.activeField = name
		},

		clearFocus () {
			this.activeField = ''
		},

		fetchVPIPCR () {
			axios.get('ipcr-faculty-assesstment/campus-director').then((response) => {
				let data = response.data.data
				this.faculty = data;
			})
		},

		editFiles (data) {
			this.templates = JSON.parse(data.data);
			this.templates.id = data.id;
			// this.templates.status_id = "Done Evaluate By Campus Director";

			this.signatures = [{
				'title': 'Discuss with:',
				'name': data.dean_id ? data.dean.name : null,
				'signature': data.dean_signature ?? null
			},
			{
				'title': 'Assessed by:',
				'name': data.campus_director_id ? data.campus_director.name : null,
				'signature': data.campus_director_signature ?? null
			},
			{
				'title': 'Checked by:',
				'name': data.hrmo_id ? data.hrmo.name : null,
				'signature': data.hrmo_signature ?? null
			},
			{
				'title': 'Final Rating:',
				'name': data.vp_id ? data.vp.name : null,
				'signature': data.vp_signature ?? null,
			}]
		},

		submitForm () {
			axios.post(`ipcr-faculty-assesstment`, this.templates).then(response => {
				this.$toast.success("IPCR Evaluate successfully saved!");
				window.location.reload();
			}).catch(error => {
				let message = error.response.data.message || error.message
				this.$toast.error(message);
			})
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

			console.log(this.templates.id);
			let data = {
				'assessment_id': this.templates.id,
				'files': selectedFile,
				'is_vp': 1
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
				window.location.reload();
				this.fetchVPIPCR();
			}).catch(error => {
				let message = error.response.data.message || error.message
				this.$toast.error(message);
			})
			// You can now use the selectedFile object as needed
		},

	}
}
</script>
