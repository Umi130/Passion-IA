<template>
	<section class="choices d-flex flex-column">
		<div
			class="choice d-flex flex-column justify-content-center"
			v-for="choice in content.choices"
			:key="choice.value"
			@click="$emit('select', { name: content.name, value: choice.value, points: choice.points, context: content.contextPoints })"
			:style="{
				'background-image': choice.image ? 'url(./assets/images/'+choice.image+')' : null
			}">
			<h4 v-if="choice.value">{{ choice.value }}</h4>
			<p v-if="choice.description">{{ choice.description }}</p>
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
		padding: 5px;
	}
	.choice {
		flex: 1;
		padding: 15px 24px;
		margin: 5px 5px 5px 5px;
		border: 1px solid transparent;
		border-color: #7299de;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
	}
	.choice:hover {
		border: 1px solid #1c1840;
		cursor: pointer;
	}
	.choice h4 {
		text-transform: uppercase;
		font-weight: bolder;
	}
</style>