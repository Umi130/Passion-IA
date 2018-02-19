<template>
	<main>
		<header class="row">
			<div class="col">
				<h1>L'Ecole des IA</h1>
				<p class="lead">Elever une intelligence artificielle n'est pas plus compliqué qu'éduquer un enfant. Retroussez vos manches et essayez d’amener votre bébé IA le plus loin possible.</p>
			</div>
		</header>
		<section class="row">
			<div class="col"><img src="./assets/images/Robot.png" height="248" width="130" alt="Robot" max-height="50%" class="img-fluid" /></div>
		</section>
		<section class="row d-flex flex-nowrap" id="parcours">
			<div class="col"><img src="./assets/images/voiture.png" alt="Symbole Voiture" class="img-fluid" /></div>
			<div class="col"><img src="./assets/images/musicien.png" alt="Symbole Musicien" class="img-fluid" /></div>
			<div class="col"><router-link to="/juriste/1"><img src="./assets/images/juge.png" alt="Symbole Juriste" class="img-fluid" /></router-link></div>
			<div class="col"><img src="./assets/images/assistant.png" alt="Symbole Assistant" class="img-fluid" /></div>
		</section>
		<section class="row">
			<div class="col"><button type="button" class="btn btn-primary">Je commence</button></div>
		</section>
		<footer class="row">
			<div class="col"><button type="button" class="btn btn-info">A propos</button></div>
		</footer>
	</main>
</template>

<script>
module.exports = {}
</script>

<style></style>