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
										<strong>Campus Director</strong>
									</div>
								</div>
							</h4>
						</div>
						<div class="card-body">
							<div class="card" v-for="campus in faculty" :key="campus.id">
								<div class="row">
									<div class="col-md-4">
										<h3>Evaludated IPCR {{ campus.faculty_name }}</h3>
									</div>
									<div class="col-md-4 mt-4">
										<h5>Status: {{ campus.status_id }}</h5>
									</div>
									<div class="col-md-2 mt-3">
										<input
											id="fileUpload"
											type="file"
											@change="updatedIPCR($event, campus.ipcr_template.id, campus.status_id,
                                            campus.faculty_id)"
											hidden
										/>
										<button class="btn btn-sm btn-primary" @click.prevent="chooseFiles()">
											Upload Updated IPCR
										</button>
										<!-- <button class="btn btn-sm btn-primary">Upload Updated IPCR</button> -->
									</div>
									<div class="col-md-1 mt-3">
										<button
											class="btn btn-sm btn-success"
											@click.prevent="downloadIpcr(campus.ipcr_template, campus.faculty_name)"
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

  <script>
	export default {
		data () {
			return {
				status: '',
				activeField: '',
				faculty: [],
			}
		},

		mounted () {
			this.fetchCampusDirectorIPCR();
		},

		methods: {
			focusField (name) {
				this.activeField = name
			},

			clearFocus () {
				this.activeField = ''
			},

			rateYourself () {
				axios.get('ipcr-templates/get-active').then(() => {
					this.fetchCampusDirectorIPCR();
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

			fetchCampusDirectorIPCR () {
				axios.get('ipcr-faculty-assesstment/campus-director').then((response) => {
					let data = response.data.data
					this.faculty = data;
				})
			},

			chooseFiles: function () {
				document.getElementById("fileUpload").click()
			},

			updatedIPCR (evt, id, status_id, faculty_id) {
				const files = evt.target.files[0];
				if (status_id === 'Done Evaluate') {
					this.$toast.error("Files Already Assesst!!");
				} else {
					if (files) {
						let form = new FormData();
						form.append('templates', files);
						form.append('template_id', id);
                        form.append('status_id', 'Done Evaluate by Campus Director')
                        form.append('faculty_id', faculty_id)

						let config = {
							header: {
								'Content-Type': 'multipart/form-data'
							}
						}
						axios
							.post(`ipcr-faculty-assesstment`, form, config)
							.then(response => {
								this.$toast.success("IPCR Evaluated successfully updated!");
								this.fetchCampusDirectorIPCR();
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
