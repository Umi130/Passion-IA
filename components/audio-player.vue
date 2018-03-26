<template>
	<section>
		<audio autoplay>
		  <source :src="'assets/music/'+content.music" type="audio/mp3">
		  Your browser does not support the audio element.
		</audio> 
	</section>
</template>

<script>
module.exports = {
	name: 'AudioPlayer',
	props: ['content', 'answers']
}
</script>

<style scoped></style>