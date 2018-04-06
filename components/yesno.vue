<template>
	<section class="d-flex flex-column">
		<section :style="{ 'background-image': 'url(./assets/images/' + content.largeimage + ')' }"></section>
		<footer class="text-center pb-2">
			<button class="btn btn-success" style="width:45%" @click="nextyes" type="submit">
				Oui
			</button>
			<button class="btn btn-danger" style="width:45%" @click="nextno" type="submit">
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


methods: {
}

</script>

<style scoped>
	section {
		background-size: auto 400px;
		background-position: center;
		background-repeat: no-repeat;
	}

	button {
	text-transform: uppercase;
	}
</style>