<template>
	<header>
		<h4 v-if="content.title">{{ content.title }}</h4>
		<p>{{ formattedMessage }}</p>
	</header>
</template>

<script>

module.exports = {
	name: 'explanation',
	props: ['content', 'answers'],
	computed: {
		formattedMessage () {
			return Mustache.render(this.content.message, this.answers)
		}
	}
}
</script>

<style scoped>
header {
	background-color: #1c1840;
	color: white;
	padding: 24px;
}
</style>