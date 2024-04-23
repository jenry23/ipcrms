<template>
	<div class="row">
		<div class="col-md-8">
			{{ timestamp }}
		</div>

		<div class="col-md-3">
			<li class="nav-item dropdown">
				<a
					class="nav-link"
					href="http://example.com"
					id="navbarDropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<i class="material-icons">notifications</i>
					<span class="notification">{{ total }}</span>
					<p class="d-lg-none d-md-block">Some Actions</p>
					<div class="ripple-container"></div
				></a>
				<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
					<div v-for="(notification, key) in data" :key="key">
						<a
							class="dropdown-item"
							:class="{ 'card-color': notification.read_at != null }"
							@click="readNotification(notification)"
							style="background-color: #e5e3e3"
							>{{ key + 1 }}. {{ notification.message }}: {{ notification.file_name }}
						</a>
					</div>
				</div>
			</li>
		</div>
	</div>
</template>
<style scoped>
.card-color {
    background-color: white !important;
}
.scrollable-div {
    height: 500px; /* Set a fixed height */
    overflow-y: auto; /* Add vertical scrollbar */
    /* You can also add additional styling as needed */
}
</style>
<script>
	import { mapGetters, mapActions } from 'vuex'
	import moment from 'moment';

	export default {
		data () {
			return {
				timestamp: '',
				total: 0,
				data: [],
				userId: localStorage.getItem('userId'),
			}
		},

		computed: {
			...mapGetters('I18NStore', ['locale', 'languages']),
		},

		mounted: function () {
			setInterval(function () {
				this.runningTime()
			}.bind(this), 1000)
		},

		created () {
			this.fetchNotification();
			window.Echo.private(`faculity-upload.${this.userId}`).listen('.faculity-upload', (e) => {
				this.$toast.success(e['message'], {
					position: 'top-right',
				});
				this.fetchNotification();
			});
		},

		methods: {
			...mapActions('I18NStore', ['setLocale']),
			runningTime () {
				const date = new Date()
				this.timestamp = moment(String(date)).format('MMMM DD, Y hh:mm:ss')
			},

			fetchNotification () {
				axios.get('notifications')
					.then((response) => {
						this.total = response.data.total;
						this.data = response.data.data;
						this.userId = response.data.user_id;
					})
					.catch((error) => {
						console.error('Error fetching notifications:', error);
					});
			},

			readNotification (notification) {
				window.open(notification.url, 'Download');

				axios.put(`notifications/${notification.id}`)
					.then((response) => {
						this.fetchNotification();
						this.$router.push({
							name: 'upload-files'
						})
					})
					.catch((error) => {
						console.error('Error fetching notifications:', error);
					});
			},
		}
	}
</script>

<style scoped>
.fixed-width {
	width: 1.3em;
	text-align: center;
	display: inline-block;
}
</style>
