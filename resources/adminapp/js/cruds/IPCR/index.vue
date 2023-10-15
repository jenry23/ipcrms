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
		<div v-if="role_title === 'VICE PRESIDENT FOR ACADEMIC AFFAIRS'">
			<vp-template />
		</div>
	</div>
</template>
<script>
import AdminTemplate from './admin';
import FacultyTemplate from './faculty';
import CampusTemplate from './campus';
import DeanTemplate from './dean';
import HrmoTemplate from './hrmo';
import VpTemplate from './vp';

export default {
	components: {
		AdminTemplate,
		FacultyTemplate,
		CampusTemplate,
		DeanTemplate,
		HrmoTemplate,
		VpTemplate
	},

	data () {
		return {
			role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
		}
	},
}

</script>
