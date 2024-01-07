<template>
	<div class="container-fluid">
		<div v-if="role_title === ''">
			<admin-files />
		</div>
		<div v-if="role_title === 'Faculty'">
			<faculty-files />
		</div>
		<div v-if="role_title === 'Dean'">
			<dean-files />
		</div>
		<div v-if="role_title === 'HRMO'">
			<hrmo-files />
		</div>
		<div v-if="role_title === 'Campus Director'">
			<campus-files />
		</div>
	</div>
</template>
<script>
import AdminFiles from './admin';
import FacultyFiles from './faculty';
import DeanFiles from './dean';
import HrmoFiles from './hrmo';
import CampusFiles from './campus';

export default {
	components: {
		AdminFiles,
		FacultyFiles,
		DeanFiles,
		HrmoFiles,
		CampusFiles
	},

	data () {
		return {
			role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
		}
	},
}

</script>
