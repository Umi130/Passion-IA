<template>
	<section>
		<audio autoplay>
		  <source :src="'assets/music/'+content.music.src" type="audio/mp3" :controls="content.music.controls">
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