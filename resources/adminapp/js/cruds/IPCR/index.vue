<template>
	<div class="container-fluid">
		<div v-if="role_title === ''">
			<admin-template />
		</div>
		<div v-if="role_title === 'Faculty'">
			<faculty-template />
		</div>
		<div v-if="role_title === 'Campus Director'">
			<campus-template />
		</div>
		<div v-if="role_title === 'Dean'">
			<dean-template />
		</div>
		<div v-if="role_title === 'HRMO'">
			<hrmo-template />
		</div>
	</div>
</template>
<script>
import AdminTemplate from './admin';
import FacultyTemplate from './faculty';
import CampusTemplate from './campus';
import DeanTemplate from './dean';
import HrmoTemplate from './hrmo';

export default {
	components: {
		AdminTemplate,
		FacultyTemplate,
		CampusTemplate,
		DeanTemplate,
		HrmoTemplate
	},

	data () {
		return {
			role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
		}
	},
}

</script>
