
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
		message: "Sur les conseils d’Erik Coelingh, vous commencez à travailler sur votre algorithme conducteur. Ce ne sont que quelques lignes de code, mais vous vous prenez déjà d’affection pour ce·tte petit·e conducteur·rice en herbe. Vous décidez de lui donner un prénom.",
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
		message: "{{name}} peut maintenant voir la route, et même mieux que vous ! Seulement, il y a encore un problème à résoudre : {{name}} voit, mais elle ne sait pas encore ce qu’elle voit.",
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
// MINI-JEU RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		title: "Est-ce un passage piéton ? (1/11)",
		image: "robot-conducteur-reconnaitre-passage-1.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (2/11)",
		image: "robot-conducteur-reconnaitre-passage-2.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (3/11)",
		image: "robot-conducteur-reconnaitre-passage-3.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (4/11)",
		image: "robot-conducteur-reconnaitre-passage-4.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (5/11)",
		image: "robot-conducteur-reconnaitre-passage-5.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (6/11)",
		image: "robot-conducteur-reconnaitre-passage-6.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (7/11)",
		image: "robot-conducteur-reconnaitre-passage-7.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (8/11)",
		image: "robot-conducteur-reconnaitre-passage-8.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (9/11)",
		image: "robot-conducteur-reconnaitre-passage-9.jpg",
	},
	{
		title: "Est-ce un passage piéton ? (10/11)",
		image: "robot-conducteur-reconnaitre-passage-10.jpg",
	},								
	{
		title: "Est-ce un passage piéton ? (11/11)",
		image: "robot-conducteur-reconnaitre-passage-11.jpg",
	},	

//////////////
// MINI-JEU RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		title: "Bravo !",
		message: "Vous avez passé la première étape du labelling, vous félicite Erik Coelingh.",
		image: "experts-conducteur-coelingh.jpg",
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
		message: "Maintenant que votre voiture sait reconnaître les passages piétons, vos ingénieurs vont s’occuper de lui apprendre à reconnaître les voitures, les camions, etc.",
		image: "robot-conducteur-enfant.png",
	},


	{
		message: "Après tous ces tests, votre voiture a enfin obtenu les autorisations pour des essais sur la route. Vous sortez votre véhicule pour le faire rouler en ville.",
		image: "robot-conducteur-adulte.png",
	},
	{
		message: "Tout se passe bien, lorsqu’un qu’un scooter vous double par la droite, alors que vous vous apprêtiez à prendre un virage à droite. Vous le percutez et lui cassez une jambe à cause du choc. ",
		image: "robot-conducteur-adulte.png",
	},

/// Choix responsabilité à compléter Pas de bonne ou mauvaise réponse ///

	{
		name: "choice_responsabilite",
		message: "Que faites-vous ?",
		choices: [
			{
				"value": "refus de responsabilité",
				"description": "Vous et Vroumvroum refusez d’endosser la responsabilité de cet accident.",
				"points": 1
			},
			{
				"value": "prise de responsabilité",
				"description": "Vous et Vroumvoum vous portez responsable.",
				"points": 1
			},
		]
	},
	{
		title: "Une enquête est ouverte",
		message: "C’est le premier incident impliquant une voiture autonome en France, les autorités prennent donc ce cas au sérieux.",
		image: "robot-conducteur-adulte.png",
	},
	{
		title: "La zone grise de la législation",
		message: "Il n’y a pas encore de texte de loi encadrant la responsabilité des voitures autonomes en France, votre accident va donc faire jurisprudence. ",
		image: "robot-conducteur-adulte.png",
	},

/// Parcours refus de responsabilité ///
	
	{
		message: "Mieux vaut vous entourer d’avocats pour vous protéger si le conducteur du scooter décide de porter plainte.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "refus de responsabilité",
	},
	{
		message: "Dans votre cas, {{name}} n’était pas en faute : c’est le scooter qui n’a pas respecté le code de la route.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "refus de responsabilité",
	},
	{
		message: "Impossible par contre de savoir si un conducteur aurait pu éviter le scooter. L’affaire se termine par un non-lieu.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "refus de responsabilité",
	},
	{
		title: "Un coup dur pour l'industrie du véhicule autonome...",
		message: "Les constructeurs ont mis en pause leurs tests et l’opinion du public sur les voitures automatiques est maintenant négative...",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "refus de responsabilité",
	},

/// Parcours prise de responsabilité ///

	{
		message: "Puisque vous avez décidé de prendre vos responsabilités, vous allez avoir besoin d’avocats pour vous défendre.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "prise de responsabilité",
	},
	{
		message: "{{name}} n’était pas en faute : c’est le scooter qui n’a pas respecté le code de la route. Mais le juge veut faire de ce cas un exemple, et comme vous vous portez responsable, vous êtes condamnés à payer une amende.",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "prise de responsabilité",
	},
	{
		title: "Un coup dur pour l'industrie du véhicule autonome...",
		message: "Beaucoup de projets ont été interrompus. Cependant vous avez réussi à rassurer le public en acceptant d’endosser la responsabilité de l’accident. ",
		image: "robot-conducteur-adulte.png",
		when: answers => answers.choice_responsabilite === "prise de responsabilité",
	},

/// Retour au parcours commun ///

	{
		message: "Un cas similaire est arrivé aux Etats-Unis. Une voiture Uber en phase de test a renversé une piétonne, qui est décédée. L’enquête n’a pas encore livré ses conclusions, mais a laissé toute l’industrie en suspens.",
		image: "robot-conducteur-adulte.png",
	},
	{
		message: "Depuis, les chercheurs se sont posés des questions sur la réaction à adopter en cas d’accident. Que se passe-t-il si la voiture doit faire un choix ? Il faut définir un code moral pour que le véhicule sache quoi faire.",
		image: "robot-conducteur-adulte.png",
	},

	{
		name: "choice_accident_inevitable",
		title: "Dans le cas d’un accident inévitable, qui choisissez-vous de sauver ?",
		choices: [
			{
				"value": "Les passagers de la voiture",
				"description": "",
				"points": 1
			},
			{
				"value": "Les autres usagers de la route",
				"description": "",
				"points": 1
			},
			{
				"value": "Les utilisateurs n’ayant pas commis d’infraction au code de la route.",
				"description": "",
				"points": 1
			}
			]
	},
	{
		message: "Vous avez eu du mal à choisir? C'est normal... Il n'y a pas de bonne réponse à cette question. Chaque situation a ses particularités et la décision ne dépend pas que des faits : elle fait appel à votre morale.",
		image: "robot-conducteur-adulte.png",
	},
/// Compléter avec l'image de capture écran de moral machine///	
	{
		message: "Le site Moral Machine propose à ses utilisateurs de prendre différentes décisions lorsqu'une situation d'accident se présente. Les statistiques récoltées fournissent un aperçu de la position de l’opinion publique sur ces questions.",
		image: "",
	},
	{
		message: "Ces résultats permettent de mettre en lumière les questions morales que les concepteurs de voitures autonomes doivent se poser. Mais avant de penser à tout cela, voyons si votre véhicule pourrait rouler, en fonction de vos réponses tout au long du parcours. ",
		image: "robot-conducteur-adulte.png",
	},

/// ETAPE CALCUL DES POINTS A AJOUTER /// 

/// Parcours véhicule opérationnel (26 points ou plus) WHEN à rajouter IMAGE a rajouter/// 

	{
		message: "Même si votre véhicule autonome est prometteur, le manque de législation vous empêche de le commercialiser.",
		image: "",
	},
	{
		message: "Justement, le député Cédric Villani a proposé la création d’un comité éthique pour répondre à ces questions dans un rapport de mars 2018.",
		image: "",
	},
	{
		message: "En attendant, cela vous laisse du temps pour continuer à améliorer {{name}}, notamment en vous penchant sur les enjeux moraux que soulève votre technologie.",
		image: "",
	},

/// Parcours véhicule non opérationnel (moins de 26 points) WHEN ET IMAGE FIN DU SCENARIO à ajouter ///


	{
		message: "L’accident avec le scooter vous l’a montré, votre voiture autonome n’est pas encore totalement prête.",
		image: "",
	},
	{
		message: "En attendant qu’elle le soit, le député Cédric Villani a proposé dans un rapport de mars 2018 la création d’un comité éthique pour étudier les questions morales liés aux accidents de voitures autonomes.",
		image: "",
	},
	{
		message: "Pour l’instant, votre objectif de base - réduire le nombre de morts sur la route - n’est pas encore atteint, il va vous falloir travailler davantage sur votre voiture autonome.",
		image: "",
	},


	//// Crédits à ajouter 

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