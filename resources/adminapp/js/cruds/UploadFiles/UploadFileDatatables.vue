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
										<th>Is Approved</th>
										<th>Date Of Submitted</th>
										<th v-if="role_title === 'Dean'">Remarks</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody >
									<tr v-for="(functions, index) in ipcrFunction" :key="index">
										<td>{{ functions.uploader.name }}</td>
										<td>{{ functions.file_name }}</td>
										<td>{{ functions.ipcr_function.name }}</td>
										<td>{{ functions.description }}</td>
										<td>{{ functions.is_approved ? 'Yes' : 'No' }}</td>
										<td>{{ functions.created_at }}</td>
										<td v-if="role_title === 'Dean'">
											<textarea v-model="functions.remarks"></textarea>
										</td>
										<td>
											<button v-if="role_title === 'Dean'" class="btn btn-sm btn-primary" @click="updateRemarks(functions.id, functions.remarks)">Update Remarks</button>
											<button class="btn btn-sm btn-primary" @click="downloadFiles(functions.id, functions.file_name)">Download</button>
											<button  v-if="role_title === 'Dean' && functions.is_approved === 0" class="btn btn-sm btn-primary" @click="approvedFiles(functions.id)">Approved</button>
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
				remarks: [],
				role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
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

			updateRemarks (id, value) {
				axios.get(`upload-file/remarks/${id}/${value}`).then((response) => {
					this.$toast.success("Upload Remarks successfully update!");
					this.fetchFunctionFiles();
				 })
			},

			approvedFiles (id) {
				axios.get(`upload-file/approved/${id}`).then((response) => {
					this.$toast.success("Upload Files successfully approved!");
					this.fetchFunctionFiles();
				 })
			}
		}
	}
</script>
