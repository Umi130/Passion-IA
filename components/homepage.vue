<template>
	<main>
		<header class="container text-center mt-4">
				<h1>L'école des IA</h1>
				<p class="lead">Tentez d’amener votre bébé IA le plus loin possible.</p>
		</header>
		<section class="container text-center d-flex flex-column justify-content-end" id="robot-image":style="{ 'background-image': story === null ? 'url(./assets/images/Robot.png)' : 'url(' + storyImage + ')'  }">
			<router-link :to="storyLink" class="btn btn-primary" v-if="story !== null">
				JE COMMENCE
			</router-link>
		</section>
		<footer class="d-flex justify-content-around text-center" id="parcours">
			<div :class="{ active: story === 'voiture' }" @click="story = 'voiture'">
				<p><img :src="imageFor('voiture')" alt="Symbole Voiture" class="img-fluid"/></p>
				<p>Voiture</p>
			</div>
			<div :class="{ active: story === 'musicien' }" @click="story = 'musicien'">
				<p><img :src="imageFor('musicien')" alt="Symbole Musicien" class="img-fluid" /></p>
				<p>Musicien</p>
			</div>
			<div :class="{ active: story === 'juriste' }" @click="story = 'juriste'">
				<p><img :src="imageFor('juriste')" alt="Symbole Juriste" class="img-fluid" /></p>
				<p>Juge</p>
			</div>
			<div :class="{ active: story === 'assistant' }" @click="story = 'assistant'">
				<p><img :src="imageFor('assistant')" alt="Symbole Assistant" class="img-fluid" /></p>
				<p>Assistant</p>
			</div>
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
	#robot-image {
		flex: 1;
		background-size: auto 70%;
		background-position: top center;
		background-repeat: no-repeat;
		padding-bottom: 5rem;
	}
	#parcours {
		background-color: #4281de;
		color: white;
		font-size: 1em;
		text-transform: uppercase;

		position: fixed;
		bottom: 0;
		left:0; 
		right: 0;
	}
	#parcours div {
		transform: translateY(-30%);

		padding: 0 4px;

		cursor: pointer;
	}
	#parcours p {
		margin-bottom: 0px;
	}
	#parcours img {
		transition: 0.1s transform ease-in-out;
	}

	#parcours div:hover img, #parcours div.active img {
		transform: scale(1.1);
	}
</style>