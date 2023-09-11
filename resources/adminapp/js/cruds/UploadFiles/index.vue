<template>
	<div class="container-fluid">
		<div v-if="role_title === ''">
			<admin-files />
		</div>
		<div v-if="role_title === 'Faculty'">
			<faculty-files />
		</div>
	</div>
</template>
<script>
import AdminFiles from './admin';
import FacultyFiles from './faculty';

export default {
	components: {
		AdminFiles,
		FacultyFiles,
	},

	data () {
		return {
			role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
		}
	},
}

</script>
