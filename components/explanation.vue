<template>
	<div>
		<header>
			<h4 v-if="content.title">{{ content.title }}</h4>
			<p>{{ formattedMessage }}</p>
		</header>
		<div class="content-image">
			<img v-if="content.image" :src="'./assets/images/'+content.image" class="img-fluid" />
		</div>
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
header {
	background-color: #1c1840;
	color: white;
	padding: 24px;
}

.content-image {
	padding: 1em;
	text-align: center;
}

.content-image img {
	max-height: 50vh;
}
</style>