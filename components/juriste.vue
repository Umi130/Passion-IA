<template>
	<main>
		<div id="back">
			<router-link to="/">
				<img src="./assets/images/element-fermer.png" alt="Back" />
			</router-link>
		</div>
		<explanation v-if="currentStep.title || currentStep.message" :content="currentStep" :answers="answers"></explanation>

		<illustration v-if="currentStep.image" :content="currentStep"></illustration>

		<choices v-if="currentStep.choices" :content="currentStep" v-on:select="selectChoice" :answers="answers"></choices>
		<blanks v-if="currentStep.blanks" :content="currentStep" v-on:fill="fillBlanks"></blanks>

		<footer class="text-center pb-2" v-if="!currentStep.choices && !currentStep.blanks">
			<router-link :to="`/juriste/${current + 1}`" v-if="displayNextButton()" class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
		</footer>
	</main>
</template>

<script>

module.exports = {
	name: 'juriste',
	components: {
		Explanation: httpVueLoader('./explanation.vue'),
		Illustration: httpVueLoader('./illustration.vue'),
		Choices: httpVueLoader('./choices.vue'),
		Blanks: httpVueLoader('./blanks.vue')
	},
	data () {
		return {
			story: juriste,
			answers: {
				points: 0
			}
		}
	},
	watch: {
		answers (newVal) {
			localStorage.setItem('passion-ia-juriste', JSON.stringify(newVal))
		}
	},
	mounted () {
		if (localStorage.getItem('passion-ia-juriste')) {
			this.answers = JSON.parse(localStorage.getItem('passion-ia-juriste'))
		}
	},
	computed: {
		filteredStory () {
			return this.story.filter(step => {
				if (!step.when) return true
				return step.when(this.answers)
			})
		},
		currentStep () {
			return this.filteredStory[this.current]
		},
		current () {
			return parseInt(this.$route.params.step)
		}
	},
	methods: {
		selectChoice (choice) {
			if (choice.points) {
				this.answers.points = this.answers.points + choice.points;
			}
			this.$set(this.answers, choice.name, choice.value)
			this.nextStep()
		},
		fillBlanks (answer) {
			if (answer.value === true) {
				this.answers.points = this.answers.points + this.currentStep.points;
			}
			this.$set(this.answers, answer.name, answer.value)
			this.nextStep()
		},
		nextStep () {
			this.$router.push({ path: `/juriste/${this.current + 1}` })
		},
		displayNextButton() {
			return ['choices', 'blanks'].indexOf(this.currentStep.type) === -1  && 
				this.current < this.filteredStory.length - 1;
		}
	}
}
</script>

<style scoped>
	main {
		position: relative;
	}

	#back {
		position: absolute;
		right: 0;
		top: 0;
	}

	section {
		flex: 1;
	}

	footer {
		margin-top: 15px;
	}
</style>