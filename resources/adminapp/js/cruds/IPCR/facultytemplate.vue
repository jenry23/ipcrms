<template>
	<div class="card" style="background-color: hsl(40, 100%, 97%); width: 90rem; margin-left: 43px"
		v-if="templates.ipcr_function">
		<div class="card-body">
			<div class="float-right">
				<p class="remove-space">SPMS Form 02</p>
				<p class="remove-space">Date: {{ dateToday }}</p>
				<p class="remove-space">Revised: 03</p>
			</div>
			<br />
			<br />
			<br />
			<div class="d-flex justify-content-center">
				<h4 style="font-weight: 900">INDIVIDUAL PERFORMANCE COMMITMENT AND REVIEW</h4>
			</div>
			<div>
				<p style="word-wrap: break-word">
					I,<input type="text" size="15" :value="$t('auth.name')" disabled />
					<input type="text" size="20" :value="$t('auth.role_name')" disabled />
					of the Laguna State Polytechnic University, commit to deliver and agree to the rated of
					the following in accordance with the indicated measures for the
					<input type="text" size="5" v-model="templates.semester" disabled /> Semester of Academic
					Year <input type="text" size="5" v-model="templates.year" disabled />.
				</p>
			</div>
			<table class="table table-border">
				<tr>
					<th v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
						{{ signatory.level_of_assestment }} :
						{{ signatory.name_of_signatories }}
					</th>
				</tr>
				<tr>
					<th v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
						{{ signatory.position }}
					</th>
				</tr>
			</table>
			<table class="table table-border two-table">
				<tr>
					<th rowspan="2" colspan="1">PERFORMANCE INDICATOR</th>
					<th rowspan="2" colspan="1">TARGET</th>
					<th rowspan="2" colspan="1">ACCOMPLISHED</th>
					<th rowspan="2" colspan="1">DATE OF SUBMISSION/COMPLETION</th>
					<th rowspan="2" colspan="1">DATE SUBMITTED/ COMPLETED</th>
					<th rowspan="1" colspan="4">Rating</th>
					<th rowspan="2" colspan="1">Remarks</th>
				</tr>
				<tr>
					<th scope="col">QTY</th>
					<th scope="col">QL/E</th>
					<th scope="col">T</th>
					<th scope="col">A</th>
				</tr>
				<tbody>
					<template v-for="ipcrFunction in templates.ipcr_function">
						<tr>
							<td colspan="10">{{ ipcrFunction.name }}</td>
						</tr>
						<template v-for="ipcrSubfunction in ipcrFunction.ipcr_subfunctions">
							<tr>
								<td colspan="10">{{ ipcrSubfunction.name }}</td>
							</tr>
							<template v-for="performance in ipcrSubfunction.ipcr_performance">
								<tr>
									<td>{{ performance.name }}</td>
									<td style="display: none">
										<input type="text" v-model="performance.id" />
									</td>
									<td><input type="number" v-model="performance.target" /></td>
									<td>
										<input type="number" v-model="performance.accomplished" disabled />
									</td>
									<td>
										<input type="date" v-model="performance.date_of_submission" disabled />
									</td>
									<td>
										<input type="date" v-model="performance.date_completed" disabled />
									</td>
									<td>
										<input type="number" v-model="performance.quantity" style="width: 50px"
											disabled />
									</td>
									<td>
										<input type="number" v-model="performance.quality" style="width: 50px" disabled />
									</td>
									<td>
										<input type="number" v-model="performance.tar" style="width: 50px" disabled />
									</td>
									<td>
										<input type="number" v-model="performance.asc" style="width: 50px" disabled />
									</td>
									<td><input type="text" v-model="performance.remarks" disabled /></td>
								</tr>
							</template>
						</template>
					</template>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="5">
							Comments and Recommendations for Development Purposes:
							<input type="text" v-model="templates.recommendation" size="70" disabled />
						</td>
						<td>Numerical Rating: {{ numericalRating }}</td>
						<td colspan="4">Adjectival Rating: {{ adjectivalRating }}</td>
					</tr>
					<tr>
						<td v-for="(signatory, index) in signatures" :colspan="signatory.title === 'Final Rating:' ? '4' : '2'" :key="index">
							{{ signatory.title }}
							<span v-if="signatory.name">
								{{ signatory.name }}
								<img :src="signatory.signature" alt="My Image"
									style=" width: 128px; height: 50px;">
							</span>
						</td>
					</tr>
					<tr>
						<th colspan="2">RATEE</th>
						<th colspan="2">CAMPUS DIRECTOR</th>
						<th colspan="2">HRMO</th>
						<th colspan="4">VICE PRESIDENT FOR ACADEMIC AFFAIRS</th>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<style>
.remove-space {
	margin: 0;
	padding: 0;
}

table,
th,
td {
	border: 1px solid !important;
	font-weight: 500;
}

.two-table th {
	border: 1px solid black;
	text-align: center;
}

.two-table th {
	vertical-align: middle !important;
}

.two-table tbody {
	border: 1px solid !important;
}
</style>
<script>
export default {
	props: {
		templates: {},
		signatures: {},
	},

	computed: {
		numericalRating () {
			let result = 0;
			_.each(this.templates.ipcr_function, (value, key) => {
				let sum1 = 0;
				_.each(value.ipcr_subfunctions, (value2, key2) => {
					let sum = 0;
					_.each(value2.ipcr_performance, (value3, key4) => {
						if (value3.quality) {
							sum += parseInt(value3.quality);
						}
					})
					sum1 += sum;
				})
				result += sum1;
			});
			return result;
		},


		adjectivalRating () {
			return this.numericalRating / 100;
		},

		dateToday () {
			let date = new Date();
			this.templates.date_today = `${date.getMonth()}, ${date.getFullYear()}`;
			return this.templates.date_today;
		},
	},
}
</script>
