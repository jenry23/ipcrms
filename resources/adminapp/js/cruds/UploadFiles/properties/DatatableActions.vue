<template>
    <div>
        <button
            v-if="role_title === 'Dean'"
            class="btn btn-sm btn-primary"
            @click="updateRemarks(row[field].id, row[field].remarks)"
        >
            Update Remarks
        </button>
        <button
            class="btn btn-sm btn-primary"
            @click="downloadFiles(row[field].id, row[field].file_name)"
        >
            Download
        </button>
        <button
            v-if="role_title === 'Dean' && row[field].is_approved === 0"
            class="btn btn-sm btn-primary"
            @click="approvedFiles(row[field].id)"
        >
            Approved
        </button>
    </div>
</template>

<script>
export default {
    props: ["field", "row"],
    data() {
        return {
            role_title: document
                .querySelector("meta[name='role_title']")
                .getAttribute("content")
        };
    }
};
</script>
