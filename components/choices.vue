<template>
	<section>
<!-- class="d-flex flex-column" -->
		<div>
	<header>
		<p class="message">{{ formattedMessage }}</p>
	</header>
	<p>
		<div class="choices d-flex flex-column">
			<div class="choice d-flex flex-column justify-content-center" v-for="choice in content.choices" :key="choice.value" @click="$emit('select', { name: content.name, value: choice.value })">
				<h4>{{ choice.value }}</h4>
				<p v-if="choice.description">{{ choice.description }}</p>
			</div>
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
header {
	background-color: #1c1840;
	color: white;
	padding: 24px;
	text-align: center;
	font-weight: bolder;
	font-size: 1.5em;
}

h4 {
	text-transform: uppercase;
	font-weight: bolder;
}

	.choices {
		flex: 1;
	}
	.choice {
		flex: 1;
		padding: 20px 24px;
		margin: 5px 5px 5px 5px;
		border: 1px solid transparent;
		border-color: #7299de;
	}
	.choice:hover {
		border: 1px solid #1c1840;
		cursor: pointer;
	}
</style>