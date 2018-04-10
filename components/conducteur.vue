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
 
		<yesno v-if="currentStep.yesno" :content="currentStep" v-on:select="selectYesNo" :answers="answers"></yesno>

		<footer class="text-center pb-2" v-if="!currentStep.choices && !currentStep.yesno">
			<router-link :to="`/conducteur/${current + 1}`" v-if="displayNextButton()" class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
			<router-link to="/credits/conducteur" v-else class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
		</footer>
	</main>
</template>

<script>

module.exports = {
	name: 'conducteur',
	beforeRouteEnter (to, from, next) {
		if (parseInt(to.params.step) === 0) {
			localStorage.removeItem('passion-ia-conducteur')
		}
		next()
	},
	components: {
		Explanation: httpVueLoader('./explanation.vue'),
		Illustration: httpVueLoader('./illustration.vue'),
		Choices: httpVueLoader('./choices.vue'),
		yesno: httpVueLoader('./yesno.vue')
	},
	data () {
		return {
			story: conducteur,
			answers: {
				points: 0,
				lastStep: 0,
				contextPoints: { }
			}
		}
	},
	watch: {
		answers: {
			handler (newVal) {
				localStorage.setItem('passion-ia-conducteur', JSON.stringify(newVal))
			},
			deep: true
		}
	},
	mounted () {
		if (localStorage.getItem('passion-ia-conducteur')) {
			this.answers = JSON.parse(localStorage.getItem('passion-ia-conducteur'))
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
			if (parseInt(this.$route.params.step) > this.answers.lastStep) {				
				if (choice.points) {
					this.answers.points = this.answers.points + choice.points;
				}
				if (choice.context) {
					this.answers.contextPoints[choice.context] = this.answers.contextPoints[choice.context] || 0
					this.answers.contextPoints[choice.context] += choice.points
				}
				this.$set(this.answers, choice.name, choice.value)
				// Permet de se souvenir tu dernier step
				this.answers.lastStep = parseInt(this.$route.params.step)
			}
			this.nextStep()
		},
		selectYesNo (choice) {
			if (parseInt(this.$route.params.step) > this.answers.lastStep) {			
				const points = this.answers[choice.name] || 0
				this.$set(this.answers, choice.name, choice.isCorrect ? points + 1 : points)
				this.$set(this.answers, "points", choice.isCorrect ? this.answers.points + 1 : this.answers.points)
				// Permet de se souvenir tu dernier step
				this.answers.lastStep = parseInt(this.$route.params.step)
			}
			this.nextStep()
		},
		nextStep () {
			this.$router.push({ path: `/conducteur/${this.current + 1}` })
		},
		displayNextButton(){
			return ['choices', 'yesno'].indexOf(this.currentStep.type) === -1  && 
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