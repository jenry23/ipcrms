<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-primary card-header-icon">
						<div class="row">
							<div class="col-md-6">
								<h4 class="card-title">IPCR</h4>
							</div>
							<div class="col-md-2 mt-4">
								<h4 style="color: black">Upload Template:</h4>
							</div>
							<div class="col-md-2 mt-4">
								<input type="file" @change="handleFileChange" class="form-control" />
							</div>
							<div class="col-md-2 mt-4">
								<button class="btn btn-sm btn-primary" @click="uploadFiles">Submit</button>
							</div>
						</div>
					</div>

					<div class="card-body">
						<div class="card">
							<div class="card-header card-header-primary">
								<h4 class="card-title">IPCR Templates</h4>
								<p class="card-category">(Please set one template as active)</p>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table">
										<thead class="text-primary">
											<tr>
												<th>ID</th>
												<th>Semester / School Year</th>
												<th>Name</th>
												<th>Size</th>
												<th>Active</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="template in templateList" :key="template.id">
												<td>{{ template.id }}</td>
												<td>{{ template.year }}</td>
												<td>{{ template.name }}</td>
												<td>{{ template.size }}</td>
												<td>{{ template.active ? 'Yes' : 'No' }}</td>
												<td>
													<button
														class="btn btn-sm btn-success"
														v-if="!template.active"
														@click="setActiveTemplates(template.id)"
													>
														Set As Active
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<!-- Functions -->
					<div class="row">
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<h4>FUNCTIONS</h4>
									<div class="form-group bmd-form-group">
										<input
											type="text"
											size="50"
											v-model="functionName"
											@focus="focusField('title')"
											@blur="clearFocus"
											required
										/>
										<br /><br />
										<button
											type="button"
											class="btn btn-sm btn-warning"
											@click="addUpdateFunction"
										>
											{{ isForIpcrUpdate ? 'Update' : 'Add' }}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<div class="form-group bmd-form-group">
										<button type="button" class="btn btn-sm btn-danger">
											Drag the box to arrange their orders.
										</button>
										<button
											type="button"
											class="btn btn-sm btn-warning"
											style="margin-left: 118px"
											@click="saveFunction"
										>
											Save
										</button>

										<div class="col-md-12 mt-4" style="margin-left: -20px">
											<draggable
												v-model="functionList"
												v-bind="dragOptions"
												:move="onMove"
												@start="isDragging = true"
												@end="isDragging = false"
											>
												<transition-group type="transition" :name="'flip-list'">
													<div
														v-for="(element, index) in functionList"
														:key="element.order"
													>
														<div class="container">
															<div
																class="row alert alert-info ipcr-span"
																@click="element.fixed = !element.fixed"
																aria-hidden="true"
															>
																<div class="col-md-1">
																	<span><i class="material-icons">sort</i></span>
																</div>
																<div class="col-md-10">
																	<span>{{ element.name }}</span>
																</div>
																<div class="col-md-1">
																	<div class="dropdown ipcr-editable">
																		<button
																			class="btn btn-secondary btn-sm ipcr-editable-button"
																			type="button"
																			id="dropdownMenuButton"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			<i class="material-icons">more_vert</i>
																		</button>
																		<div
																			class="dropdown-menu"
																			aria-labelledby="dropdownMenuButton"
																		>
																			<a
																				class="dropdown-item"
																				style="color: black"
																				@click="updateFunction(element)"
																				>Edit</a
																			>
																			<a
																				class="dropdown-item"
																				style="color: black"
																				@click="
																					deleteFunction(element, index)
																				"
																				>Delete</a
																			>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</transition-group>
											</draggable>
										</div>
										<!-- Add Class Here -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Sub functions -->
					<div class="row">
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<h4>+ SUB-FUNCTIONS</h4>
									<small
										>(Example: Plan and prepare instructional materials to enhance
										instructions)</small
									>

									<div class="form-group bmd-form-group">
										<v-select
											class="form-control ipcr-select"
											name="sub_function"
											label="name"
											v-model="subfunctionSelect"
											:options="functionList"
											@focus="focusField('sub_function')"
											@blur="clearFocus"
										/>
										<br />
										<input
											type="text"
											size="50"
											v-model="subFunctionName"
											@focus="focusField('title')"
											@blur="clearFocus"
											required
										/>
										<br /><br />
										<button
											type="button"
											class="btn btn-sm btn-warning"
											@click="addSubUpdateFunction"
										>
											{{ isForSubIpcrUpdate ? 'Update' : 'Add' }}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<div class="form-group bmd-form-group">
										<button type="button" class="btn btn-sm btn-danger">
											Drag the box to arrange their orders.
										</button>
										<button
											type="button"
											class="btn btn-sm btn-warning"
											style="margin-left: 118px"
											@click="saveSubFunction"
										>
											Save
										</button>

										<div class="col-md-12 mt-4" style="margin-left: -20px">
											<div v-for="element in functionList" :key="element.order">
												<div class="container">
													<div class="row alert alert-info ipcr-span">
														<div class="col-sm">
															<span>{{ element.name }}</span>
														</div>
													</div>
												</div>
												<draggable
													v-model="subFunctionList"
													v-bind="dragOptions"
													:move="onMove"
													@start="isDragging = true"
													@end="isDragging = false"
												>
													<transition-group type="transition" :name="'flip-list'">
														<div v-for="(sub, index) in subFunctionList" :key="sub.order">
															<div
																class="container"
																v-if="element.id === sub.ipcr_function_id"
															>
																<div
																	class="row alert alert-info ipcr-span"
																	@click="sub.fixed = !sub.fixed"
																	aria-hidden="true"
																>
																	<div class="col-md-1">
																		<span
																			><i class="material-icons">sort</i></span
																		>
																	</div>
																	<div class="col-md-10">
																		<span>{{ sub.name }}</span>
																	</div>
																	<div class="col-md-1">
																		<div class="dropdown ipcr-editable">
																			<button
																				class="btn btn-secondary btn-sm ipcr-editable-button"
																				type="button"
																				id="dropdownMenuButton"
																				data-toggle="dropdown"
																				aria-haspopup="true"
																				aria-expanded="false"
																			>
																				<i class="material-icons"
																					>more_vert</i
																				>
																			</button>
																			<div
																				class="dropdown-menu"
																				aria-labelledby="dropdownMenuButton"
																			>
																				<a
																					class="dropdown-item"
																					style="color: black"
																					@click="updateSubFunction(sub)"
																					>Edit</a
																				>
																				<a
																					class="dropdown-item"
																					style="color: black"
																					@click="
																						deleteSubFunction(sub, index)
																					"
																					>Delete</a
																				>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</transition-group>
												</draggable>
											</div>
										</div>
										<!-- Add Class Here -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Performance Indicator -->
					<div class="row">
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<h4>+ PERFORMANCE INDICATOR</h4>
									<small>(Example: No. of syllabus prepared)</small>

									<div class="form-group bmd-form-group">
										<v-select
											class="form-control ipcr-select"
											name="performance_function"
											label="name"
											v-model="performanceFunctionSelect"
											:options="functionList"
											@input="selectedFunctionList"
											@focus="focusField('performance_function')"
											@blur="clearFocus"
										/>
										<br />
										<v-select
											class="form-control ipcr-select"
											name="performance_function"
											label="name"
											v-model="performanceSubfunctionSelect"
											:options="selectedSubFunctionList"
											@focus="focusField('performance_function')"
											@blur="clearFocus"
										/>
										<br />
										<input
											type="text"
											size="50"
											v-model="performanceFunctionName"
											@focus="focusField('title')"
											@blur="clearFocus"
											required
										/>
										<br /><br />
										<button
											type="button"
											class="btn btn-sm btn-warning"
											@click="addPeformanceUpdateFunction"
										>
											{{ isForPerformannceIpcrUpdate ? 'Update' : 'Add' }}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<div class="form-group bmd-form-group">
										<button type="button" class="btn btn-sm btn-danger">
											Drag the box to arrange their orders.
										</button>
										<button
											type="button"
											class="btn btn-sm btn-warning"
											style="margin-left: 118px"
											@click="savePerformaceFunction"
										>
											Save
										</button>

										<div class="col-md-12 mt-4" style="margin-left: -20px">
											<div v-for="element in functionList" :key="element.id">
												<div class="container">
													<div class="row alert alert-info ipcr-span">
														<div class="col-sm">
															<span>{{ element.name }}</span>
														</div>
													</div>
												</div>
												<div v-for="sub in element.ipcr_sub_function" :key="sub.id">
													<div class="container">
														<div class="row alert alert-info ipcr-span">
															<div class="col-sm">
																<span>{{ sub.name }}</span>
															</div>
														</div>
													</div>
													<draggable
														v-model="performanceFunctionList"
														v-bind="dragOptions"
														:move="onMove"
														@start="isDragging = true"
														@end="isDragging = false"
													>
														<transition-group type="transition" :name="'flip-list'">
															<div
																v-for="(
																	performance, index
																) in performanceFunctionList"
																:key="performance.order"
															>
																<div
																	class="container"
																	v-if="performance.ipcr_sub_function_id === sub.id"
																>
																	<div
																		class="row alert alert-info ipcr-span"
																		@click="
																			performance.fixed = !performance.fixed
																		"
																		aria-hidden="true"
																	>
																		<div class="col-md-1">
																			<span
																				><i class="material-icons"
																					>sort</i
																				></span
																			>
																		</div>
																		<div class="col-md-10">
																			<span>{{ performance.name }}</span>
																		</div>
																		<div class="col-md-1">
																			<div class="dropdown ipcr-editable">
																				<button
																					class="btn btn-secondary btn-sm ipcr-editable-button"
																					type="button"
																					id="dropdownMenuButton"
																					data-toggle="dropdown"
																					aria-haspopup="true"
																					aria-expanded="false"
																				>
																					<i class="material-icons"
																						>more_vert</i
																					>
																				</button>
																				<div
																					class="dropdown-menu"
																					aria-labelledby="dropdownMenuButton"
																				>
																					<a
																						class="dropdown-item"
																						style="color: black"
																						@click="
																							updatePerformanceFunction(
																								performance
																							)
																						"
																						>Edit</a
																					>
																					<a
																						class="dropdown-item"
																						style="color: black"
																						@click="
																							deletePerformanceFunction(
																								performance,
																								index
																							)
																						"
																						>Delete</a
																					>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</transition-group>
													</draggable>
												</div>
											</div>
										</div>
										<!-- Add Class Here -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Signatories -->
					<div class="row">
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<h4>SIGNATORIES</h4>
									<div class="form-group bmd-form-group">
										<input
											type="text"
											size="50"
											v-model="level_of_assestment"
											class="mb-4"
											placeholder="Level of Assessment"
											@focus="focusField('level_of_assestment')"
											@blur="clearFocus"
											required
										/>
										<input
											type="text"
											size="50"
											v-model="name_of_signatories"
											@focus="focusField('name_of_signatories')"
											@blur="clearFocus"
											placeholder="Name of Signatory "
											class="mb-4"
											required
										/>
										<br />
										<input
											type="text"
											size="50"
											v-model="position"
											@focus="focusField('position')"
											@blur="clearFocus"
											placeholder="Position"
											class="mb-4"
											required
										/>
										<br /><br />
										<button
											type="button"
											class="btn btn-sm btn-warning"
											@click="addUpdateSignatories"
										>
											{{ isForSingatoriesUpdate ? 'Update' : 'Add' }}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="container-fluid">
								<div class="card ipcr-card">
									<div class="form-group bmd-form-group">
										<button type="button" class="btn btn-sm btn-danger">
											Drag the box to arrange their orders.
										</button>
										<button
											type="button"
											class="btn btn-sm btn-warning"
											style="margin-left: 118px"
											@click="saveSignatories"
										>
											Save
										</button>

										<div class="col-md-12 mt-4" style="margin-left: -20px">
											<draggable
												v-model="signatoryList"
												v-bind="dragOptions"
												:move="onMove"
												@start="isDragging = true"
												@end="isDragging = false"
											>
												<transition-group type="transition" :name="'flip-list'">
													<div
														v-for="(element, index) in signatoryList"
														:key="element.order"
													>
														<div class="container">
															<div
																class="row alert alert-info ipcr-span"
																@click="element.fixed = !element.fixed"
																aria-hidden="true"
															>
																<div class="col-md-1">
																	<span><i class="material-icons">sort</i></span>
																</div>
																<div class="col-md-10">
																	<span>{{ element.name_of_signatories }}</span>
																</div>
																<div class="col-md-1">
																	<div class="dropdown ipcr-editable">
																		<button
																			class="btn btn-secondary btn-sm ipcr-editable-button"
																			type="button"
																			id="dropdownMenuButton"
																			data-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			<i class="material-icons">more_vert</i>
																		</button>
																		<div
																			class="dropdown-menu"
																			aria-labelledby="dropdownMenuButton"
																		>
																			<a
																				class="dropdown-item"
																				style="color: black"
																				@click="updateSignatory(element)"
																				>Edit</a
																			>
																			<a
																				class="dropdown-item"
																				style="color: black"
																				@click="
																					deleteSignatory(element, index)
																				"
																				>Delete</a
																			>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="container">
															<div class="row alert alert-info ipcr-span">
																<span class="ml-5">{{
																	element.level_of_assestment
																}}</span>
															</div>
														</div>
														<div class="container">
															<div class="row alert alert-info ipcr-span">
																<span class="ml-5">{{ element.position }}</span>
															</div>
														</div>
													</div>
												</transition-group>
											</draggable>
										</div>
										<!-- Add Class Here -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style >
.alert {
	padding: 9px 6px !important;
}

.ipcr-card {
	padding-left: 53px;
	padding-top: 31px;
	padding-bottom: 20px;
}

.ipcr-span {
	background-color: #f0ffff !important;
	color: black !important;
}

.ipcr-select {
	width: 77.3%;
	padding: 5px;
	margin-bottom: 17px;
	display: inline-block;
	border: 1px solid #000000;
	border-radius: 4px;
	box-sizing: border-box;
}

.ipcr-editable {
	background-color: transparent;
	color: black !important;
	margin-top: -7px;
	margin-left: -18px;
}
.ipcr-editable-button {
	background-color: transparent !important;
	color: black !important;
}
</style>
<script>
	import draggable from "vuedraggable";
	import XLSX, { read } from 'xlsx';

	export default {
		components: {
			draggable,
			XLSX,
		},

		data () {
			return {
				status: '',
				activeField: '',
				editable: true,
				delayedDragging: false,
				isDragging: false,
				// For Function variable
				functionName: null,
				functionList: [],
				isForIpcrUpdate: false,

				// For Sub function variable
				subFunctionName: null,
				subFunctionList: [],
				subfunctionSelect: null,
				isForSubIpcrUpdate: false,
				updateSubFunctionData: [],

				// For Performance Function variable
				updatePerformanceFunctionData: [],
				performanceFunctionSelect: null,
				performanceSubfunctionSelect: null,
				selectedSubFunctionList: [],
				performanceFunctionList: [],
				performanceFunctionName: null,
				isForPerformannceIpcrUpdate: false,

				// For Signatories Function variable
				signatoryList: [],
				updateSignatoryData: [],
				isForSingatoriesUpdate: false,
				level_of_assestment: null,
				name_of_signatories: null,
				position: null,

				templates: null,
				templateList: [],
			}
		},

		computed: {
			dragOptions () {
				return {
					animation: 0,
					group: "description",
					disabled: !this.editable,
					ghostClass: "ghost"
				};
			},
		},

		watch: {
			isDragging (newValue) {
				if (newValue) {
					this.delayedDragging = true;
					return;
				}
				this.$nextTick(() => {
					this.delayedDragging = false;
				});
			}
		},

		mounted () {
			this.fetchFunctionList();
			this.fetchSubFunctionList();
			this.fetchPerformanceFunctionList();
			this.fetchSignatoryList();
			this.fetchIPCRTemplates();
		},

		methods: {
			focusField (name) {
				this.activeField = name
			},

			clearFocus () {
				this.activeField = ''
			},

			orderList () {
				this.functionList = this.functionList.sort((one, two) => {
					return one.order - two.order;
				});
			},

			onMove ({ relatedContext, draggedContext }) {
				const relatedElement = relatedContext.element;
				const draggedElement = draggedContext.element;
				return (
					(!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
				);
			},

			updateFunction (value) {
				const name = value.name
				this.functionName = name
				this.updateFunctionTitle = name;
				this.isForIpcrUpdate = true;
			},

			deleteFunction (value, index) {
				if (value.id) {
					axios
						.delete(`ipcr/${value.id}`)
						.then(response => {
							this.$toast.success("IPCR Function successfully deleted!");
							this.fetchFunctionList();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				}
				this.functionList.splice(index, 1);
			},

			updateSubFunction (value) {
				const name = value.name
				this.subFunctionName = name
				this.updateSubFunctionData = value;
				this.subfunctionSelect = { id: value.ipcr_function.id, name: value.ipcr_function.name }
				this.isForSubIpcrUpdate = true;
			},

			deleteSubFunction (value, index) {
				if (value.id) {
					axios
						.delete(`ipcr-sub/${value.id}`)
						.then(response => {
							this.$toast.success("IPCR Sub Function successfully deleted!");
							this.fetchFunctionList();
							this.fetchSubFunctionList();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				}
				this.subFunctionList.splice(index, 1);
			},

			updatePerformanceFunction (value) {
				const name = value.name
				this.performanceFunctionName = name
				this.updatePerformanceFunctionData = value;
				this.performanceFunctionSelect = {
					id: value.ipcr_sub_function.ipcr_function.id,
					name: value.ipcr_sub_function.ipcr_function.name
				}

				this.performanceSubfunctionSelect = {
					id: value.ipcr_sub_function.id,
					name: value.ipcr_sub_function.name
				}

				this.isForPerformannceIpcrUpdate = true;
			},

			deletePerformanceFunction (value, index) {
				if (value.id) {
					axios
						.delete(`ipcr-performance/${value.id}`)
						.then(response => {
							this.$toast.success("IPCR Performance successfully deleted!");
							this.fetchPerformanceFunctionList();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				}
				this.subFunctionList.splice(index, 1);
			},

			addUpdateFunction () {
				const listOrderCount = this.functionList.length

				if (this.isForIpcrUpdate) {
					this.functionList.map(obj => {
						if (obj['name'] === this.updateFunctionTitle) {
							obj.name = this.functionName;
						}
						return obj;
					})
				} else {
					console.log(this.functionName);
					this.functionList.push({
						name: this.functionName,
						order: listOrderCount + 1,
						fixed: false
					});
				}

				this.functionName = null;
			},

			addSubUpdateFunction () {
				const listOrderCount = this.subFunctionList.length

				if (this.isForSubIpcrUpdate) {
					this.subFunctionList.map(obj => {
						if (obj['id'] === this.updateSubFunctionData.id) {
							obj.name = this.subFunctionName;
							obj.ipcr_function_id = this.subfunctionSelect.id
						}
						return obj;
					})
				} else {
					this.subFunctionList.push({
						name: this.subFunctionName,
						order: listOrderCount + 1,
						fixed: false,
						ipcr_function_id: this.subfunctionSelect.id
					});
				}

				this.subfunctionSelect = null;
				this.subFunctionName = null;
			},

			addPeformanceUpdateFunction () {
				const listOrderCount = this.performanceFunctionList.length

				if (this.isForPerformannceIpcrUpdate) {
					this.performanceFunctionList.map(obj => {
						if (obj['id'] === this.updatePerformanceFunctionData.id) {
							obj.name = this.performanceFunctionName;
							obj.ipcr_sub_function_id = this.updatePerformanceFunctionData.ipcr_sub_function_id
						}
						return obj;
					})
				} else {
					this.performanceFunctionList.push({
						name: this.performanceFunctionName,
						order: listOrderCount + 1,
						fixed: false,
						ipcr_sub_function_id: this.performanceSubfunctionSelect.id
					});
				}

				this.performanceFunctionSelect = null;
				this.performanceSubfunctionSelect = null;
				this.performanceFunctionName = null;
			},

			saveFunction () {
				axios
					.post('ipcr', this.functionList)
					.then(response => {
						this.$toast.success("IPCR Functions successfully saved!");
						this.isForIpcrUpdate = false;
						this.fetchFunctionList();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			saveSubFunction () {
				axios
					.post('ipcr-sub', this.subFunctionList)
					.then(response => {
						this.$toast.success("IPCR Sub Functions successfully saved!");
						this.isForSubIpcrUpdate = false;
						this.fetchSubFunctionList();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			savePerformaceFunction () {
				axios
					.post('ipcr-performance', this.performanceFunctionList)
					.then(response => {
						this.$toast.success("IPCR Sub Performance successfully saved!");
						this.isForPerformannceIpcrUpdate = false;
						this.fetchPerformanceFunctionList();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			fetchFunctionList () {
				axios.get('ipcr')
					.then(response => {
						this.functionList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			fetchSubFunctionList () {
				axios.get('ipcr-sub')
					.then(response => {
						this.subFunctionList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			fetchPerformanceFunctionList () {
				axios.get('ipcr-performance')
					.then(response => {
						this.performanceFunctionList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			selectedFunctionList (value) {
				this.selectedSubFunctionList = value.ipcr_sub_function;
			},

			// Signatories
			addUpdateSignatories () {
				const listOrderCount = this.signatoryList.length

				if (this.isForSingatoriesUpdate) {
					this.signatoryList.map(obj => {
						if (obj['id'] === this.updateSignatoryData.id) {
							obj.level_of_assestment = this.level_of_assestment;
							obj.name_of_signatories = this.name_of_signatories;
							obj.position = this.position;
						}
						return obj;
					})
				} else {
					this.signatoryList.push({
						name: this.function,
						level_of_assestment: this.level_of_assestment,
						name_of_signatories: this.name_of_signatories,
						position: this.position,
						order: listOrderCount + 1,
						fixed: false
					});
				}

				this.functionName = null;
			},

			saveSignatories () {
				axios
					.post('ipcr-signatory', this.signatoryList)
					.then(response => {
						this.$toast.success("IPCR Signatory successfully saved!");
						this.isForPerformannceIpcrUpdate = false;
						this.fetchPerformanceFunctionList();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			fetchSignatoryList () {
				axios.get('ipcr-signatory')
					.then(response => {
						this.signatoryList = response.data.data;
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			updateSignatory (value) {
				const name = value.name
				this.name_of_signatories = value.name_of_signatories;
				this.level_of_assestment = value.level_of_assestment;
				this.position = value.position;
				this.updateSignatoryData = value;
				this.isForSingatoriesUpdate = true;
			},

			deleteSignatory (value, index) {
				if (value.id) {
					axios
						.delete(`ipcr-signatory/${value.id}`)
						.then(response => {
							this.$toast.success("IPCR Signatory successfully deleted!");
							this.fetchSignatoryList();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				}
				this.signatoryList.splice(index, 1);
			},

			handleFileChange (evt) {
				const files = evt.target.files[0];
				this.templates = files;
			},

			uploadFiles () {
				if (this.templates) {
					let form = new FormData();
					form.append('templates', this.templates);

					let config = {
						header: {
							'Content-Type': 'multipart/form-data'
						}
					}
					axios
						.post(`ipcr-templates`, form, config)
						.then(response => {
							this.$toast.success("IPCR templates successfully saved!");
							this.fetchIPCRTemplates();
						}).catch(error => {
							let message = error.response.data.message || error.message
							this.$toast.error(message);
						})
				} else {
					this.$toast.error("Please insert files!!");
				}
			},

			fetchIPCRTemplates () {
				axios.get('ipcr-templates')
					.then(response => {
						this.templateList = response.data.data
					}).catch(error => {
						console.log(error);
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			},

			setActiveTemplates (id) {
				axios
					.post(`ipcr-templates/set-active`, { id: id })
					.then(response => {
						this.$toast.success("IPCR templates is now active!");
						this.fetchIPCRTemplates();
					}).catch(error => {
						let message = error.response.data.message || error.message
						this.$toast.error(message);
					})
			}
		}
	}
</script>
