
const conducteur = [
	{
		title: "Vous êtes un ingénieur·e automobile",
		message: "Pour la marque Vroumvroum. Depuis toujours, votre rêve est de fabriquer une voiture autonome.",
		image: "robot-conducteur-dodo.png",
	},
	{
		title: "58 000 accidents de voitures ont lieu chaque année",
		message: "Cela fait plus de 3 000 victimes. Vous voulez changer les choses !",
		image: "robot-conducteur-dodo.png",
	},
	{
		title: "93 % des accidents sont causés par une erreur humaine",
		message: "Pour réduire le nombre de morts, il faudrait pouvoir se passer du problème le plus important dans les voitures : l’humain.",
		image: "robot-conducteur-dodo.png",
	},

	{
		title: "Vous lancez le projet «voiture autonome» de Vroumvroum !",
		message: "Vous appelez Erik Coelingh, qui travaille chez Zenuity et fabrique une intelligence artificielle capable de conduire une voiture.",
		image: "experts-conducteur-coelingh.jpg",
	},
	{
		message: "Erik Coelingh vous explique qu’avant de commencer à travailler sur la voiture proprement dite, vous devez fabriquer son «cerveau», l’algorithme. ",
		image: "experts-conducteur-coelingh.jpg",
	},

	{
		title: "Qu'est-ce qu'un algorithme ?",
		message: "Ce sont les instructions qui commandent un programme informatique. C’est comme une recette de cuisine. Le plat, c’est une conduite autonome, les ingrédients c’est le code de la route.",
		image: "robot-conducteur-dodo.png",
	},

	{
		message: "Sur les conseils d’Erik Coelingh, vous commencez à travailler sur votre algorithme. Ce ne sont que quelques lignes de code, mais vous vous prenez déjà d’affection pour ce·tte petit·e conducteur·rice en herbe. Vous décidez de lui donner un prénom.",
		image: "robot-conducteur-bebe.png",
	},	

	{
		name: "name",
		title: "Vous l’appelez...",
		choices: [
			{
				"value": "Botmobile",
				"description": "parce que vous êtes un inconditionnel de BD",
				"points": 1
			},
			{
				"value": "Titine",
				"description": "parce que ça vous rappelle votre première voiture",
				"points": 1
			},
			{
				"value": "Hubert",
				"description": "pour la blague",
				"points": 1
			}
		]
	},


	{
		title: "Vous êtes impatient·e de tester votre nouvelle voiture !",
		message: "Vous tournez la clé et le moteur vrombit. Mais rien ne se passe...",
		image: "robot-conducteur-bebe-etonne.png",

	},	

	{
		message: "Normal, vous dit Erik Coelingh. {{name}} a un algorithme, mais encore faut-il lui donner des données pour l’enrichir et lui permettre de conduire.",
		image: "experts-conducteur-coelingh.jpg",
	},	

	{
		title: "En premier lieu, il faut donner des yeux à la voiture",
		message: "C'est ainsi que {{name}} pourra récupérer les données visuelles qui seront indispensables à la conduite.",
		image: "robot-conducteur-bebe.png",
	},	

	{
		title: "Des caméras et des radars sont installés à tous les angles de la voiture",
		message: "{{name}} doit avoir la vision la plus complète possible, à 360° !",
		image: "robot-conducteur-lidar.jpg",
	},
	{
		title: "La voiture est désormais équipée !",
		message: "{{name}} peut maintenant voir la route, et même mieux que vous ! Seulement, il y a encore un problème à résoudre : {{name}} voit, mais ne sait pas encore reconnaître ce qui est vu.",
		image: "robot-conducteur-bebe.png",
	},
	{
		title: "Impossible de reconnaître un enfant d’un dos d’âne pour l’instant",
		message: "Heureusement, Erik Coelingh a la solution ! Il s’agit du «labelling».",
		image: "experts-conducteur-coelingh.jpg",
	},
	{
		title: "Le «labelling», c'est l'étiquetage",
		message: "C’est l’étape longue et fastidieuse où les ingénieurs doivent étiqueter chaque image à la main pour montrer à l’intelligence artificielle ce qui est à l’image.",
		image: "experts-conducteur-coelingh.jpg",
	},
	{
		message: "Pour qu’une intelligence artificielle apprenne à reconnaître la couleur rouge par elle-même, les ingénieurs ont passé des heures à lui montrer des images rouges, et d’autres bleues.",
		image: "experts-conducteur-coelingh.jpg",
	},

	{
		message: "{{name}} doit maintenant passer elle aussi par cette étape de «labelling». On essaye ?",
		image: "robot-conducteur-bebe.png",
	},

//////////////
// MINI-JEU 1/4
// RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		title: "Est-ce un passage piéton ? (1/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-1.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Est-ce un passage piéton ? (2/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-2.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Est-ce un passage piéton ? (3/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-3.jpg",
		yesno: {}
		//NO
	},
	{
		title: "Est-ce un passage piéton ? (4/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-4.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Est-ce un passage piéton ? (5/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-5.jpg",
		yesno: {}
		//NO
	},
	{
		title: "Est-ce un passage piéton ? (6/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-6.jpg",
		yesno: {}
		//NO
	},
	{
		title: "Est-ce un passage piéton ? (7/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-7.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Est-ce un passage piéton ? (8/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-8.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Est-ce un passage piéton ? (9/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-9.jpg",
		yesno: {}
		//NO
	},
	{
		title: "Est-ce un passage piéton ? (10/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-10.jpg",
		yesno: {}
		//YES
	},								
	{
		title: "Est-ce un passage piéton ? (11/11)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-passage-11.jpg",
		yesno: {}
		//YES
	},	
//////////////
// FIN MINI-JEU 1/4
// RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		title: "Bravo !",
		message: "Vous avez passé la première phase du «labelling».",
		image: "robot-conducteur-bebe.png",
	},

////////////////
// ROBOT ENFANT
////////////////

// Robot devient enfant
	{
		title: "Quoi ?",
		message: "{{name}} a grandi !",
		image: "robot-conducteur-enfant.png",
	},
//

	{
		message: "Maintenant que {{name}} sait reconnaître les passages piétons, vos ingénieurs vont s’occuper de lui apprendre à reconnaître les voitures, les camions, et ainsi de suite.",
		image: "robot-conducteur-enfant.png",
	},
	{
		title: "Vous pouvez procéder à la deuxième phase : la localisation dans l'espace",
		message: "Il ne suffit pas que {{name}} puisse reconnaître les objets, la voiture doit aussi pouvoir les placer dans l’espace.",
		image: "robot-conducteur-enfant.png",
	},

//////////////
// MINI-JEU 2/4
// RECONNAISSANCE route présence piétons
// YES-NO
//////////////
	{
		title: "Des personnes sont-elles sur la route ? (1/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-1.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Des personnes sont-elles sur la route ? (2/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-2.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Des personnes sont-elles sur la route ? (3/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-3.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Des personnes sont-elles sur la route ? (4/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-4.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Des personnes sont-elles sur la route ? (5/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-5.jpg",
		yesno: {}
		//NO
	},
	{
		title: "Des personnes sont-elles sur la route ? (6/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-6.jpg",
		yesno: {}
		//YES
	},
	{
		title: "Des personnes sont-elles sur la route ? (7/7)",
		message: "Score : -",
		largeimage: "robot-conducteur-reconnaitre-route-7.jpg",
		yesno: {}
		//NO
	},
//////////////
// FIN MINI-JEU 2/4
// RECONNAISSANCE route présence piétons
// YES-NO
//////////////

	{
		title: "Bravo !",
		message: "Vous avez passé la seconde phase phase du «labelling». {{name}} sait désormais reconnaître les objets et peut les placer sur une image.",
		image: "robot-conducteur-enfant.png",
	},

//
// QUESTION BASE DE DONNEES
//
	{
		name: "choice_basedonnees",
		title: "Base de données",
		message: "Il est maintenant temps de fournir à {{name}} des données à analyser. Que choisissez-vous ?",
		choices: [
			{
				"value": "Le code de la route",
				"points": 0
			},
			{
				"value": "Les lois de la physique",
				"points": 1
			},
		]
	},

//Si bonne réponse
	{
		title: "Vous faites bien !",
		message: "Il faut avant tout que la voiture apprenne les lois de la physique élémentaire, surtout en ce qui concerne la vitesse. L’apprentissage du code de la route viendra après.",
		image: "robot-conducteur-enfant.png",
		when: answers => answers.choice_basedonnees !== 'Le code de la route',
	},
//Si mauvaise réponse
	{
		title: "Attention !",
		message: "il faut apprendre le code de la route, mais cette étape vient bien après. La voiture doit avant tout connaître les lois de la physique élémentaire, surtout en ce qui concerne la vitesse.",
		image: "robot-conducteur-enfant-etonne.png",
		when: answers => answers.choice_basedonnees === 'Le code de la route',
	},

	{
		title: "Votre voiture comprend maintenant la physique de base",
		message: "Par exemple, si elle va à 100 km/h sur une route sèche, il lui faudra 80 mètres pour s’arrêter complètement.",
		image: "robot-conducteur-enfant.png",
	},
	{
		title: "La physique est importante pour l'intelligence artificielle des voitures",
		message: "Sa compréhension permet d’anticiper la trajectoire des véhicules alentours.",
		image: "robot-conducteur-enfant.png",
	},
	{
		message: "Mettons qu'un camion derrière vous aille trop vite pour pouvoir s’arrêter en cas de freinage d’urgence. {{name}} pourra alors choisir de se déporter.",
		image: "robot-conducteur-enfant.png",
	},

////////////////
// ROBOT ADO
////////////////

// Robot devient ado
	{
		title: "Quoi ?",
		message: "{{name}} a grandi ! La voiture va bientôt pouvoir rouler par elle-même, mais il lui faut encore apprendre de nouvelles données.",
		image: "robot-conducteur-ado.png",
	},
//

	{
		title: "Apprentissage du code de la route",
		message: "Vous aidez {{name}} à reconnaître les panneaux de signalisation routière.",
		image: "robot-conducteur-ado.png",
	},


//////////////
// MINI-JEU 3/4
// RECONNAISSANCE noms panneaux
// Choix
//////////////
	{
		name: "jeu_panneaux1",
		title: "Quel est ce panneau ? (1/10)",
		message: "Score : -",
		image: "robot-conducteur-reconnaitre-panneau-1.jpg",
		choices: [
			{
				"value": "Sens interdit",
				"points": 1
			},
			{
				"value": "Interdit de stationner",
				"points": 0
			},
			{
				"value": "Stop",
				"points": 0
			}		
		]
	},

	{
		name: "jeu_panneaux2",
		title: "Que signifie ce panneau ? (2/10)",
		message: "Score : -",
		image: "robot-conducteur-reconnaitre-panneau-2.jpg",
		choices: [
			{
				"value": "Passage d'animaux domestiques",
				"points": 1
			},
			{
				"value": "Passage à niveau",
				"points": 0
			},
			{
				"value": "Proximité d'un pont mobile",
				"points": 1
			},
			{
				"value": "Vent latéral",
				"points": 0
			},			
		]
	},

	{
		name: "jeu_panneaux3",
		title: "Quel est ce panneau ? (3/10)",
		message: "Score : -",
		image: "robot-conducteur-reconnaitre-panneau-3.jpg",
		choices: [
			{
				"value": "Fin d'interdiction",
				"points": 0
			},
			{
				"value": "Intersection",
				"points": 0
			},
			{
				"value": "Sortie d'aire pétionne",
				"points": 0
			},
			{
				"value": "Fin du caractère prioritaire d'une route",
				"points": 0
			},			
		]
	},	

	{
		name: "jeu_panneaux4",
		title: "Que signifie ce panneau ? (4/10)",
		message: "Score : -",
		image: "robot-conducteur-reconnaitre-panneau-4.jpg",
		choices: [
			{
				"value": "Passage d'animaux domestiques",
				"points": 1
			},
			{
				"value": "Passage à niveau",
				"points": 0
			},
			{
				"value": "Proximité d'un pont mobile",
				"points": 1
			},
			{
				"value": "Vent latéral",
				"points": 0
			},			
		]
	},	

//////////////
// FIN MINI-JEU 3/4
// RECONNAISSANCE noms panneaux
// Choix
//////////////


//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////


//MINI-JEU 3 & 4 > CONCLUSION
//SI 5 BONNES REPONSES OU PLUS:
	{
		title: "C'est un succès !",
		message: "Bravo, {{name}} a passé avec succès cette première phase de test !",
		image: "robot-conducteur-ado.png",
	},
//MINI-JEU 3 & 4 > CONCLUSION
//SI MOINS DE 5 BONNES REPONSES:
	{
		title: "C'est plutôt un échec...",
		message: "Il vous faut encore faire un effort. Vous continuez à faire tester {{name}}.",
		image: "robot-conducteur-ado-etonne.png",
	},

////////////////
// ROBOT ADULTE
////////////////

// Robot devient adulte
	{
		title: "Quoi ?",
		message: "{{name}} a grandi !",
		image: "robot-conducteur-adulte.png",
	},
//

	{
		title: "Après tous ces tests...",
		message: "{{name}} a enfin obtenu les autorisations pour des essais sur la route ! Vous sortez votre voiture pour la faire rouler en ville.",
		image: "robot-conducteur-adulte.png",
	},
	{
		title: "Tout se passe bien, mais soudain...",
		message: "Un scooter vous double par la droite, alors que vous vous apprêtiez à prendre un virage à droite. Vous le percutez et lui cassez une jambe à cause du choc.",
		image: "robot-conducteur-adulte-etonne.png",
	},

/// Choix responsabilité ///
/// Pas de bonne ou mauvaise réponse ///

//
// QUESTION RESPONSABILITE
//
	{
		name: "choice_responsabilite",
		title: "Que choisissez-vous ?",
		choices: [
			{
				"value": "Refus de responsabilité",
				"description": "Vous et Vroumvroum refusez d’endosser la responsabilité de cet accident",
				"points": 1
			},
			{
				"value": "Prise de responsabilité",
				"description": "Vous et Vroumvoum vous portez responsable",
				"points": 1
			},
		]
	},
	{
		title: "Une enquête est ouverte",
		message: "C’est le premier incident impliquant une voiture autonome en France. Les autorités prennent donc ce cas au sérieux.",
		image: "robot-conducteur-adulte-etonne.png",
	},
	{
		title: "La zone grise de la législation",
		message: "Il n’y a pas encore de texte de loi encadrant la responsabilité des voitures autonomes en France. Votre accident va donc faire jurisprudence.",
		image: "robot-conducteur-adulte-etonne.png",
	},

//
// QUESTION RESPONSABILITE
//
/// Parcours refus de responsabilité
	
	{
		message: "Mieux vaut vous entourer d’avocats pour vous protéger, si le conducteur du scooter décide de porter plainte.",
		image: "robot-conducteur-adulte-etonne.png",
		when: answers => answers.choice_responsabilite === "Refus de responsabilité",
	},
	{
		title: "Dans votre cas...",
		message: "{{name}} n’était pas en faute : c’est le scooter qui n’a pas respecté le code de la route.",
		image: "robot-conducteur-adulte-etonne.png",
		when: answers => answers.choice_responsabilite === "Refus de responsabilité",
	},
	{
		message: "En revanche, impossible de savoir si un conducteur aurait pu éviter le scooter. L’affaire se termine par un non-lieu.",
		image: "robot-conducteur-adulte-etonne.png",
		when: answers => answers.choice_responsabilite === "Refus de responsabilité",
	},
	{
		title: "Un coup dur pour l'industrie du véhicule autonome...",
		message: "Les constructeurs ont mis en pause leurs tests et l’opinion du public sur les voitures automatiques est maintenant négative.",
		image: "robot-conducteur-adulte-etonne.png",
		when: answers => answers.choice_responsabilite === "Refus de responsabilité",
	},

//
// QUESTION RESPONSABILITE
//
/// Parcours prise de responsabilité

	{
		message: "Puisque vous avez décidé de prendre vos responsabilités, vous allez avoir besoin d’avocats pour vous défendre.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite !== "Refus de responsabilité",
	},
	{
		message: "Dans votre cas...",
		message: "{{name}} n’était pas en faute : c’est le scooter qui n’a pas respecté le code de la route. Mais le juge veut faire de ce cas un exemple, et comme vous vous portez responsable, vous êtes condamnés à payer une amende.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite !== "Refus de responsabilité",
	},
	{
		title: "Un coup dur pour l'industrie du véhicule autonome...",
		message: "Beaucoup de projets ont été interrompus. Cependant, vous avez réussi à rassurer le public en acceptant d’endosser la responsabilité de l’accident.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite !== "Refus de responsabilité",
	},
//
// QUESTION RESPONSABILITE
// Fin de la question

	{
		title: "Un cas similaire s'est produit aux États-Unis",
		message: "Une voiture Uber en phase de test a renversé une piétonne, qui est décédée. L’enquête n’a pas encore livré ses conclusions, mais a laissé toute l’industrie en suspens.",
		image: "robot-conducteur-adulte-etonne.png",
	},
	{
		message: "Depuis, les chercheurs se sont posés des questions sur la réaction à adopter en cas d’accident. Que se passe-t-il si la voiture doit faire un choix ? Il faut définir un code moral pour que le véhicule sache quoi faire.",
		image: "robot-conducteur-adulte.png",
	},

	{
		name: "choice_accidentinevitable",
		title: "Dans le cas d’un accident inévitable, qui choisissez-vous de sauver ?",
		choices: [
			{
				"value": "Les passagers",
				"description": "de la voiture",
				"points": 1
			},
			{
				"value": "Les piétons",
				"description": " ",
				"points": 1
			}
			]
	},

	{
		title: "Vous avez eu du mal à faire un choix ?",
		message: "C'est normal : il n'y a pas de bonne réponse à cette question. Chaque situation a ses particularités et la décision ne dépend pas que des faits : elle fait appel à votre morale.",
		image: "robot-conducteur-adulte.png",
	},

	{
		message: "Le site Moral Machine propose à ses utilisateurs de prendre différentes décisions lorsqu'une situation d'accident se présente. Les statistiques récoltées fournissent un aperçu de la position de l’opinion publique sur ces questions.",
		image: "robot-conducteur-moralmachine.jpg",
	},
	{
		message: "Ces résultats permettent de mettre en lumière les questions morales que les concepteurs de voitures autonomes doivent se poser.",
		image: "robot-conducteur-moralmachine.jpg",
	},

//
// CONCLUSION
// Compte des points
//

	{
		title: "Votre score",
		message: "Mais avant de penser à tout cela, voyons si votre véhicule pourrait rouler, en fonction de vos réponses tout au long du parcours.",
		image: "robot-conducteur-adulte.png",
	},

/// Victoire
/// Parcours véhicule opérationnel (26 points ou plus) 

	{
		title: "Votre véhicule autonome est prometteur !",
		image: "robot-conducteur-gagne.png",
	},
	{
		title: "Mais le manque de législation vous empêche de le commercialiser",
		message: "Justement, le député Cédric Villani a proposé la création d’un comité éthique pour répondre à ces problématiques dans un rapport de mars 2018.",
		image: "experts-juriste-villani.jpg",
	},
	{
		message: "En attendant, cela vous laisse du temps pour continuer à améliorer {{name}}, notamment en vous penchant sur les enjeux moraux que soulève votre technologie.",
		image: "robot-conducteur-gagne.png",
	},

/// Échec
/// Parcours véhicule non opérationnel (moins de 26 points)

	{
		title: "Votre véhicule autonome n'est vraiment pas prêt...",
		message: "L’accident avec le scooter vous l’a montré, {{name}} n’est pas encore totalement opérationnelle.",
		image: "robot-conducteur-perdu.png",
	},
	{
		message: "En attendant, le député Cédric Villani a proposé dans un rapport de mars 2018 la création d’un comité éthique pour étudier les questions morales liés aux accidents de voitures autonomes.",
		image: "experts-juriste-villani.jpg",
	},
	{
		message: "Pour l’instant, votre objectif de base - réduire le nombre de morts sur la route - n’est pas encore atteint. Il va vous falloir davantage travailler sur votre voiture autonome.",
		image: "robot-conducteur-perdu.png",
	},

]

//GENERIQUE
//
//
// Graphisme : Julie Zentkowski
// 
// Merci tout particulièrement à Jules Bonnard et Pierre Romera de l'AFP pour leur aide précieuse en code
//
//
// Remerciements : 
// Google Maps, © 2017