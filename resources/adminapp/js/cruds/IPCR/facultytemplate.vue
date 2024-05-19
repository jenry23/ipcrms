<template>
	<div v-if="templates.ipcr_function">
	<slot />
	<div class="card" style="width: 100%;">
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
					Year <input type="text" size="10" v-model="templates.year" disabled />.
				</p>
			</div>
			<table class="table table-border">
			<tr>
				<th v-for="(signatory, index) in signatures" :key="index">
					<p>{{ signatory.title === 'Discussed with:' ? 'Conforme' : signatory.title }}</p>
					<span style="margin-left: 30%;">
					<img :src="signatory.signature" alt="My Image" style=" width: 128px; height: 50px;">
					<p style="margin-left: 30%;">{{ signatory.name }}</p>
					</span>
				</th>
			</tr>
			<tr>
				<th style="text-align: center;">
					Ratee
				</th>
				<th style="text-align: center;" v-for="signatory in templates.ipcr_signatory" :key="signatory.id">
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
									<td><input type="number" v-model="performance.target" disabled /></td>
									<td>
										<input type="number" v-model="performance.accomplished" disabled />
									</td>
									<td>
										<input type="date" v-model="performance.date_of_submission" disabled />
									</td>
									<td>
										<input type="input" v-model="performance.date_completed" disabled />
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
						<td v-for="(signatory, index) in signatures"
							:colspan="signatory.title === 'Final Rating:' ? '4' : '2'"
							:key="index">
							<p>{{ signatory.title }}</p>
							<span style="margin-left: 102px;" v-if="signatory.name">
								<img :src="signatory.signature" alt="My Image"
									style=" width: 128px; height: 50px;">
								<br>
								<p style="margin-left: 102px;">{{ signatory.name }}</p>
							</span>
						</td>
					</tr>
					<tr>
						<th colspan="2">RATEE</th>
						<th colspan="2">DEAN</th>
						<th colspan="2">HRMO</th>
						<th colspan="4">CAMPUS DIRECTOR</th>
					</tr>
				</tfoot>
			</table>
		</div>
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
			let total_ipcr_performance1 = 0;

			_.each(this.templates.ipcr_function, (value, key) => {
				let sum1 = 0;
				let total_ipcr_performance2 = 0;

				_.each(value.ipcr_subfunctions, (value2, key2) => {
					let sum = 0;
					let total_ipcr_performance3 = 0;

					_.each(value2.ipcr_performance, (value3, key4) => {
						if (value3.asc) {
							sum += parseFloat(value3.asc);
						}
						total_ipcr_performance3 = key4 + 1;
					})
					total_ipcr_performance2 += total_ipcr_performance3
					sum1 += sum;
				})
				total_ipcr_performance1 += total_ipcr_performance2;
				result += sum1;
			});

			let compute = result / total_ipcr_performance1;

			return parseFloat(compute.toFixed(2));
		},

		adjectivalRating () {
			let value = null;

			if(this.numericalRating >= 4 && this.numericalRating < 5) {
				value = 'Very Satisfactory';
			} else if(this.numericalRating >= 3 && this.numericalRating < 4) {
				value = 'Satisfactory';
			} else if(this.numericalRating >= 2 && this.numericalRating < 3) {
				value = 'Unsatisfactory';
			} else if(this.numericalRating >= 1 && this.numericalRating < 2) {
				value = 'Poor';
			} else {
				value = 'Outstanding';
			}

			return value;
		},

		dateToday () {
			let date = new Date();
			this.templates.date_today = `${date.getMonth()}, ${date.getFullYear()}`;
			return this.templates.date_today;
		},
	},
}
</script>
