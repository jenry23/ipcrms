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
									Settings
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
									Options
								</a>
							</li>
						</ul>
						<div class="tab-content tab-space">
							<div class="tab-pane active" id="link1" aria-expanded="true">
								Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
								procrastinate B2C users after installed base benefits.
								<br /><br />
								Dramatically visualize customer directed convergence without revolutionary ROI.
							</div>
							<div class="tab-pane" id="link2" aria-expanded="false">
								Efficiently unleash cross-media information without cross-media value. Quickly
								maximize timely deliverables for real-time schemas.
								<br /><br />Dramatically maintain clicks-and-mortar solutions without functional
								solutions.
							</div>
							<div class="tab-pane" id="link3" aria-expanded="false">
								Completely synergize resource taxing relationships via premier niche markets.
								Professionally cultivate one-to-one customer service with robust ideas.
								<br /><br />Dynamically innovate resource-leveling customer service for state of the
								art customer service.
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
