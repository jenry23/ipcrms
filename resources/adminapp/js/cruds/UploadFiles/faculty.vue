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
							<li class="nav-item">
								<a
									class="nav-link active"
									data-toggle="tab"
									href="#link1"
									role="tablist"
									aria-expanded="true"
								>
                                INSTRUCTION
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									data-toggle="tab"
									href="#link2"
									role="tablist"
									aria-expanded="false"
								>
								RESEARCH
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									data-toggle="tab"
									href="#link3"
									role="tablist"
									aria-expanded="false"
								>
								EXTENSION
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									data-toggle="tab"
									href="#link4"
									role="tablist"
									aria-expanded="false"
								>
								SUPPORT FUNCTION
								</a>
							</li>

							<li class="nav-item">
								<a
									class="nav-link"
									data-toggle="tab"
									href="#link5"
									role="tablist"
									aria-expanded="false"
								>
								ADMINISTRATIVE FUNCTION
								</a>
							</li>
						</ul>
						<div class="tab-content tab-space">
							<div class="tab-pane active" id="link1" aria-expanded="true">

							</div>
							<div class="tab-pane" id="link2" aria-expanded="false">

							</div>
							<div class="tab-pane" id="link3" aria-expanded="false">

							</div>

							<div class="tab-pane" id="link4" aria-expanded="false">

							</div>

							<div class="tab-pane" id="link5" aria-expanded="false">

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
