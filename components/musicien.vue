<template>
	<main>
		<div id="back">
			<router-link to="/">
				<img src="./assets/images/element-fermer.png" alt="Back" />
			</router-link>
		</div>
		<explanation v-if="currentStep.title || currentStep.message" :content="currentStep" :answers="answers"></explanation>
 		<audio-player v-if="currentStep.music" :content="currentStep"></audio-player>
 		
		<illustration v-if="currentStep.image" :content="currentStep"></illustration>

		<choices v-if="currentStep.choices" :content="currentStep" v-on:select="selectChoice" :answers="answers"></choices>
		<blanks v-if="currentStep.blanks" :content="currentStep" v-on:fill="fillBlanks"></blanks>

		<footer class="text-center pb-2" v-if="!currentStep.choices && !currentStep.blanks">
			<router-link :to="`/musicien/${current + 1}`" v-if="displayNextButton()" class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
			<router-link to="/credits/musicien" v-else class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
		</footer>
	</main>
</template>

<script>

module.exports = {
	name: 'musicien',
	beforeRouteEnter (to, from, next) {
		if (parseInt(to.params.step) === 0) {
			localStorage.removeItem('passion-ia-musicien')
		}
		next()	
},	
	components: {
		AudioPlayer: httpVueLoader('./audio-player.vue'),
		Explanation: httpVueLoader('./explanation.vue'),
		Illustration: httpVueLoader('./illustration.vue'),
		Choices: httpVueLoader('./choices.vue'),
		Blanks: httpVueLoader('./blanks.vue'),
	},
	data () {
		return {
			story: musicien,
			answers: {
				points: 0,
				lastStep: 0,
				contextPoints: { }
			}
		}
	},
	watch: {
		answers (newVal) {
			localStorage.setItem('passion-ia-musicien', JSON.stringify(newVal))
		}
	},
	mounted () {
		if (localStorage.getItem('passion-ia-musicien')) {
			this.answers = JSON.parse(localStorage.getItem('passion-ia-musicien'))
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
		fillBlanks (answer) {
			if (parseInt(this.$route.params.step) > this.answers.lastStep) {
				if (answer.value === true) {
					this.answers.points = this.answers.points + this.currentStep.points;
					if (answer.context) {
						this.answers.contextPoints[answer.context] = this.answers.contextPoints[answer.context] || 0
						this.answers.contextPoints[answer.context] += this.currentStep.points || 0
					}
				}
				this.$set(this.answers, answer.name, answer.value)
				// Permet de se souvenir tu dernier step
				this.answers.lastStep = parseInt(this.$route.params.step)
			}
			this.nextStep()
		},
		nextStep () {
			this.$router.push({ path: `/musicien/${this.current + 1}` })
		},
		displayNextButton(){
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