<template>
	<div class="container-fluid">
		<form @submit.prevent="submitForm">
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-primary card-header-icon">
							<div class="card-icon">
								<i class="material-icons">add</i>
							</div>
							<h4 class="card-title">Create
								<strong>Announcement</strong>
							</h4>
						</div>
						<div class="card-body">
							<back-button></back-button>
						</div>
						<div class="card-body">
							<bootstrap-alert />
							<div class="row">
								<div class="col-md-12">
									<label>Title</label>
									<input type="text" class="form-control" v-model="form.title" />
								</div>
                                <div class="col-md-12">
									<label>Date Of Submission</label>
									<input type="date" class="form-control" v-model="form.date_of_submission" />
								</div>
								<div class="col-md-12 mt-4">
									<label>Faculty</label>
									<v-select
										name="faculty_id"
										label="name"
										:key="'ipcr-function-id-field'"
										item-value="id"
										v-model="form.faculty_id"
                                        multiple
										:options="facultyList"
									/>
								</div>
								<div class="col-md-12 mt-4">
									<label>Message</label>
									<textarea class="form-control" v-model="form.message" rows="3"></textarea>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<vue-button-spinner
								class="btn-primary"
								:status="status"
								:isLoading="loading"
								:disabled="loading"
							>
								{{ $t('global.save') }}
							</vue-button-spinner>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
  <script>
	import _ from 'lodash';
	export default {
		data () {
			return {
				status: '',
				activeField: '',
				form: {
					title: null,
					date_of_submission: null,
                    faculty_id: [],
                    message: '',
				},
				loading: false,
				facultyList: [],
			}
		},

		mounted () {
			this.fetchCreateData()
		},

		methods: {
			updateFiles (event) {
				let events = event.target.files[0];
				this.form.files = events;
			},

			fetchCreateData () {
				axios.get('announcement/faculty')
                      .then(response => {
						this.facultyList = response.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			submitForm () {
				axios
					.post(`announcement`, this.form)
					.then(response => {
						this.$toast.success("Announcement successfully saved!");
						this.$router.go(-1);
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			focusField (name) {
				this.activeField = name
			},
			clearFocus () {
				this.activeField = ''
			}
		}
	}
  </script>
