<template>
	<section>
		<div class="explanation">
			<h1 v-if="content.title">{{ content.title }}</h1>
			<p>{{ formattedMessage }}</p>
		</div>
		<img v-if="content.image" :src="'./assets/images/'+content.image" class="img-fluid" />
	</section>
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
	h1 {
	font-family: 'Source Sans Pro', sans-serif;
	
	}
	.explanation {
		background-color: #1c1840;
		color: white;
		padding: 3em;
		font-size: 1.4em;
		line-height: 1.6em;
	}
</style>