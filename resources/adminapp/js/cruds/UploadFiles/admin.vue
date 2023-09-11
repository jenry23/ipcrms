<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-primary card-header-icon">
						<h4 class="card-title">
							<strong>Departments</strong>
						</h4>
					</div>
					<div class="card-body"></div>
					<div class="card-body">
						<div class="row">
              <div class="col-md-2" v-for="department in departmentList" :key="department.id">
                  <img class="img-fluid mt-4"  v-if="department.url" :src="department.url" style="margin-top: 5px;"/>
                  <div class="d-flex justify-content-center">
                   <h4><b> {{ department.name }} </b></h4>
                  </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

  <script>

	export default {
		data () {
			return {
				departmentList: [],
			}
		},

		created () {
			this.fetchDepartment()
		},

		methods: {
			fetchDepartment () {
				axios.get('department')
					.then(response => {
						this.departmentList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},
		}
	}
  </script>
