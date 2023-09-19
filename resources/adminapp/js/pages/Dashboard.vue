<template>
	<div class="container-fluid">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header card-header-success card-header-icon">
							<div class="card-icon">
								<i class="material-icons">language</i>
							</div>
							<h4 class="card-title">Announcement</h4>
							<router-link class="btn btn-primary btn-sm pull-right" to="announcement/create"
              v-if="role_title === 'Dean' || role_title === 'Campus Director'">
								Add New Post
							</router-link>
						</div>
						<div class="col-md-12" v-if="announcements" >
							<div class="card" v-for="announcement in announcements" :key="announcement.id">
								<div class="card-body">
									<b>
										<h5>Reminder: {{ announcement.title }}</h5>
										<h5>Date of Submission: {{ announcement.date_of_submission }}</h5>
										<h5>To: {{ $t('auth.name') }}</h5>
										<h5>From: {{ announcement.faculty.name }}</h5>
										<h5>Message: {{ announcement.message }}</h5>
									</b>
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
        announcements: [],
        role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
			}
		},

		mounted () {
			this.fetchAnnouncement()
		},

		methods: {
			fetchAnnouncement () {
				axios.get(`announcement`).then((response) => {
					this.announcements = response.data.data;
				});
			}
		}
	}
</script>
