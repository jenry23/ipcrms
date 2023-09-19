<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-md-12">
							<table class="table table-response table-border">
								<thead>
									<tr>
										<th>Uploader</th>
										<th>Filename</th>
										<th>Performance Indicator</th>
										<th>Description</th>
										<th>Date Of Submitted</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody >
									<tr v-for="functions in ipcrFunction" :key="functions.id">
										<td>{{ functions.uploader.name }}</td>
										<td>{{ functions.file_name }}</td>
										<td>{{ functions.ipcr_function.name }}</td>
										<td>{{ functions.description }}</td>
										<td>{{ functions.created_at }}</td>
										<td>
											<button class="btn btn-sm btn-primary" @click="downloadFiles(functions.id, functions.file_name)">Download</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			uploadedId: {
				type: Number,
			},
		},
		data () {
			return {
				ipcrFunction: [],
			}
		},

		created () {
			this.fetchFunctionFiles()
		},

		methods: {
			fetchFunctionFiles () {
				axios.get(`upload-file/${this.uploadedId}`).then((response) => {
					this.ipcrFunction = response.data;
				});
			},

			downloadFiles (id, file_name) {
				axios.get(`upload-file/download/${id}`, {
					headers: {
						Accept: 'application/octet-stream',
					},
					responseType: 'arraybuffer',
				})
				.then((response) => {
					const url = window.URL.createObjectURL(new Blob([response.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', file_name);
					document.body.appendChild(link);
					link.click();
				})
			},
		}
	}
</script>
