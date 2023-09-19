<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-primary card-header-icon">
						<h4 class="card-title">
							<strong>Upload Your Document</strong>
						</h4>
					</div>
					<div class="card-body">
						<ul class="nav nav-pills nav-pills-primary" role="tablist">
							<li class="nav-item" v-for="functions in functionList" :key="functions.id">
								<a
									class="nav-link"
									data-toggle="tab"
									:href="`#link${functions.id}`"
									role="tablist"
									aria-expanded="true"
								>
									{{ functions.name }}
								</a>
							</li>
						</ul>
						<div class="tab-content tab-space">
							<div
								class="tab-pane"
								:id="`link${functions.id}`"
								aria-expanded="true"
								v-for="functions in functionList"
								:key="functions.id"
								:class="{active: functions.id === 1 ? true : false } "
							>
								<upload-file-datatables :uploaded-id="functions.id"></upload-file-datatables>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

  <script>
	import UploadFileDatatables from './UploadFileDatatables.vue'
	export default {

		components: {
			UploadFileDatatables
  	},

		data () {
			return {
				functionList: [],
			}
		},

		created () {
			this.fetchFunction()
		},

		methods: {
			fetchFunction () {
				axios.get('upload-file/ipcr-function')
					.then(response => {
						this.functionList = response.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},
		}
	}
  </script>
