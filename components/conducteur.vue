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

		<yesno v-if="currentStep.yesno" :content="currentStep" v-on:select="selectChoice" :answers="answers"></yesno>

		<footer class="text-center pb-2" v-if="!currentStep.choices && !currentStep.yesno">
			<router-link :to="`/conducteur/${current + 1}`" v-if="displayNextButton()" class="btn btn-primary btn-block">
				SUIVANT
			</router-link>
		</footer>
	</main>
</template>

<script>

module.exports = {
	name: 'conducteur',
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
				points: 0
			}
		}
	},
	watch: {
		answers (newVal) {
			localStorage.setItem('passion-ia-conducteur', JSON.stringify(newVal))
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
			if (choice.points) {
				this.answers.points = this.answers.points + choice.points;
			}
			this.$set(this.answers, choice.name, choice.value)
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