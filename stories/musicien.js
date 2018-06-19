
const musicien = [
	{
		title: "Ce parcours utilise de la musique",
		message: "Nous vous conseillons d'activer le son ou d'utiliser des écouteurs.",
		image: "element-son.png",
	},

	{
		title: "Vous êtes un musicien et plus rien ne vous inspire...",
		message: "Pas même votre dernière rupture amoureuse. C’est le syndrome de la page blanche. Vous traînez sur Spotify en quête d’inspiration et tombez par hasard sur la chanson «Hello Shadow».",
		image: "robot-musicien-dodo.png",
	},


	{
		title: "Vous écoutez : «Hello Shadow»",
		message: "Une chanson composée à l'aide d'une intelligence artificielle.",
		image: "experts-musicien-spotify.png",
		music: {
			controls: true,
			src: "robot-musicien-spotify.mp3",
		}
	},

	{
		title: "Une chanson composée à l'aide d'une intelligence artificielle ?",
		message: "Elle ressemble pourtant au style de Stromae. Vous faites une petite recherche sur Internet...",
		image: "illust-musicien-stromae.jpg",
	},

	{
		title: "Vous décidez de créer une musique avec l'aide d'une IA.",
		message: "Vous contactez Robin Meier, un musicien qui utilise des programmes informatiques pour composer. Pour la musique du spectacle «La Fabrique des Monstres», il a utilisé un algorithme en accès libre sur Internet.",
		image: "experts-musicien-meier.jpg",
	},

	{
		title: "Un algo-rythme ?",
		message: "Non, rien à voir avec le tempo. Un algorithme ce sont les instructions qui commandent un programme informatique.",
		image: "robot-musicien-guitare-anime.gif",
	},

	{
		message: "C’est un peu comme une recette de cuisine. Le plat, c’est le morceau, les ingrédients, vos influences. Sur les conseils de Robin Meier, vous téléchargez l’algorithme.",
		image: "robot-musicien-dodo.png",
	},

	{
		message: "L’algorithme, c’est l’embryon de l’intelligence artificielle, son cerveau. Comme celui d’un bébé à la naissance, il est fonctionnel, mais pas encore prêt à interagir de manière autonome avec son environnement.",
		image: "robot-musicien-naissance.gif",
	},

	{
		message: "Ce ne sont que quelques lignes de codes mais vous vous prenez déjà d’affection pour ce petit compositeur en herbe. Vous décidez de lui donner un prénom.",
		image: "robot-musicien-bebe.png",
	},

	{
		name: "name",
		title: "Vous l’appelez...",
		choices: [
			{
				"value": "Johnny Hallgorithme",
				"description": "parce vous êtes plutôt rock and roll",
				"points": 0
			},
			{
				"value": "Nina Sibot",
				"description": "parce que vous avez la soul dans le sang",
				"points": 0
			},
			{
				"value": "YuMi",
				"description": "en hommage au robot qui a dirigé le chanteur Andrea Bocelli et son orchestre",
				"points": 0
			}
		]
	},

		{
		message: "Bel hommage ! Johnny Hallyday a été un symbole pour toute une génération. Johnny Hallgorithme pourrait bien être celui de la suivante.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Johnny Hallgorithme"
	},	

			{
		message: "Mais attention, dans le secteur des musiques actuelles, les femmes ne représentent que moins de 10% des auteurs-compositeurs inscrits à la SACEM.",
		image: "robot-musicien-bebe-etonne.png",
		when: answers => answers.name === "Johnny Hallgorithme"
	},

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Le nom que vous lui avez choisi, lui, l’est. Il définit donc la manière dont le robot sera perçu par les utilisateurs et le public.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Johnny Hallgorithme"
	},	

	{
		message: "Il faudra éduquer Johhny Hallgorithme pour qu’il ne reproduise pas les schémas actuels qui font que les femmes sont sous représentées dans la musique, faute de modèle à qui elles peuvent s’identifier.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Johnny Hallgorithme"
	},	

		{
		message: "Bel hommage ! Nina Simone est l’une des voix emblématiques de la soul mais aussi du mouvement des droits civiques en Amérique. Mais son timbre a souvent été comparé... à celui d’un homme.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Nina Sibot"
	},	

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Le nom que vous lui avez choisi, lui, l’est. Il définit donc la manière dont le robot sera perçu par les utilisateurs et le public.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Nina Sibot"
	},	

	{
		message: "Dans la musique comme dans la technologie, les femmes représentent moins de 10% des effectifs. Donner un nom féminin à votre IA permettra peut-être de créer un modèle auquel les jeunes compositrices pourront s’identifier.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "Nina Sibot"
	},	

		{
		message: "YuMi n’est pas un chef d’orchestre comme les autres : il n’a que deux bras et pas de tête. Mais alors... on pourrait aussi dire que Yumi n’est pas une cheffe d’orchestre comme les autres : elle n’a que deux bras et pas de tête.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "YuMi"
	},	

	{
		message: "«On veut donner à ces robots des caractéristiques humaines alors que les IA, c’est loin de n’être que ça !», explique Dipty Chander, présidente de l’association E-mma qui promeut la mixité dans le domaine du numérique.",
		image: "experts-dipty.jpg",
		when: answers => answers.name === "YuMi"
	},	

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Votre robot, contrairement à un bébé, n’est pas genré. Il est donc important de choisir un prénom qui ne l’est pas non plus.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "YuMi"
	},	
	{
		message: "Aujourd’hui, les femmes représentent 6% des chefs d’orchestre. Choisir un nom neutre, c’est montrer que la fibre artistique n’a pas de sexe.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.name === "YuMi"
	},	


	{
		title: "Vous décidez de tester l'algorithme...",
		message: "Il vous suffit de rentrer la durée du morceau que {{name}} doit composer. Vous tentez : 4 minutes et 33 secondes.",
		image: "robot-musicien-guitare-anime.gif",
	},


	{
		title: "Quelle déception...",
		message: "Silence pendant 4 minutes et 33 secondes. Plutôt intéressant comme concept, mais vous risquez d’être accusé de plagiat puisque le compositeur de musique expérimentale John Cage l’a déjà fait avant vous. Le titre de son morceau ? 4′33″.",
		image: "robot-musicien-bebe-etonne.png",
	},

	{
		message: "«John Cage, c’est une grande inspiration pour moi, vous explique Robin Meier. Ce qui m’intéresse avec l’intelligence artificielle, c’est l’aléatoire, et John Cage a beaucoup utilisé ce concept dans sa musique.»",
		image: "experts-musicien-meier.jpg",
	},

	{
		title: "Cela ne résout pas votre problème...",
		message: "Vous écoutez les conseils de François Pachet, qui dirige le Creator Technology Research Lab de Spotify. «La première chose qu’on fait, c’est donner de la musique dont on veut s’inspirer au système», a-t-il dit sur France Culture.",
		image: "experts-musicien-pachet.jpg",
	},

	{
		title: "Une étape indispensable :",
		message: "nourrir la machine de vos influences. «Pour mes projets, je pars avec une base de données d’au moins 4h de son», précise Robin Meier. D'autres, comme François Pachet, n'utilisent pas directement le son mais les partitions des morceaux pour que l'IA les analyse.",
		image: "robot-musicien-guitare-anime.gif",
	},

	{
		name: "choice_mode_composition",
		message: "Quelle méthode de composition avec algorithme choisir ?",
		choices: [
			{
				"value": "Celle de François Pachet",
				"description": "Fournir à l’algorithme des partitions et des textes. Il pourra créer un nouveau tube planétaire dans le style que vous lui aurez imposé.",
				"points": 0,
			},
			{
				"value": "Celle de Robin Meier",
				"description": "Fournir directement des musiques et bruits en tous genres à l’algorithme. Il pourra analyser les formes d’ondes pour créer des sons inédits.",
				"points": 0,
			},
		]
	},


////////////////////////////
///CHEMIN FRANCOIS PACHET///
////////////////////////////

	{
		title: "Apprendre les bases de la formation musicale",
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
		contextPoints: "blanks_minijeu_notes",
		points: 1,
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['Re', 'Ré', 're', 'ré', 'Re ', 'Ré ', 're ', 'ré ', 'RE', 'RE ']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['Mi', 'mi', 'Mi ', 'mi ', 'MI', 'MI ']
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
		contextPoints: "blanks_minijeu_notes",
		points: 1,
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['La', 'la', 'La ', 'la ', 'LA', 'LA ']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['La', 'la', 'La ', 'la ', 'LA', 'LA ']
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
		message: "C'était deux fois la même note ! Il fallait répondre La & La.",
		image: "robot-musicien-bebe-etonne.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet" && !answers.blanks_debut_gamme2,
	},

//Exercice 3
	{
		name: "blanks_debut_gamme3",
		title: "Remplissez le texte à trous",
		image: "robot-musicien-portee-3.png",
		contextPoints: "blanks_minijeu_notes",
		points: 1,
		blanks: [
			{
				"value": "Quelles sont les notes manquantes ?"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['Mi', 'mi', 'Mi ', 'mi ']
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['Re', 'Ré', 're', 'ré', 'Re ', 'Ré ', 're ', 'ré ', 'RE', 'RE ']
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
//Succès
	{
		title: "Programmation des notes achevée !",
		message: "Les gammes, les accords et les bémols n’ont plus aucun secret pour {{name}}. Vous pouvez lui soumettre une première base de données et l'IA s’en inspirera pour composer un morceau dans le même style.",
		image: "robot-musicien-bebe.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.contextPoints.blanks_minijeu_notes >= 1,
	},
//Echec
	{
		title: "Un petit retour au Conservatoire s'impose...",
		message: "Vous faites appel à un spécialiste pour achever la reconnaissance des notes par {{name}}.",
		image: "robot-musicien-bebe-etonne.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && !answers.contextPoints.blanks_minijeu_notes >= 1,
	},

// Robot devient enfant
	{
		title: "Level up !",
		message: "{{name}} a grandi ! C’est en écoutant les adultes qu’un bébé apprend à parler. Une fois que l’intelligence artificielle dispose d’une première base de donnée, elle peut commencer à apprendre d’elle-même, comme un enfant qui entre à l’école.",
		image: "robot-musicien-bebe-enfant.gif",
		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},
//


	{
		title: "Vous créez maintenant une base de données.",
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
		message: "Vous devez apprendre à {{name}} à reconnaître le début et la fin d'un morceau. Sans la structure, les notes ne servent pas à grand chose.",
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
		contextPoints: "blanks_minijeu_notes",
		choices: [
			{
				"value": "1.",
				"image": "robot-musicien-reconnaitre-1a.jpg",
				"points": 1,
			},
			{
				"value": "2.",
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

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.choix_reconnaitre_1 == "1.",
	},

	{
		title: "Mauvaise réponse !",
		message: "La première image était la bonne. C'était l'indication chiffrée de rythme au début d'une partition qui vous l'indiquait.",
		image: "robot-musicien-enfant-etonne.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.choix_reconnaitre_1 == "2.",
	},

// Test 2/2
	{
		name: "choix_reconnaitre_2",
		message: "Sélectionnez la fin du morceau.",
		contextPoints: "blanks_minijeu_notes",
		choices: [
			{
				"value": "1.",
				"image": "robot-musicien-reconnaitre-2a.jpg",
				"points": 0,
			},
			{
				"value": "2.",
				"image": "robot-musicien-reconnaitre-2b.jpg",
				"points": 1,
			},
		],

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Bonne réponse !",
		message: "Vous avez appris à {{name}} à reconnaître la fin d'une partition.",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.choix_reconnaitre_2 == "2.",
	},

	{
		title: "Mauvaise réponse !",
		message: "La seconde image était la bonne. La double barre signifie la fin d'un morceau. Les deux points indiquent une reprise du morceau.",
		image: "robot-musicien-enfant-etonne.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.choix_reconnaitre_2 == "1.",
	},

// MINI JEU NOTES + PARTITIONS COMPTE SCORE SUR 5
// SUCCES
	{
		title: "Formation musicale achevée",
		message: "Vous avez un score de {{ contextPoints.blanks_minijeu_notes }} sur 5. Vous avez réussi l’étape de labellisation des symboles musicaux. Quelle efficacité !",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && answers.contextPoints.blanks_minijeu_notes >= 3,
	},
// MINI JEU NOTES + PARTITIONS COMPTE SCORE SUR 5
// ECHEC
	{
		title: "Formation musicale achevée",
		message: "Vous n’avez qu’un score de {{ contextPoints.blanks_minijeu_notes }} sur 5. Vos données ont besoin d’être mieux labellisées. Heureusement, vous avez fait appel à un musicologue pour vous aider.",
		image: "robot-musicien-enfant-etonne.png",

		when: answers => answers.choice_mode_composition == "Celle de François Pachet" && !answers.contextPoints.blanks_minijeu_notes >= 3,
	},

	{
		message: "{{name}} peut maintenant reconnaître le début et la fin d’une partition, et composer des morceaux qui auront une structure !",
		image: "robot-musicien-enfant.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		message: "Comme François Pachet et son équipe lorsqu’ils travaillaient sur le programme FlowMachines avec Sony, vous constituez une base de données avec les œuvres du compositeur baroque Jean-Sébastien Bach.",
		image: "experts-musicien-bach.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Voici le résultat obtenu par FlowMachines",
		message: "Plutôt pas mal, non? Mais il vous faudrait l’arranger pour qu’elle puisse être interprétée par un orchestre.",
		music: {
			controls: true,
			src: "robot-musicien-bach.mp3",
		},
		image: "element-musique.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

// Robot devient ado
	{
		title: "Level up !",
		message: "{{name}} a grandi ! Votre IA dispose d’assez de données pour pouvoir analyser les informations que vous lui soumettez et adapter son comportement à toutes les situations. Mais comme un adolescent, elle a besoin de tester ses limites. Et elle abandonne la musique classique...",
		image: "robot-musicien-enfant-ado.gif",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},
//

	{
		title: "Vous constituez une troisième base de données",
		message: "Vous fournissez à {{name}} des centaines de partitions rock, de Led Zeppelin à Queen, en passant par les Beatles. Avec d’aussi bonnes références, vous êtes plutôt sûr d’obtenir un super morceau.",
		image: "robot-musicien-ado.png",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		title: "Voici le résultat obtenu par François Pachet",
		message: "et par son équipe lorsqu'ils ont demandé à l'IA de composer un morceau dans le style des Beatles. La partition a été arrangée avant d’être interprétée.",
		music: {
			controls: true,
			src: "robot-musicien-beatles.mp3",
		},
		image: "robot-musicien-beatles.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},

	{
		message: "Comme François Pachet l’expliquait sur France Culture, la partition produite par l’algorithme a besoin d’être réarrangée et retravaillée. Pour l’album «Hello World», les compositeurs et artistes ont activement participé à la finalisation des chansons.",
		image: "experts-musicien-pachet.jpg",

		when: answers => answers.choice_mode_composition === "Celle de François Pachet",
	},


////////////////////////////
///CHEMIN ROBIN MEIER    ///
////////////////////////////

	{
		title: "Analyse des ondes sonores",
		message: "Pour que {{name}} puisse manier des sons à sa guise, il faut d'abord lui apprendre à analyser les ondes sonores. Cela passe par un processus complexe de numérisation de ces ondes.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "Il faut d’abord que {{name}} apprenne des sons existants. En leur attribuant un label, on pourra ensuite mélanger plusieurs ondes pour créer de nouveaux sons.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "Commençons par apprendre à {{name}} à reconnaître le son des instruments.",
		image: "experts-musicien-instruments.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

////////////////////////////////
//JEU RECONNAITRE INSTRUMENTS //
////////////////////////////////

//Jeu instruments 1/3
	{
		name: "choix_nominstrument1",
		title: "Quel instrument produit ce son ?",
		contextPoints: "minijeu_instruments",
		music: {
			controls: true,
			src: "robot-musicien-son-clarinette.mp3",
		},
		choices: [
			{
				"value": "Une flûte",
				"description": "",
				"points": 0,
			},
			{
				"value": "Un hautbois",
				"description": "",
				"points": 0,
			},
			{
				"value": "Une clarinette",
				"description": "",
				"points": 1,
			}
		],
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Bonne ou mauvaise réponse jeu instruments 1
	{
		title: "Bravo !",
		message: "C’était bien le son d'une clarinette.",
		image: "experts-musicien-instrument-clarinette.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument1 === "Une clarinette",
	},
	{
		title: "Mauvaise réponse !",
		message: "C’était le son d'une clarinette...",
		image: "experts-musicien-instrument-clarinette.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument1 !== "Une clarinette",
	},

// Jeu instruments 2/3
	{
		name: "choix_nominstrument2",
		title: "Quel instrument produit ce son ?",
		contextPoints: "minijeu_instruments",
		music: {
			controls: true,
			src: "robot-musicien-son-harpe.mp3",
		},
		choices: [
			{
				"value": "Une guitare",
				"description": "",
				"points": 0,
			},
			{
				"value": "Une harpe",
				"description": "",
				"points": 1,
			},
			{
				"value": "Un piano",
				"description": "",
				"points": 0,
			}
		],
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Bonne ou mauvaise réponse jeu instruments 2
	{
		title: "Bravo !",
		message: "C’était bien le son d'une harpe.",
		image: "experts-musicien-instrument-harpe.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument2 === "Une harpe",
	},
	{
		title: "Mauvaise réponse !",
		message: "C’était le son d'une harpe...",
		image: "experts-musicien-instrument-harpe.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument2 !== "Une harpe",
	},

// Jeu instruments 3/3
	{
		name: "choix_nominstrument3",
		title: "Quel instrument produit ce son ?",
		contextPoints: "minijeu_instruments",
		music: {
			controls: true,
			src: "robot-musicien-son-cor.mp3",
		},
		choices: [
			{
				"value": "Une trompette",
				"description": "",
				"points": 0,
			},
			{
				"value": "Un cor",
				"description": "",
				"points": 1,
			},
			{
				"value": "Un trombone",
				"description": "",
				"points": 0,
			},
		],
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Bonne ou mauvaise réponse jeu instruments 3
	{
		title: "Bravo !",
		message: "C’était bien le son d'un cor.",
		image: "experts-musicien-instrument-cor.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument3 === "Un cor",
	},
	{
		title: "Mauvaise réponse !",
		message: "C’était le son d'un cor...",
		image: "experts-musicien-instrument-cor.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier" && answers.choix_nominstrument3 !== "Un cor",
	},

// CONCLUSION DU JEU INSTRUMENTS
// Bonne réponse
	{	
		title: "C’est un succès !",
		message: "Avec un score de {{contextPoints.minijeu_instruments}} sur 3, vous avez pu vous constituer une bibliothèque de sons que vous allez pouvoir mélanger pour créer de nouveaux instruments.",
		image: "robot-musicien-bebe.png",
		when: answers => answers.choice_mode_composition == "Celle de Robin Meier" && answers.contextPoints.minijeu_instruments >= 2,
	},
// Mauvaise réponse
	{	
		title: "C’est plutôt un échec...",
		message: "Avec un score de {{contextPoints.minijeu_instruments}} sur 3, il va vous falloir passer un peu plus de temps sur la labellisation des instruments pour que votre bibliothèque soit complète. Ce n'est qu'après que vous pourrez créer de nouveaux sons en mélangeant des enregistrements existants.",
		image: "robot-musicien-bebe-etonne.png",
		when: answers => answers.choice_mode_composition == "Celle de Robin Meier" && answers.contextPoints.minijeu_instruments < 2,
	},

	{	
		title: "Google peut vous aider avec un logiciel : AI Experiments.",
		message: "Il permet de mixer le son de deux instruments. Le code est disponible en open source. Vous décidez de l’utiliser.",
		image: "experts-musicien-google-experiments.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{	
		title: "On écoute le résultat ?",
		message: "Voici un mix entre une harpe et une clarinette.",
		music: {
			controls: true,
			src: "robot-musicien-son-google.mp3",
		},
		image: "experts-musicien-google-experiments.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

// Robot devient enfant
	{
		title: "Level up !",
		message: "{{name}} a grandi ! C’est en écoutant les adultes qu’un bébé apprend à parler. Une fois que l’IA dispose d’une première base de données, elle peut commencer à apprendre d’elle-même, comme un enfant qui entre à l’école.",
		image: "robot-musicien-bebe-enfant.gif",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
//

	{
		title: "Vous écoutez : «Pierre et le Loup» de Prokofiev",
		message: "Dans ce morceau, chaque instrument est associé à un animal. De nombreux compositeurs ont essayé de retranscrire en musique toutes sortes de sons : les animaux chez Prokofiev, l'eau chez Debussy ou Vivaldi.",
		music: {
			controls: true,
			src: "robot-musicien-prokofiev.mp3",
		},
		image: "experts-musicien-prokofiev.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

///////////////////////////
// JEU TEXTE A TROUS SON //
///////////////////////////

	{
		title: "Reconnaître des sons",
		message: "Mais Prokofiev n'avait pas d'algorithme à sa disposition. Et si on apprenait à {{name}} à reconnaître toutes sortes de sons pour les mélanger à des sonorités instrumentales ?",
		image: "robot-musicien-guitare-anime.gif",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

// Jeu 1 son
	{
		name: "blanks_sons_1",
		title: "Entrez le nom du son entendu",
		music: {
			controls: true,
			src: "robot-musicien-son-chat.mp3",
		},
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
		points: 1,
		blanks: [
			{
				"value": "Il s'agit du son produit par un"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['chat', 'Chat', 'chat ', 'Chat ', 'CHAT', 'CHAT '],
			},
		],
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Bonne réponse
	{	
		title: "Bravo !",
		message: "C’était bien le son d'un chat.",
		image: "experts-musicien-son-chat.jpg",
		when: answers => answers.blanks_sons_1 && answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Mauvaise réponse
	{	
		title: "Faux !",
		message: "C’était le son d'un chat.",
		image: "experts-musicien-son-chat.jpg",
		when: answers => !answers.blanks_sons_1 && answers.choice_mode_composition === "Celle de Robin Meier",
	},

// Jeu 2 son
	{
		name: "blanks_sons_2",
		title: "Entrez le nom du son entendu",
		music: {
			controls: true,
			src: "robot-musicien-son-aspirateur.mp3",
		},
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
		points: 1,
		blanks: [
			{
				"value": "Il s'agit du son produit par un"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['aspirateur', 'Aspirateur', 'aspirateur ', 'Aspirateur ', 'ASPIRATEUR', 'ASPIRATEUR '],
			},
		],
	},
// Bonne réponse
	{	
		title: "Bravo !",
		message: "C’était bien le son d'un aspirateur.",
		image: "experts-musicien-son-aspirateur.jpg",
		when: answers => answers.blanks_sons_2 && answers.choice_mode_composition === "Celle de Robin Meier",
	},
// Mauvaise réponse
	{	
		title: "Faux !",
		message: "C’était le son d'un aspirateur.",
		image: "experts-musicien-son-aspirateur.jpg",
		when: answers => !answers.blanks_sons_2 && answers.choice_mode_composition === "Celle de Robin Meier",
	},

// COUPE POUR EGALISATION SCORE.
// // Jeu 3 son
// 	{
// 		name: "blanks_sons_3",
// 		title: "Entrez le nom du son entendu",
// 		music: {
// 			controls: true,
// 			src: "robot-musicien-son-pluie.mp3",
// 		},
// 		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
//		points: 1,
// 		blanks: [
// 			{
// 				"value": "Il s'agit du son produit par la"
// 			},
// 			{
// 				"value": "word_1",
// 				"type": "input",
// 				"answers": ['pluie', 'Pluie', 'pluie ', 'Pluie ', 'PLUIE', 'PLUIE '],
// 			},
// 		],
// //		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
// 	},
// // Bonne réponse
// 	{	
// 		title: "Bravo !",
// 		message: "C’était bien le son de la pluie.",
// 		image: "experts-musicien-son-pluie.jpg",
// 		when: answers => answers.blanks_sons_3 && answers.choice_mode_composition === "Celle de Robin Meier",
// 	},
// // Mauvaise réponse
// 	{	
// 		title: "Faux !",
// 		message: "C’était le son de la pluie.",
// 		image: "experts-musicien-son-pluie.jpg",
// 		when: answers => !answers.blanks_sons_3 && answers.choice_mode_composition === "Celle de Robin Meier",
// 	},

///////////////
// FIN DU JEU A TROUS
///////////////

// Robot devient ado
	{
		title: "Level up !",
		message: "{{name}} a grandi ! Votre IA dispose d’assez de données pour pouvoir analyser les informations que vous lui soumettez et adapter son comportement à toutes les situations. Mais comme un adolescent, elle a besoin de tester ses limites.",
		image: "robot-musicien-enfant-ado.gif",

		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
//

	{
		title: "Vous utilisez AI Experiments, le logiciel de Google, à nouveau",
		message: "Voici le mélange du son d’un chat et celui d’une harpe. Plutôt prometteur, non ?",
		music: {
			controls: true,
			src: "robot-musicien-son-google-mix.mp3",
		},
		image: "experts-musicien-google-experiments.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "En utilisant cette technique, la constitution d'une base de données est essentielle pour avoir une idée du résultat que {{name}} va produire.",
		image: "experts-musicien-google-experiments.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "Pour son projet «La Fabrique des Monstres», Robin Meier a mixé l’intégrale d’une chanteuse soprano, des livres audio pour la voix parlée, et des bandes-son de films pour les bruitages.",
		image: "experts-musicien-meier.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		title: "Et voici le résultat...",
		message: "Vous écoutez «As the lights fade out», un morceau composé avec une intelligence artificielle et réarrangé par Robin Meier et Daniele Ghisi.",
		music: {
			controls: true,
			src: "robot-musicien-meier.mp3",
		},
		image: "experts-musicien-meier.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		title: "Avec cette technique, vous pouvez choisir les sons que vous voulez mettre en valeur",
		message: "En s’inspirant des formes d’ondes, {{name}} n’a besoin que d’une fraction de seconde de son pour se lancer.",
		image: "robot-musicien-ado.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
	{
		message: "L’algorithme prédira ensuite la courbe de l’onde en fonction de ce qu’il aura appris avec la base de données.",
		image: "robot-musicien-ado.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},
	

	{
		message: "Cette technique est beaucoup plus lente que lorsque la machine apprend à partir de partitions puisque les ondes sonores sont plus longues à analyser.",
		image: "robot-musicien-guitare-anime.gif",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		title: "L'analyse peut prendre des semaines...",
		message: "en fonction de la taille de la base de données. C’est aussi une technique dont le résultat est très aléatoire et peu modifiable.",
		image: "robot-musicien-ado.png",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "Faisant référence à son œuvre, Robin Meier précise que «les résultats ont été légèrement montés. Principalement des enchaînements de passages qui nous plaisaient bien ainsi que des superpositions».",
		image: "experts-musicien-meier.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
	},

	{
		message: "Il ajoute : «On peut imaginer des choses, on peut avoir une intuition mais le résultat n’est pas totalement prévisible. On essaie des choses, il y a un aller-retour, on est dans l’expérimentation plus que dans la programmation.»",
		image: "experts-musicien-meier.jpg",
		when: answers => answers.choice_mode_composition === "Celle de Robin Meier",
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
		title: "Level up !",
		message: "{{name}} a grandi ! Votre IA est fonctionnelle. Pendant la phase d’apprentissage, nous avons mis de côté les questions éthiques. Mais avec l’autonomie vient aussi les responsabilités morales auxquelles les jeunes adultes sont confrontés.",
		image: "robot-musicien-ado-adulte.gif",
	},
//

	{
		title: "Vous avez réussi à composer un album entier !",
		message: "Il vous faut maintenant trouver une image pour la pochette. Il existe un algorithme de Google, Deep Dream, qui permet de générer une image à partir d’une base de données et d’une inspiration que vous lui soumettez.",
		image: "robot-musicien-adulte.png",
	},

	{
		title: "Deep Dream utilise l'intelligence artificielle.",
		message: "Cela vous permettra de créer la pochette de votre album. Vous pouvez soumettre une image dont l’algorithme va s’inspirer.",
		image: "robot-musicien-adulte.png",
	},

// Génération de pochette
	{
		name: "choix_pochettealbum",
		title: "Vous choisissez",
		choices: [
			{
				"value": " ",
				"image": "robot-musicien-pochette1.jpg",
				"points": 0,
			},
			{
				"value": "  ",
				"image": "robot-musicien-pochette2.jpg",
				"points": 0,
			},
			{
				"value": "   ",
				"image": "robot-musicien-pochette3.jpg",
				"points": 0,
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

	{
		message: "Il est maintenant temps de lister les noms que vous allez mentionner dans les crédits de l’album.",
		image: "robot-musicien-adulte.png",
	},

	{
		name: "musicien_donnercredits",
		title: "Que décidez-vous ?",
		choices: [
			{
				"value": "Créditer l'algorithme",
				"description": "à la manière de François Pachet et son équipe sur l’album «Hello Shadow»",
				"points": 0
			},
			{
				"value": "Ne pas créditer l'algorithme",
				"description": "mais uniquement l’ensemble des personnes qui ont travaillé avec vous sur cet album. L'algorithme n'a été qu'un outil",
				"points": 0
			}
			]
	},

	{
		title: "La SACEM n'a pour l'instant pas pris position",
		message: "sur les questions de droits d’auteur liées à la création avec l’intelligence artificielle. Pour le moment, le détenteur des droits ne peut être qu’une personne physique. Mais ce n’est pas pour autant que l’algorithme ne doit pas être reconnu dans le processus de création.",
		image: "experts-musicien-sacem.jpg",
	},	

	{
		message: "Sans compter que le label «intelligence artificielle» attise souvent la curiosité des amateurs de musique.",
		image: "robot-musicien-adulte.png",
	},	

// Bon album: montrer la bonne pochette
	{
		title: "Votre album remporte un succès immédiat !",
		message: "Plusieurs producteurs vous contactent. Votre algorithme permettrait en effet de réduire considérablement les coûts de production d’un morceau.",
		image: "robot-musicien-pochette1-dream.jpg",

		when: answers => answers.choix_pochettealbum === " ",
	},
		
	{
		title: "Votre album remporte un succès immédiat !",
		message: "Plusieurs producteurs vous contactent. Votre algorithme permettrait en effet de réduire considérablement les coûts de production d’un morceau.",
		image: "robot-musicien-pochette2-dream.jpg",

		when: answers => answers.choix_pochettealbum === "  ",
	},

		{
		title: "Votre album remporte un succès immédiat !",
		message: "Plusieurs producteurs vous contactent. Votre algorithme permettrait en effet de réduire considérablement les coûts de production d’un morceau.",
		image: "robot-musicien-pochette3-dream.jpg",

		when: answers => answers.choix_pochettealbum === "   ",
	},
// Bon album: montrer la bonne pochette


/////////////////////////
//CHOIX RADIO COMPOSITION
/////////////////////////

	{
		name: "musicien_commanderadio",
		title: "Vous recevez une commande d’une radio",
		message: "pour produire 100 chansons à partir des goûts de ses auditeurs.",
		choices: [
			{
				"value": "Vous l’acceptez",
				"description": "",
				"points": 0
			},
			{
				"value": "Vous la refusez",
				"description": "",
				"points": 1
			},
			]
	},


////////////
//CHOIX RADIO COMPOSITION:
//Chemin accepté
////////////

	{
		title: "Avec l’IA, plus besoin d’être musicien pour composer de la musique !",
		message: "Mais cette proposition n’est pas très valorisante pour votre profession : elle part du principe que vous pouvez composer automatiquement.",
		image: "robot-musicien-adulte-etonne.png",
		when: answers => answers.musicien_commanderadio === "Vous l’acceptez",
	},
	{
		message: "«On pourrait très bien alimenter une base de données et faire de la musique au kilomètre pour des supermarchés et des films commerciaux, c’est facile. On pourrait acheter des morceaux pour quelques dollars sans connaître l’algorithme en détail», précise Robin Meier.",
		image: "experts-musicien-meier.jpg",
		when: answers => answers.musicien_commanderadio === "Vous l’acceptez",
	},
	{
		title: "Attention aussi à la contrainte imposée par le producteur",
		message: "Composer de la musique uniquement en fonction des goûts des auditeurs pourrait conduire à une uniformisation des musiques diffusées à la radio.",
		image: "robot-musicien-adulte-etonne.png",
		when: answers => answers.musicien_commanderadio === "Vous l’acceptez",
	},	
	{
		title: "En même temps...",
		message: "La composition avec l’intelligence artificielle ouvrirait un champ infini de possibilités, par exemple pour les vidéastes qui n’ont pas les moyens d’illustrer leurs contenus avec des musiques trop chères.",
		image: "robot-musicien-adulte.png",
		when: answers => answers.musicien_commanderadio === "Vous l’acceptez",
	},	
	{
		title: "Composer 100 chansons de bonne qualité vous semble difficilement réalisable...",
		message: "Si la radio vous presse et que vous manquez de temps, vous ne serez sans doute pas fier de l’intégralité de vos morceaux.",
		image: "robot-musicien-guitare-anime.gif",
		when: answers => answers.musicien_commanderadio === "Vous l’acceptez",
	},			

////////////
//CHOIX RADIO COMPOSITION:
//Chemin refusé
////////////
	{
		title: "Vous refusez.",
		message: "Vous avez choisi de ne pas céder à la tentation et de préserver la réputation de votre profession : la création artistique, c’est sacré.",
		image: "robot-musicien-adulte.png",
		when: answers => answers.musicien_commanderadio === "Vous la refusez",
	},
	{
		message: "«On pourrait très bien alimenter une base de données et faire de la musique au kilomètre pour des supermarchés et des films commerciaux, c’est facile. On pourrait acheter des morceaux pour quelques dollars sans connaître l’algorithme en détail», précise Robin Meier.",
		image: "experts-musicien-meier.jpg",
		when: answers => answers.musicien_commanderadio === "Vous la refusez",
	},
	{
		title: "L'intelligence artificielle est un bon outil",
		message: "Mais ce n'est qu'un moyen de trouver de nouvelles pistes d’exploration. Vous préférez garder le contrôle sur vos créations. ",
		image: "robot-musicien-adulte.png",
		when: answers => answers.musicien_commanderadio === "Vous la refusez",
	},
	{
		title: "Composer 100 chansons de bonne qualité vous semble difficilement réalisable...",
		message: "Si la radio vous presse et que vous manquez de temps, vous ne serez sans doute pas fier de l’intégralité de vos morceaux.",
		image: "robot-musicien-guitare-anime.gif",
		when: answers => answers.musicien_commanderadio === "Vous la refusez",
	},
	{
		message: "Composer de la musique uniquement en fonction des goûts des auditeurs pourrait conduire à une uniformisation des musiques diffusées à la radio. L’intérêt d’écouter une radio est aussi de pouvoir découvrir de nouveaux styles.",
		image: "robot-musicien-adulte.png",
		when: answers => answers.musicien_commanderadio === "Vous la refusez",
	},

////////////
//CONCLUSION
////////////

	{
		title: "Utiliser un algorithme vous permettra de gagner du temps",
		message: "Mais tout comme l’intelligence artificielle n’est pas encore capable d’imiter nos cerveaux, {{name}} est incapable de reproduire le processus de création qui anime un artiste.",
		image: "robot-musicien-adulte.png",
	},

//
// CONCLUSION
// Compte des points
//
	{
		title: "Votre score",
		message: "À la lumière des choix que vous avez effectués, essayons de définir le type d’artiste que vous seriez si vous travailliez avec l’intelligence artificielle.",
		image: "robot-musicien-guitare-anime.gif",
	},

// Victoire
// Compte des points gagnés supérieur ou égal à 4
	{
		title: "Producteur de tubes",
		message: "Bravo, avec {{points}} points sur un total de 6, vous avez répondu juste à la majorité des questions ! Votre algorithme sait repérer la structure d’un morceau ou les sons qui composent les tubes planétaires. Vous seriez un producteur de génie.",
		image: "robot-musicien-gagnant.gif",
		when: answers => answers.points >= 4,
	},

// Défaite
// Compte des points perdus inférieur à 4
	{
		title: "Artiste incompris",
		message: "Avec {{points}} points sur un total de 6, vous n’avez pas su apprendre à l’algorithme à reconnaître les sons, les notes ou la structure d’un morceau : les résultats produits par la machine risquent d’être... originaux. Vous ne composerez pas le prochain tube planétaire, mais votre musique aura l’avantage d’être... différente !",
		image: "robot-musicien-echec.gif",
		when: answers => answers.points < 4,		
	},
 
]

//
//GENERIQUE dans credits.vue
//