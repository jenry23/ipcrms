<template>
	<div class="container-fluid">
		<div v-if="role_title === ''">
			<admin-template />
		</div>
		<div v-if="role_title === 'Faculty'">
			<faculty-template />
		</div>
	</div>
</template>
<script>
import AdminTemplate from './admin';
import FacultyTemplate from './faculty';

export default {
	components: {
		AdminTemplate,
		FacultyTemplate,
	},

	data () {
		return {
			role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
		}
	},
}

</script>
