<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-primary card-header-icon">
						<h4 class="card-title">Faculty</h4>
					</div>
					<div class="card-body"></div>
					<!-- Functions -->
					<div class="row">
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<h4>FACULTY MEMBERS - TEACHING</h4>
									<div class="form-group bmd-form-group">
										<input
											type="text"
											class="form-control ipcr-select"
											size="50"
											v-model="name"
											placeholder="Name"
											@focus="focusField('name')"
											@blur="clearFocus"
											required
										/>
										<br />
										<v-select
											class="form-control ipcr-select"
											name="academic_rank"
											label="name"
											v-model="academic_rank"
											:options="academicRankOptions"
											placeholder="Academic Rank"
											@focus="focusField('academic_rank')"
											@blur="clearFocus"
										/>
										<br />
										<v-select
											class="form-control ipcr-select"
											name="department"
											label="name"
											v-model="department"
											:options="departmentOptions"
											placeholder="Department"
											@focus="focusField('department')"
											@blur="clearFocus"
										/>
										<br />
										<v-select
											class="form-control ipcr-select"
											name="ipcr_function"
											label="name"
											v-model="ipcr_function"
											:options="ipcrFunctionOptions"
											placeholder="Function"
											@focus="focusField('ipcr_function')"
											@blur="clearFocus"
										/>
										<br />
										<button
											type="button"
											class="btn btn-sm btn-warning"
											@click="addUpdateFaculty"
										>
											{{ isForFacultyUpdate ? 'Update' : 'Add' }}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<div class="form-group bmd-form-group">
										<button
											type="button"
											class="btn btn-sm btn-warning"
											style="margin-left: 77%"
											@click="saveFaculty"
										>
											Save
										</button>

										<div v-for="(faculty, index) in facultyList" :key="faculty.order">
											<div class="container">
												<div
													class="row alert alert-info ipcr-span"
													@click="faculty.fixed = !faculty.fixed"
													aria-hidden="true"
												>
													<div class="col-md-1">
														<span><i class="material-icons">sort</i></span>
													</div>
													<div class="col-md-10">
														<span>{{ faculty.name }}</span>
													</div>
													<div class="col-md-1">
														<div class="dropdown ipcr-editable">
															<button
																class="btn btn-secondary btn-sm ipcr-editable-button"
																type="button"
																id="dropdownMenuButton"
																data-toggle="dropdown"
																aria-haspopup="true"
																aria-expanded="false"
															>
																<i class="material-icons">more_vert</i>
															</button>
															<div
																class="dropdown-menu"
																aria-labelledby="dropdownMenuButton"
															>
																<a
																	class="dropdown-item"
																	style="color: black"
																	@click="updateFaculty(faculty)"
																	>Edit</a
																>
																<a
																	class="dropdown-item"
																	style="color: black"
																	@click="deleteFaculty(faculty, index)"
																	>Delete</a
																>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="container">
												<div class="row alert alert-info ipcr-span">
													<span class="ml-5">{{ faculty.academic_rank.name }}</span>
												</div>
											</div>
											<div class="container">
												<div class="row alert alert-info ipcr-span">
													<span class="ml-5">{{ faculty.department.name }}</span>
												</div>
											</div>
											<div class="container">
												<div class="row alert alert-info ipcr-span">
													<span class="ml-5">{{ faculty.ipcr_function.name }}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style >
.alert {
	padding: 9px 6px !important;
}

.ipcr-card {
	padding-left: 53px;
	padding-top: 31px;
	padding-bottom: 20px;
}

.ipcr-span {
	background-color: #f0ffff !important;
	color: black !important;
}

.ipcr-select {
	width: 77.3%;
	padding: 5px;
	margin-bottom: 17px;
	display: inline-block;
	border: 1px solid #000000;
	border-radius: 4px;
	box-sizing: border-box;
}

.ipcr-editable {
	background-color: transparent;
	color: black !important;
	margin-top: -7px;
	margin-left: -18px;
}
.ipcr-editable-button {
	background-color: transparent !important;
	color: black !important;
}
</style>
<script>
	export default {

		data () {
			return {
				name: null,
				isForFacultyUpdate: false,

				academic_rank: null,
				academicRankOptions: [],

				department: null,
				departmentOptions: [],

				ipcr_function: null,
				ipcrFunctionOptions: [],

				facultyList: [],
				facultyUpdateData: [],
			}
		},

		created () {
			this.fetchMetaFaculty();
			this.fetchFaculty();
		},

		methods: {
			focusField (name) {
				this.activeField = name
			},

			clearFocus () {
				this.activeField = ''
			},

			addUpdateFaculty () {
				if (this.isForFacultyUpdate) {
					this.facultyList.map(obj => {
						if (obj['id'] === this.facultyUpdateData.id) {
							obj.name = this.name;
							obj.academic_rank = this.academic_rank;
							obj.department = this.department;
							obj.ipcr_function = this.ipcr_function;
						}
						return obj;
					})
				} else {
					this.facultyList.push({
						name: this.name,
						academic_rank: this.academic_rank,
						department: this.department,
						ipcr_function: this.ipcr_function,
					});
				}

				this.name = null;
			},

			saveFaculty () {
				axios
					.post('faculty', this.facultyList)
					.then(response => {
						this.$toast.success("Faculty successfully saved!");
						this.isForFacultyUpdate = false;
						this.facultyList();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			updateFaculty (value) {
				const name = value.name
				this.name = name
				this.facultyUpdateData = value;
				this.academic_rank = { id: value.academic_rank.id, name: value.academic_rank.name };
				this.department = { id: value.department.id, name: value.department.name };
				this.ipcr_function = { id: value.ipcr_function.id, name: value.ipcr_function.name };

				this.isForFacultyUpdate = true;
			},

			deleteFaculty (value, index) {
				if (value.id) {
					axios
						.delete(`faculty/${value.id}`)
						.then(response => {
							this.$toast.success("Faculty successfully deleted!");
							this.fetchFaculty();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				}

				this.facultyList.splice(index, 1);
			},

			fetchFaculty () {
				axios.get('faculty')
					.then(response => {
						this.facultyList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			fetchMetaFaculty () {
				axios.get('faculty/create')
					.then(response => {
						let data = response.data.meta;
						this.academicRankOptions = data.academic_rank;
						this.departmentOptions = data.department;
						this.ipcrFunctionOptions = data.functions;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			}
		}
	}
</script>
