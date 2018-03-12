<template>
	<section>
		<img :src="'./assets/images/'+content.src" class="img-fluid" />
	</section>
</template>

<script>

module.exports = {
	name: 'illustration',
	props: ['content', 'answers']
}
</script>

<style></style>