<template>
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-md-12" v-if="ipcrFunction">
							<datatable
								:columns="columns"
								:data="ipcrFunction"
								:total="total"
								:query="query"
								:xprops="xprops"
								:HeaderSettings="false"
								:pageSizeOptions="[10, 25, 50, 100]"
							>
								<global-search :query="query" class="pull-left" />
								<header-settings :columns="columns" class="pull-right" />
							</datatable>
							<!-- <table class="table table-response table-border">
								<thead>
									<tr>
										<th>Uploader</th>
										<th>Filename</th>
										<th>Performance Indicator</th>
										<th>Description</th>
										<th>Is Approved</th>
										<th>Date Of Submitted</th>
										<th>Remarks</th>
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
										<td v-else >
											{{ functions.remarks }}
										</td>
										<td>
											<button v-if="role_title === 'Dean'" class="btn btn-sm btn-primary" @click="updateRemarks(functions.id, functions.remarks)">Update Remarks</button>
											<button class="btn btn-sm btn-primary" @click="downloadFiles(functions.id, functions.file_name)">Download</button>
											<button  v-if="role_title === 'Dean' && functions.is_approved === 0" class="btn btn-sm btn-primary" @click="approvedFiles(functions.id)">Approved</button>
										</td>
									</tr>
								</tbody>
							</table> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatableList from './properties/DatatableList'
import DatatableRemarks from './properties/DatatableRemarks'
import DatatableActions from './properties/DatatableActions'
import DatatableYesOrNo from '@/components/Datatables/DatatableYesOrNo'

	export default {
		components: {
			GlobalSearch,
			HeaderSettings
		},

		props: {
			uploadedId: {
				type: Number,
			},
		},

		data () {
			return {
				columns: [
					{
						title: 'Uploader',
						field: 'uploader.name',
						thComp: TranslatedHeader,
						colStyle: 'width: 100px;',
						tdComp: DatatableList
					},
					{
						title: 'File Name',
						field: 'file_name',
						thComp: TranslatedHeader,
					},
					{
						title: 'Performance Indicator',
						field: 'ipcr_performance_function.name',
						thComp: TranslatedHeader,
						tdComp: DatatableList,
					},
					{
						title: 'Description',
						field: 'description',
						thComp: TranslatedHeader,
					},
					{
						title: 'Is Approved',
						field: 'is_approved',
						thComp: TranslatedHeader,
						tdComp: DatatableYesOrNo,
					},
					{
						title: 'Date Of Submitted',
						field: 'created_at',
						thComp: TranslatedHeader,
					},
					{
						title: 'Remarks',
						field: 'remarks',
						thComp: TranslatedHeader,
						tdComp: DatatableRemarks,
					},
					{
						title: 'Actions',
						thComp: TranslatedHeader,
						tdComp: DatatableActions,
						visible: true,
						thClass: 'text-right',
						tdClass: 'text-right td-actions',
						colStyle: 'width: 150px;'
					},
				],
				query: { sort: 'id', order: 'desc', limit: 100, s: '' },
				total: 0,
				xprops: {
					module: 'PermissionsIndex',
					uploadedId: this.uploadedId,
					route: 'permissions',
					permission_prefix: 'permission_'
				},
				ipcrFunction: [],
				remarks: [],
				role_title: document.querySelector("meta[name='role_title']").getAttribute('content')
			}
		},

		created () {
			this.fetchFunctionFiles(this.query)
		},

		watch: {
			query: {
				handler(query) {
					this.fetchFunctionFiles(query)
				},
				deep: true
			}
		},

		methods: {
			fetchFunctionFiles (query) {
				axios.post(`upload-file/show-data/${this.uploadedId}`, query).then((response) => {
					let data = response.data;
					this.ipcrFunction = data.data;
					this.total = data.total;
				});
			},
		}
	}
</script>
