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
				<span class="notification">0</span>
				<p class="d-lg-none d-md-block">Some Actions</p>
				<div class="ripple-container"></div
			></a>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
			</div>
		</li>
    </div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import moment from 'moment';

	export default {
		data () {
			return {
				timestamp: ''
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

		methods: {
			...mapActions('I18NStore', ['setLocale']),
			runningTime () {
				const date = new Date()
				this.timestamp = moment(String(date)).format('MMMM DD, Y hh:mm:ss')
			}
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
