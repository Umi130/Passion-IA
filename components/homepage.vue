<template>
	<main>
		<header class="container text-center mt-4">
				<h2>L'école des Intelligences Artificielles</h2>
				<p class="lead">
					Choisissez un profil à faire grandir
					<a class="about-btn" @click="showModal">
						<img src="./assets/images/element-info.png" alt="About"/>
					</a>
				</p>
 
				<!-- Modal for informations informations -->
				<!-- The Modal -->
				<div id="modalInfo" class="modal" v-if="withModal">
				  	<!-- Modal content -->
					<div class="modal-content">
				    	<p><strong>«Machine learning», «réseaux de neurones», «traitement automatique du langage»... Difficile d’expliquer simplement le fonctionnement d’un algorithme !</strong></p>
						<p>Ce jeu vous propose de devenir «éleveur de robot», pour mieux comprendre le fonctionnement d’une IA.</p>
						<p><em>Ce projet a été conçu par six étudiants de l’École de journalisme de Sciences Po :</em><br>
						Lawrence Bekk-Day, Tamara Bouhl, Océane Cornevin, Mathilde Dumazet, Aurore Gayte & Mathilde Saliou</p>

						<p><em>Remerciements tout particuliers à :</em><br>
							Julie Zentkowski pour le graphisme<br>
							Jules Bonnard (AFP) & Pierre Romera (ICIJ) pour leur accompagnement<br>
						Célia Mériguet & Thibaud Vuitton (franceinfo) pour leurs conseils éditoriaux</p>
						<p><small>© 2018 Tous droits réservés</small></p>

				    	<span class="close">X</span>
  					</div>
				</div>
		</header>
		<section class="container text-center d-flex flex-column justify-content-end" id="robot-image" :style="{ 'background-image': story === null ? 'url(./assets/images/Robot.png)' : 'url(' + storyImage + ')'  }">
			<router-link :to="storyLink" class="btn btn-primary" v-if="story !== null">
				JE COMMENCE
			</router-link>
		</section>
		<footer class="d-flex justify-content-around text-center" id="parcours">
			<div :class="{ active: story === 'conducteur' }" @click="story = 'conducteur'">
				<p><img :src="imageFor('conducteur')" alt="Symbole Conducteur" class="img-fluid"/></p>
				<p>Conducteur</p>
			</div>
			<div :class="{ active: story === 'musicien' }" @click="story = 'musicien'">
				<p><img :src="imageFor('musicien')" alt="Symbole Musicien" class="img-fluid" /></p>
				<p>Musicien</p>
			</div>
			<div :class="{ active: story === 'juriste' }" @click="story = 'juriste'">
				<p><img :src="imageFor('juriste')" alt="Symbole Juriste" class="img-fluid" /></p>
				<p>Juge</p>
			</div>
		</footer>
	</main>
</template>

<script>
module.exports = {
	data: function() {
		return {
			story: null,
			withModal: false
		}
	},
	methods: {
		imageFor: function(name) {
			return './assets/images/' + name + (name === this.story ? '-select.png' : '.png')
		},
		showModal: function() {
			this.withModal = true
		},
		closeModal: function() {
			this.withModal = false
		}
	},
	computed: {
		storyImage: function() {
			return ['./assets/images/robot-', this.story, '.png'].join('')
		},
		storyLink: function() {
			return ['/', this.story, '/0'].join('')
		}
	},
	mounted: function() {
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = (function(event) {
		  if (event.target == document.getElementById('modalInfo')) {
		  	this.closeModal()
		    this.$nextTick()
		  }
		}).bind(this)
	}
}

</script>

<style scoped>
	#robot-image {
		flex: 1;
		background-size: auto 70%;
		background-position: top center;
		background-repeat: no-repeat;
		position: relative;
		padding-bottom: 4em;
	}

	#robot-image .btn {
		position: absolute;
		bottom: 4em;
		left: 1em;
		right: 1em;
	}

	#parcours {
		background-color: #4281de;
		color: white;
		font-size: 1em;
		text-transform: uppercase;
	}
	#parcours div {
		transform: translateY(-30%);
		padding: 0 4px;
		cursor: pointer;
		margin-bottom: -2em;
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

	.about-btn img {
		width: 18px;
	}
</style>