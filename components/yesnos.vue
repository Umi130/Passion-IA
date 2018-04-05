<template>
	<section class="yesnos d-flex flex-column">
		<div
			class="yesno d-flex flex-column justify-content-center"
			v-for="yesno in content.yesnos"
			:key="yesno.value"
			@click="$emit('select', { name: content.name, value: yesno.value, points: yesno.points })"
			:style="{
				'background-image': yesno.image ? 'url(./assets/images/'+yesno.image+')' : null
			}">
			<h4 v-if="yesno.value">{{ yesno.value }}</h4>
			<p v-if="yesno.description">{{ yesno.description }}</p>
		</div>
	</section>
</template>

<script>
module.exports = {
	name: 'yesnos',
	props: ['content', 'answers'],
	computed: {
		formattedMessage () {
			return Mustache.render(this.content.message, this.answers)
		}
	}
}
</script>

<style scoped>
	.yesnos {
		flex: 1;
		padding: 15px;
	}
	.yesno {
		flex: 1;
		padding: 20px 24px;
		margin: 5px 5px 5px 5px;
		border: 1px solid transparent;
		border-color: #7299de;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
	}
	.yesno:hover {
		border: 1px solid #1c1840;
		cursor: pointer;
	}
	.yesno h4 {
		text-transform: uppercase;
		font-weight: bolder;
	}
</style>