<template>
	<main class="mt-5">
		<header class="col-12 text-center pt-5">
				<h1>L'école des IA</h1>
				<p class="lead">Retroussez vos manches et essayez d’amener votre bébé IA le plus loin possible.</p>
		</header>
		<section class="col-12" id="robot-image">
			<div class="text-center">
				<img src="./assets/images/Robot.png" v-if="story === null" alt="Robot" class="img-fluid" />
				<img :src="storyImage" v-if="story !== null" alt="'Robot ' + story " class="img-fluid" />
			</div>
		</section>
		<section class="col-12 d-flex justify-content-around" id="parcours">
			<p>
				<img :src="imageFor('voiture')" @click="story = 'voiture'" alt="Symbole Voiture" class="img-fluid" />
				<span>Voiture</span>
			</p>
			<p>
				<img :src="imageFor('musicien')" @click="story = 'musicien'" alt="Symbole Musicien" class="img-fluid" />
				<span>Musicien</span>
			</p>
			<p>
				<img :src="imageFor('juriste')" @click="story = 'juriste'" alt="Symbole Juriste" class="img-fluid" />
				<span>Juge</span>
			</p>
			<p>
				<img :src="imageFor('assistant')" @click="story = 'assistant'" alt="Symbole Assistant" class="img-fluid" />
				<span>Assistant</span>
			</p>
		</section>
		<section class="row">
			<div class="col">
				<router-link :to="storyLink" class="btn btn-primary" v-if="story !== null">
					JE COMMENCE
				</router-link>
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

<style scoped>
	#robot-image div {
		max-width: 200px;
		margin: auto;
	}
	#parcours {
		background-color: #4281de;
		padding-bottom: 25px;
	}
	#parcours p {
		margin: 0 5px;
		padding: 0;
		font-size: 0.8em;
		position: relative;
		top: -37%;
	}
	#parcours p span {
		padding-top: 25px;
		text-align: center;
		display: block;
		color: white;
		text-transform: uppercase;
	}
</style>