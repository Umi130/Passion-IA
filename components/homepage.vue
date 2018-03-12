<template>
	<main>
		<header class="row">
			<div class="col">
				<h1>L'ÉCOLE DES IA</h1>
				<p class="lead">Retroussez vos manches et essayez d’amener votre bébé IA le plus loin possible.</p>
			</div>
		</header>
		<section class="row">
			<div class="col">
				<img src="./assets/images/Robot.png" v-if="story === null" height="248" width="130" alt="Robot" max-height="50%" class="img-fluid" />
				<img :src="storyImage" v-if="story !== null" height="248" width="130" :alt="'Robot ' + story " max-height="50%" class="img-fluid" />
			</div>
		</section>
		<section class="row d-flex flex-nowrap" id="parcours">
			<div class="col">
				<img :src="imageFor('voiture')" @click="story = 'voiture'" alt="Symbole Voiture" class="img-fluid" />
				VOITURE
			</div>
			<div class="col">
				<img :src="imageFor('musicien')" @click="story = 'musicien'" alt="Symbole Musicien" class="img-fluid" />
				MUSICIEN
			</div>
			<div class="col">
				<img :src="imageFor('juriste')" @click="story = 'juriste'" alt="Symbole Juriste" class="img-fluid" />
				JURISTE
			</div>
			<div class="col">
				<img :src="imageFor('assistant')" @click="story = 'assistant'" alt="Symbole Assistant" class="img-fluid" />
				ASSISTANT
			</div>
		</section>
		<section class="row">
			<div class="col">
				<router-link :to="storyLink" class="btn btn-primary" v-if="story !== null">
					JE COMMENCE
				</router-link>
				<button class="btn btn-primary" disabled v-if="story === null">
					JE COMMENCE
				</button>
			</div>
		</section>
		<footer class="row">
			<div class="col"><button type="button" class="btn btn-info">À PROPOS</button></div>
		</footer>
	</main>
</template>

<script>
module.exports = {
	data: function() {
		return {
			story: null
		}
	},
	methods: {
		imageFor: function(name) {
			return './assets/images/' + name + (name === this.story ? '-select.png' : '.png')
		}
	},
	computed: {
		storyImage: function() {
			return ['./assets/images/robot-', this.story, '.png'].join('')
		},
		storyLink: function() {
			return ['/', this.story, '/0'].join('')
		}
	}
}
</script>

<style></style>