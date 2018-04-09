<template>
	<section class="d-flex flex-column">
		<form>
			<span class="blank" v-for="blank in content.blanks" :key="blank.value" >
				<span v-if="blank.type === 'input'">
					<input v-model.trim="answers[blank.value]" type="text" class="form-control">
				</span>
				<span v-else>
					{{ blank.value }}
				</span>
			</span>
		</form>
		<footer class="text-center pb-2">
			<button class="btn btn-primary btn-block" @click="fill" type="submit" :disabled="filledValuesCount !== inputsCount">
				Je valide
			</button>
		</footer>
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
			const goodResponses = this.filledValues.filter(blank => {
				return blank.answers.indexOf(this.answers[blank.value]) > -1
			}).length
			return this.$emit('fill', {
				name: this.content.name,
				value: this.inputsCount === goodResponses,
				context: this.content.contextPoints
			})
		}
	}
}
</script>

<style scoped>
	form {
		flex: 1;
		padding: 20px 24px;
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
