<template>
	<section>
		<p>{{ formattedMessage }}</p>
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

<style></style>