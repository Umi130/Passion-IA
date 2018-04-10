<template>
	<section class="d-flex">
		<audio autoplay :controls="content.music.controls" style="width:100%;">
		  <source :src="'assets/music/'+content.music.src" type="audio/mp3">
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
