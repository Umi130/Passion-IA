<template>
	<section class="d-flex flex-column">
		<p class="message">{{ formattedMessage }}</p>
		<div class="choices d-flex flex-column">
			<div class="choice d-flex flex-column justify-content-center" v-for="choice in content.choices" :key="choice.value" @click="$emit('select', { name: content.name, value: choice.value })">
				<h4>{{ choice.value }}</h4>
				<p v-if="choice.description">{{ choice.description }}</p>
			</div>
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

<style scoped>
	.choices {
		flex: 1;
	}
	.choice {
		flex: 1;
		padding: 0px 24px;
		border: 1px solid transparent;
	}
	.choice:hover {
		border: 1px solid #1c1840;
		cursor: pointer;
	}
</style>