<template>
	<section :style="{ 'background-image': 'url(./assets/images/' + content.image + ')' }"></section>
</template>

<script>
module.exports = {
	name: 'illustration',
	props: ['content', 'answers']
}
</script>

<style scoped>
	section {
		background-size: 200px auto;
		background-position: bottom center;
		background-repeat: no-repeat;
	}
</style>