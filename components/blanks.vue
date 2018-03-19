<template>
	<section>
		<header>
			<h4>Entrez les mots manquants</h4>
		</header>

		<form>
				{{ content.message }}
				<span class="blank" v-for="blank in content.blanks" :key="blank.value" >
					<span v-if="blank.type === 'input'">
						<input v-model="answers[blank.value]" type="text" class="form-control">
					</span>
					<span v-else>
						{{ blank.value }}
					</span>
				</span>			

			<button class="btn btn-primary btn-block" @click="fill" type="submit" :disabled="filledValuesCount !== inputsCount">
				Je valide
			</button>
		</form>
	</section>
</template>

<script>
module.exports = {
	name: 'blanks',
	props: ['content'],
	data: function() {
		return {
			answers: {}
		}
	},
	computed: {
		inputs() {
			return this.content.blanks.filter(blank => blank.type === 'input')
		},
		inputsCount() {
			return this.inputs.length
		},
		filledValues() {
			return this.inputs.filter(blank => {
				return this.answers[blank.value]
			})
		},
		filledValuesCount() {
			return this.filledValues.length
		}
	},
	methods: {
		fill() {
			return this.$emit('fill', { 
				name: this.content.name, 
				value: this.inputsCount === this.filledValues.filter(blank => {
					return blank.answers.indexOf(this.answers[blank.value]) > -1
				}).length
			})
		}
	}
}
</script>

<style scoped>
section {
	padding: 0px;
}
header {
	background-color: #1c1840;
	color: white;
	padding: 24px;
	text-align: center;
	font-weight: bolder;
	font-size: 1.5em;
	margin-bottom: 30px;
}

input {
		margin:0 0.5em;
		width: 6em;
		display: inline-block;
	}

button {
	text-transform: uppercase;
	}
</style>
