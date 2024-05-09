<template>
    <div>
        <button
            v-if="role_title === 'Dean'"
            class="btn btn-sm btn-primary mt-2"
            @click="updateRemarks(row.id, row.remarks)"
        >
            Update Remarks
        </button>
        <button
            class="btn btn-sm btn-primary mt-2"
            @click="downloadFiles(row.id, row.file_name)"
        >
            Download
        </button>
        <button
            v-if="role_title === 'Dean' && row.is_approved === 0"
            class="btn btn-sm btn-primary mt-2"
            @click="approvedFiles(row.id)"
        >
            Approved
        </button>
    </div>
</template>

<script>
export default {
    props: ["row", "query", "xprops"],
    data() {
        return {
            role_title: document
                .querySelector("meta[name='role_title']")
                .getAttribute("content")
        };
    },

    methods: {
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
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000); // 5000 milliseconds = 5 seconds
				 })
			},

			approvedFiles (id) {
				axios.get(`upload-file/approved/${id}`).then((response) => {
					this.$toast.success("Upload Files successfully approved!");
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000); // 5000 milliseconds = 5 seconds
				 })
            },
    }
};
</script>
