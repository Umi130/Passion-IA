<template>
	<section>
		<img :src="content.src" class="img-fluid" />
	</section>
</template>

<script>

module.exports = {
	name: 'illustration',
	props: ['content', 'answers']
}
</script>

<style></style>