
const musicien = [
	{
		title: "Vous êtes un musicien...",
		message: "et plus rien ne vous inspire, pas même votre dernière rupture amoureuse. C’est le syndrome de la page blanche. Vous traînez sur Spotify en quête d’inspiration et tombez par hasard sur l’album Hello World.",
		image: "robot-musicien-bebe.png",
	},
	{
		message: "Pour la suite de ce parcours, nous vous recommandons d'activer le son.",
		image: "robot-musicien-bebe.png",
	},

	{
		title: "Vous écoutez : Hello World",
		message: "Un morceau composé à l'aide d'une intelligence artificielle.",
		music: {
			controls: false,
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


//INPUT PORTEES
//Exercice 1
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
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.blanks_debut_gamme1,
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait répondre Ré & Mi.",
		image: "robot-musicien-enfant-etonne.png",

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
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && answers.blanks_debut_gamme2,
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait répondre Ré & Mi.",
		image: "robot-musicien-enfant-etonne.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && !answers.blanks_debut_gamme2,
	},

]
