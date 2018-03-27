
const musicien = [
	{
		title: "Ce parcours utilise de la musique",
		message: "Nous vous conseillons d'activer le son ou d'utiliser des écouteurs.",
		image: "element-son.png",
	},

	{
		title: "Vous êtes un musicien...",
		message: "et plus rien ne vous inspire, pas même votre dernière rupture amoureuse. C’est le syndrome de la page blanche. Vous traînez sur Spotify en quête d’inspiration et tombez par hasard sur l’album Hello World.",
		image: "robot-musicien-bebe.png",
	},


	{
		title: "Vous écoutez : Hello World",
		message: "Un morceau composé à l'aide d'une intelligence artificielle.",
		music: {
			controls: true,
			src: "robot-musicien-spotify.mp3"
		}
	},

	{
		title: "Composé à l'aide d'une intelligence artificielle ?",
		message: "La chanson Hello World ressemble pourtant au style de Stromae. Vous faites une petite recherche...",
		image: "illust-musicien-stromae.jpg",
	},

	{
		title: "Vous décidez de créer une musique en vous aidant d'une IA.",
		message: "Vous contactez Robin Meier, un musicien qui utilise des programmes informatiques pour composer. Pour la musique du spectacle La Fabrique des Monstres, il a utilisé un algorithme en accès libre sur internet.",
		image: "experts-musicien-meier.jpg",
	},

	{
		title: "Un algo-rythme ?",
		message: "Non, rien à voir avec le tempo. Un algorithme ce sont les instructions qui commandent un programme informatique.",
		image: "experts-musicien-meier.jpg",
	},

	{
		message: "C'est un peu comme une recette de cuisine. Le plat c’est le morceau, les ingrédients sont vos influences. Sur les conseils de Robin Meier, vous téléchargez l’algorithme.",
		image: "robot-musicien-bebe.png",
	},

	{
		message: "Ce ne sont que quelques lignes de codes mais vous vous prenez déjà d'affection pour ce petit compositeur en herbe. Vous décidez de lui donner un prénom.",
		image: "robot-musicien-bebe.png",
	},

	{
		name: "name",
		message: "Vous l'appelez...",
		choices: [
			{
				"value": "Johnny Hallgorithme",
				"description": "parce vous êtes plutôt rock and roll",
				"points": 1
			},
			{
				"value": "Nina Sibot",
				"description": "parce que vous avez la soul dans le sang",
				"points": 1
			},
			{
				"value": "YuMi",
				"description": "en hommage au robot qui a dirigé le chanteur Andrea Bocelli et son orchestre",
				"points": 1
			}
		]
	},

	{
		title: "Premier test de l'algorithme...",
		message: "Il vous suffit de rentrer la durée du morceau que vous souhaitez faire composer par {{name}} ainsi que sa tonalité. Vous tentez : 4 minutes et 33 secondes & sol majeur.",
		image: "robot-musicien-bebe.png",
	},


	{
		title: "Quelle déception...",
		message: "Silence pendant 4 minutes et 33 secondes. Plutôt intéressant comme concept, mais vous risquez d’être accusé de plagiat puisque le compositeur de musique expérimentale John Cage l’a déjà fait avant vous. Le titre de son morceau? 4′33″.",
		image: "robot-musicien-bebe.png",
	},

	{
		message: "«John Cage, c’est une grande inspiration pour moi, vous explique Robin Meier. Ce qui m’intéresse avec l’intelligence artificielle, c’est l’aléatoire, et John Cage a beaucoup utilisé ce concept dans sa musique.»",
		image: "experts-musicien-meier.jpg",
	},

	{
		title: "Cela ne résout pas votre problème...",
		message: "Peu importe la durée, la machine ne vous sort que du silence. Vous écoutez les conseils de François Pachet, qui dirige le Creator Technology Research Lab de Spotify. Il a dit sur France Culture : «La première chose qu’on fait, c’est donner de la musique dont on veut s’inspirer au système.»",
		image: "experts-musicien-pachet.jpg",
	},

	{
		title: "Vous avez oublié une étape cruciale !",
		message: "Nourrir la machine de vos influences : «Pour mes projets, je pars avec une base de données d’au moins 4h de son», précise Robin Meier.",
		image: "experts-musicien-meier.jpg",
	},

	{
		name: "choice_mode_composition",
		message: "Quelle méthode de composition avec algorithme choisir ?",
		choices: [
			{
				"value": "Celle de François Pachet",
				"description": "Fournir à l’algorithme des partitions et des textes. Il pourra créer un nouveau tube planétaire dans le style que vous lui aurez imposé.",
				"points": 1
			},
			{
				"value": "Celle de Robin Meier",
				"description": "Fournir directement des musiques et bruits en tous genres à l’algorithme. Il pourra analyser les formes d’ondes pour créer des sons inédits.",
				"points": 1
			},
		]
	},


////////////////////////////
///CHEMIN FRANCOIS PACHET///
////////////////////////////

	{
		title: "Apprendre le solfège",
		message: "Si vous voulez utiliser des partitions, il faut d’abord apprendre à {{name}} à les lire. Commençons par la base du solfège : les notes.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

//
//MINI-JEU NOM NOTES
//

	{
		name: "blanks_debut_gamme1",
		title: "Remplissez le texte à trous",
		image: "robot-musicien-portee-1.png",
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['Re', 'Ré', 're', 'ré']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['Mi', 'mi']
			},
		],	
		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître ces notes.",
		image: "robot-musicien-bebe.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.blanks_debut_gamme1,
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait répondre Ré & Mi.",
		image: "robot-musicien-bebe-etonne.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && !answers.blanks_debut_gamme1,
	},

//Exercice 2
	{
		name: "blanks_debut_gamme2",
		title: "Remplissez le texte à trous",
		image: "robot-musicien-portee-2.png",
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['La', 'la']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['La', 'la']
			},
		],	
		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître ces notes.",
		image: "robot-musicien-bebe.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.blanks_debut_gamme2,
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait répondre La & La.",
		image: "robot-musicien-bebe-etonne.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && !answers.blanks_debut_gamme2,
	},

//Exercice 3
	{
		name: "blanks_debut_gamme3",
		title: "Remplissez le texte à trous",
		image: "robot-musicien-portee-3.png",
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['Mi', 'mi']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['Re', 'Ré', 're', 'ré']
			},
		],	
		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître ces notes.",
		image: "robot-musicien-bebe.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.blanks_debut_gamme3,
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait répondre Mi & Ré.",
		image: "robot-musicien-bebe-etonne.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && !answers.blanks_debut_gamme3,
	},

//Fin du premier mini jeu
	{
		title: "Programmation achevée !",
		message: "Les gammes, les intervalles et les bémols n’ont plus aucun secret pour {{name}}. Vous pouvez lui soumettre une première base de données et il s’en inspirera pour composer un morceau dans le même style.",
		image: "robot-musicien-bebe.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

// Robot devient enfant
	{
		message: "{{name}} a grandi !",
		image: "robot-musicien-enfant.png",
	},
//


	{
		title: "Vous remplissez votre base de données.",
		message: "João Felipe, un doctorant à l’INRS, a travaillé à partir d’une bibliothèque de 14.000 morceaux de musique irlandaise traditionnelle. Vous soumettez cette base de données en libre accès à {{name}}.",
		image: "experts-musicien-felipe.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Voici le résultat obtenu par João Felipe...",
		message: "«Quand j’ai commencé, la machine ne savait pas terminer un morceau harmonieusement. J’avais mal formaté mon set de données.»",
		music: {
			controls: true,
			src: "robot-musicien-felipe.mp3",
		},

		image: "experts-musicien-felipe.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",

	},	
   
	{
		title: "Un deuxième round d’entraînement s’impose.",
		message: "",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

//
// MINI-JEU TEST MULTIPLE
//

// Test 1/2
	{
		name: "choix_reconnaitre_1",
		message: "Sélectionnez le début de la Marche Turque de W.A. Mozart.",
		choices: [
			{
				"value": " ",
				"image": "robot-musicien-reconnaitre-1a.jpg",
				"points": 1,
			},
			{
				"value": "   ",
				"image": "robot-musicien-reconnaitre-1b.jpg",
				"points": 0,
			},
		],

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître le début d'une partition.",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.choix_reconnaitre_1 === " ",
	},

	{
		title: "Mauvaise réponse !",
		message: "La première image était la bonne. Parce que bla bla",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.choix_reconnaitre_1 !== " ",
	},

// Test 2/2
	{
		name: "choix_reconnaitre_2",
		message: "Sélectionnez la fin du morceau.",
		choices: [
			{
				"value": " ",
				"image": "robot-musicien-reconnaitre-2a.jpg",
				"points": 1,
			},
			{
				"value": "   ",
				"image": "robot-musicien-reconnaitre-2b.jpg",
				"points": 0,
			},
		],

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître la fin d'une partition.",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.choix_reconnaitre_1 === " ",
	},

	{
		title: "Mauvaise réponse !",
		message: "La première image était la bonne. Parce que bla bla",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.choix_reconnaitre_1 !== " ",
	},

	//TODO COMPTE BONNES MAUVAISES REPONSES
	{
		title: "Au moins 6 bonnes réponses sur 8 !",
		message: "Bravo, vous avez réussi l’étape de labellisation des symboles musicaux.",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Moins de 6 bonnes réponses sur 8",
		message: "Vos données ont besoin d’être mieux labellisées, vous avez fait appel à un.e musicologue qui vous a aidé.",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},
	//TODO COMPTE BONNES MAUVAISES REPONSES

	{
		message: "{{name}} peut maintenant reconnaître le début et la fin d’une partition, et composer des morceaux qui auront une structure !",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		message: "Comme François Pachet lorsqu’il travaillait sur le programme FlowMachines avec Sony, vous constituez une base de données avec les œuvres de J.S. Bach.",
		image: "experts-musicien-pachet.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Voici le résultat obtenu par FlowMachines",
		message: "Plutôt pas mal, non? Mais il n’y a que quatre portées de notes et d’accords. Il vous faudrait l’arranger pour qu’elle puisse être interprétée par un orchestre entier.",
		music: {
			controls: true,
			src: "robot-musicien-bach.mp3",
		},
		image: "robot-musicien-bach.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

// Robot devient ado
	{
		message: "{{name}} a grandi et abandonne la musique classique. Vous constituez une troisième base de données. Vous fournissez à {{name}} des centaines de partitions rock, de Led Zeppelin à Queen, en passant par les Beatles.",
		image: "robot-musicien-ado.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},
//

	{
		message: "Avec d’aussi bonnes références, vous êtes plutôt sûr d’obtenir un super morceau.",
		image: "robot-musicien-ado.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},


	{
		title: "Voici le résultat obtenu par François Pachet",
		message: "et par son équipe après quelques arrangements.",
		music: {
			controls: true,
			src: "robot-musicien-beatles.mp3",
		},
		image: "robot-musicien-beatles.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

		{
		message: "Comme François Pachet l’expliquait sur France Culture, la partition produite par l’algorithme a besoin d’être réarrangée et retravaillée. Pour l’album Hello World, les compositeurs et artistes ont activement participé à la finalisation des chansons.",
		image: "experts-musicien-pachet.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},


///////////////////////////////
// BRANCHES MERGING TOGETHER //
///////////////////////////////

	{
		message: "Dans la composition à partir d’un algorithme, ce qui intéresse les musiciens, ce sont surtout les «erreurs» de la machine. Les petits écarts qui rendront un morceau original, voire complètement nouveau.",
		image: "robot-musicien-ado.png",
	},

// Robot devient adulte
	{
		message: "{{name}} a grandi !",
		image: "robot-musicien-adulte.png",
	},
//

	{
		title: "Vous avez réussi à composer un album entier !",
		message: "Mais {{name}} ne peut pas générer de pochette d'album. Heureusement, Il existe un algorithme de Google qui permet de générer une image à partir d’une base de donnée et d’une inspiration que vous lui soumettez.",
		image: "robot-musicien-adulte.png",
	},

	{
		title: "Vous utilisez Google Deep Dream pour créer la pochette de votre album",
		message: "Vous pouvez lui soumettre une image dont l’algorithme va s’inspirer.",
		image: "robot-musicien-adulte.png",
	},

// Génération de pochette
	{
		name: "choix_pochettealbum",
		message: "Vous choisissez",
		choices: [
			{
				"value": " ",
				"image": "robot-musicien-pochette1.jpg",
				"points": 1,
			},
			{
				"value": "  ",
				"image": "robot-musicien-pochette2.jpg",
				"points": 1,
			},
			{
				"value": "   ",
				"image": "robot-musicien-pochette3.jpg",
				"points": 1,
			},
		],
	},

	
// Montrer la bonne pochette
	{
		title: "Et voilà le résultat !",
		image: "robot-musicien-pochette1-dream.jpg",

		when: answers => answers.choix_pochettealbum === " ",
	},
		
	{
		title: "Et voilà le résultat !",
		image: "robot-musicien-pochette2-dream.jpg",

		when: answers => answers.choix_pochettealbum === "  ",
	},

		{
		title: "Et voilà le résultat !",
		image: "robot-musicien-pochette3-dream.jpg",

		when: answers => answers.choix_pochettealbum === "   ",
	},

]
