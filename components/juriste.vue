<template>
	<main>
		<explanation v-if="currentStep.type === 'explanation'" :content="currentStep" :answers="answers"></explanation>
		<illustration v-if="currentStep.type === 'illustration'" :content="currentStep"></illustration>
		<choices v-if="currentStep.type === 'choices'" :content="currentStep" v-on:select="selectChoice"></choices>
		<router-link :to="`/juriste/${current + 1}`" v-if="current < story.length - 1">Suivant</router-link>
	</main>
</template>

<script>

module.exports = {
	name: 'juriste',
	components: {
		Explanation: httpVueLoader('./explanation.vue'),
		Illustration: httpVueLoader('./illustration.vue'),
		Choices: httpVueLoader('./choices.vue')
	},
	data () {
		return {
			story: juriste,
			answers: {}
		}
	},
	computed: {
		currentStep () {
			return this.story[this.current]
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
		nextStep () {
			this.$router.push({ path: `/juriste/${this.current + 1}` })
		}
	}
}
</script>

<style></style>