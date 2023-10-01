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
							<h4 class="card-title">
								{{ $t('global.create') }}
								<strong>Upload Files</strong>
							</h4>
						</div>
						<div class="card-body">
							<back-button></back-button>
						</div>
						<div class="card-body">
							<bootstrap-alert />
							<div class="row">
								<div class="col-md-12">
									<label>Upload Files</label>
									<input type="file" class="form-control" @input="updateFiles" />
								</div>
								<div class="col-md-12 mt-4">
									<label>IPCR Functions</label>
									<v-select
										name="ipcr_function_id"
										label="name"
										:key="'ipcr-function-id-field'"
										item-value="id"
										v-model="form.ipcr_function_id"
										:options="functionList"
										@input="selectFunction"
									/>
								</div>
								<div class="col-md-12 mt-4">
									<label>IPCR Sub Functions</label>
									<v-select
										name="ipcr_sub_function_id"
										label="name"
										:key="'ipcr-function-id-field'"
										item-value="id"
										:options="subFunctionList"
										@input="selectSubFunctionList"
									/>
								</div>
								<div class="col-md-12 mt-4">
									<label>IPCR Performance Functions</label>
									<v-select
										name="ipcr_sub_function_id"
										label="name"
										:key="'ipcr-function-id-field'"
										item-value="id"
										v-model="form.ipcr_performance_function_id"
										:options="performanceFunctionList"
										required
									/>
								</div>
								<div class="col-md-12 mt-4">
									<label>Description</label>
									<textarea class="form-control" v-model="form.description" rows="3"></textarea>
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
					ipcr_function_id: null,
					ipcr_performance_function_id: null,
					files: null,
					description: null
				},
				loading: false,
				functionList: [],
				subFunctionList: [],
				performanceFunctionList: [],
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

  			selectFunction (value) {
				this.subFunctionList = value.ipcr_sub_function;
			},

  			selectSubFunctionList (value) {
				this.performanceFunctionList = value.ipcr_performance;
			},

			fetchCreateData () {
				axios.get('upload-file/ipcr-function')
					.then(response => {
						this.functionList = response.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			submitForm () {
				let form = new FormData();
				_.each(this.form, (value, key) => {
					if (['ipcr_function_id', 'ipcr_performance_function_id'].includes(key)) {
						form.append(key, value.id);
					} else {
						form.append(key, value);
					}
				})
				let config = {
					header: {
                        'Content-Type': 'multipart/form-data',
					}
				}
				axios
					.post(`upload-file`, form, config)
					.then(response => {
						this.$toast.success("IPCR Upload Files successfully saved!");
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
