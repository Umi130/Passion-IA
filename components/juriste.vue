<template>
	<main>
		<explanation class="col-12" v-if="currentStep.type === 'explanation'" :content="currentStep" :answers="answers"></explanation>
		<illustration class="col-12" v-if="currentStep.type === 'illustration'" :content="currentStep"></illustration>
		<choices class="col-12" v-if="currentStep.type === 'choices'" :content="currentStep" v-on:select="selectChoice" :answers="answers"></choices>
		<blanks class="col-12" v-if="currentStep.type === 'blanks'" :content="currentStep" v-on:fill="fillBlanks"></blanks>
		<div class="col-12">
			<router-link :to="`/juriste/${current + 1}`" v-if="displayNextButton()" class="btn btn-primary">
				SUIVANT
			</router-link>
		</div>
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
			answers: {}
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
			this.$set(this.answers, choice.name, choice.value)
			this.nextStep()
		},
		fillBlanks (answer) {
			this.$set(this.answers, answer.name, answer.value)
			this.nextStep()
		},
		nextStep () {
			this.$router.push({ path: `/juriste/${this.current + 1}` })
		},
		displayNextButton(){
			return ['choices', 'blanks'].indexOf(this.currentStep.type) === -1  && 
				this.current < this.filteredStory.length - 1;
		}
	}
}
</script>

<style></style>