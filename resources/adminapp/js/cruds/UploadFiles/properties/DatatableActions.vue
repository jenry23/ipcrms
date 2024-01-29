<template>
    <div>
        <button
            v-if="role_title === 'Dean'"
            class="btn btn-sm btn-primary"
            @click="updateRemarks(row.id, row.remarks)"
        >
            Update Remarks
        </button>
        <button
            class="btn btn-sm btn-primary"
            @click="downloadFiles(row.id, row.file_name)"
        >
            Download
        </button>
        <button
            v-if="role_title === 'Dean' && row.is_approved === 0"
            class="btn btn-sm btn-primary"
            @click="approvedFiles(row.id)"
        >
            Approved
        </button>
    </div>
</template>

<script>
export default {
    props: ["row"],
    data() {
        return {
            role_title: document
                .querySelector("meta[name='role_title']")
                .getAttribute("content")
        };
    }
};
</script>
