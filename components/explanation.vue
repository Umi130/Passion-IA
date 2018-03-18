<template>
	<div>
		<h4 v-if="content.title">{{ content.title }}</h4>
		<p>{{ formattedMessage }}</p>
		<img v-if="content.image" :src="'./assets/images/'+content.image" class="img-fluid" />
	</div>
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
div {
	background-color: #1c1840;
	color: white;
	padding: 24px;
}
</style>