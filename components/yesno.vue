<template>
	<section class="d-flex flex-column">
		<section :style="{ 'background-image': 'url(./assets/images/' + content.largeimage + ')' }"></section>
		<footer class="text-center pb-2">
			<button class="btn btn-success" style="cursor:pointer; width:45%" @click="$emit('select', { name: content.name, isCorrect: content.yesno.answer === true })" type="submit">
				Oui
			</button>
			<button class="btn btn-danger" style="cursor:pointer; width:45%" @click="$emit('select', { name: content.name, isCorrect: content.yesno.answer === false })" type="submit">
				Non
			</button>
		</footer>
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
	section {
		background-size: auto 300px;
		background-position: center;
		background-repeat: no-repeat;
	}

	button {
	text-transform: uppercase;
	}
</style>