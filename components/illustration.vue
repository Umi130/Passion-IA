<template>
	<section :style="{ 'background-image': 'url(./assets/images/' + content.src + ')' }">
	</section>
</template>

<script>

module.exports = {
	name: 'illustration',
	props: ['content', 'answers']
}
</script>

<style scoped>
	section {
		background-size: auto 100%;
		background-position: center center;
		background-repeat: no-repeat;
	}
</style>