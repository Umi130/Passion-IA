<template>
	<section>
		<p>{{ formattedMessage }}</p>
		<div class="choice" v-for="choice in content.choices" :key="choice.value" @click="$emit('select', { name: content.name, value: choice.value })">
			<h2>{{ choice.value }}</h2>
			<p>{{ choice.description }}</p>
		</div>
	</section>
</template>

<script>
module.exports = {
	name: 'choices',
	props: ['content', 'answers'],
	computed: {
		formattedMessage () {
			return Mustache.render(this.content.message, this.answers)
		}
	}
}
</script>

<style>
	.choice {
		border: 1px solid transparent;
	}
	.choice:hover {
		border: 1px solid grey;
		cursor: pointer;
	}
</style>