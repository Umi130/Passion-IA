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
		/*200px originally, now 300px*/
		background-size: auto 300px;
		background-position: bottom center;
		background-repeat: no-repeat;
	}
</style>