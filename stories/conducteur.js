
const conducteur = [
	{
		title: "Vous êtes un·e ingénieur·e automobile",
		message: "Pour la marque Vroumvroum. Depuis toujours, votre rêve est de fabriquer une voiture autonome.",
		image: "robot-conducteur-dodo.png",
	},
	{
		title: "58 000 accidents de voitures ont lieu chaque année",
		message: "Cela fait plus de 3 000 victimes. Vous voulez changer les choses !",
		image: "robot-conducteur-cle-anime.gif",
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
		message: "L’algorithme, c’est l’embryon de l’intelligence artificielle, son cerveau. Comme celui d’un bébé à la naissance, il est fonctionnel, mais pas encore prêt à interagir de manière autonome avec son environnement.",
		image: "robot-conducteur-naissance.gif",
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
				"points": 0
			},
			{
				"value": "Titine",
				"description": "parce que ça vous rappelle votre première voiture",
				"points": 0
			},
			{
				"value": "Hubert",
				"description": "pour la blague",
				"points": 0
			}
		]
	},

	{
		message: "En choisissant d’appeler votre voiture autonome Hubert, vous prouvez à tout le monde que vous êtes un petit rigolo. Mais un homme dans la mécanique, c’est un peu cliché, non ?",
		image: "robot-conducteur-bebe-etonne.png",
		when: answers => answers.name === "Hubert"
	},	

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Le nom que vous lui avez choisi, lui, l’est. Il définit donc la manière dont le robot sera perçu par les utilisateurs et le public.",
		image: "robot-conducteur-bebe.png",
		when: answers => answers.name === "Hubert"
	},	

	{
		message: "Un prénom masculin peut participer à entretenir les préjugés selon lesquels l’automobile est réservée aux hommes.",
		image: "robot-conducteur-cle-anime.gif",
		when: answers => answers.name === "Hubert"
	},	

		{
		message: "Beaucoup de français font comme vous le choix de donner un surnom affectueux à leur voiture. Espérons que Titine n’aura pas trop de mal à se faire une place dans le milieu très masculin de l’automobile.",
		image: "robot-conducteur-bebe-etonne.png",
		when: answers => answers.name === "Titine"
	},	

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Le nom que vous lui avez choisi, lui, l’est. Il définit donc la manière dont le robot sera perçu par les utilisateurs et le public.",
		image: "robot-conducteur-bebe.png",
		when: answers => answers.name === "Titine"
	},	

	{
		message: "Mais au fait, pourquoi appelle-t-on notre voiture Titine? Voici la réponse que l’on trouve sur un forum : «Je l'appelle 'cocotte', c'est mon côté macho et elle, c'est une vraie soumise, elle obéit à tout ce que je lui dis, elle me surprend parfois mais je l'adore...» Tout le contraire d’une voiture autonome, non ?",
		image: "robot-conducteur-bebe.png",
		when: answers => answers.name === "Titine"
	},	

		{
		message: "Les geeks apprécieront la référence, Botmobile peut se vanter d’avoir un nom très cool. Et si votre IA développait les mêmes aptitudes que la voiture de Batman ?",
		image: "robot-conducteur-bebe.png",
		when: answers => answers.name === "Botmobile"
	},	

	{
		message: "Votre robot, contrairement à un bébé, n’est pas genré. Le nom que vous lui avez choisi, lui, l’est. Il définit donc la manière dont le robot sera perçu par les utilisateurs et le public.",
		image: "robot-conducteur-bebe.png",
		when: answers => answers.name === "Botmobile"
	},	

	{
		message: "Ne pas définir de genre pour votre algorithme vous autorise à un peu plus de fantaisie. «Au lieu de commencer par se dire, c’est un assistant, donnons-lui une voix de femme, qu’est-ce qui nous empêche de lui donner une voix d’animal, par exemple, ou un truc qui ne ressemble à rien de réel, mais qui soit fun ?» explique Dipty Chander, présidente de l’association E-mma qui promeut la mixité dans le domaine du numérique.",
		image: "experts-dipty.jpg",
		when: answers => answers.name === "Botmobile"
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
		message: "{{name}} doit maintenant passer par cette étape de «labelling». On essaye ?",
		image: "robot-conducteur-cle-anime.gif",
	},

//////////////
// MINI-JEU 1/4
// RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : -  |  Étape 1/11",
		largeimage: "robot-conducteur-reconnaitre-passage-1.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 2/11",
		largeimage: "robot-conducteur-reconnaitre-passage-2.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 3/11",
		largeimage: "robot-conducteur-reconnaitre-passage-3.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 4/11",
		largeimage: "robot-conducteur-reconnaitre-passage-4.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 5/11",
		largeimage: "robot-conducteur-reconnaitre-passage-5.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 6/11",
		largeimage: "robot-conducteur-reconnaitre-passage-6.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 7/11",
		largeimage: "robot-conducteur-reconnaitre-passage-7.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 8/11",
		largeimage: "robot-conducteur-reconnaitre-passage-8.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 9/11",
		largeimage: "robot-conducteur-reconnaitre-passage-9.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 10/11",
		largeimage: "robot-conducteur-reconnaitre-passage-10.jpg",
		yesno: {
			answer: true
		}
		//YES
	},								
	{
		name: "passagepieton",
		title: "Est-ce un passage piéton ?",
		message: "Score : {{ passagepieton }}  |  Étape 11/11",
		largeimage: "robot-conducteur-reconnaitre-passage-11.jpg",
		yesno: {
			answer: true
		}
		//YES
	},	
//////////////
// FIN MINI-JEU 1/4
// RECONNAISSANCE passage piéton
// YES-NO
//////////////

	{
		title: "Première phase du «labelling» achevée !",
		message: "Score : {{ passagepieton }}/11",
		image: "robot-conducteur-bebe.png",
	},

////////////////
// ROBOT ENFANT
////////////////

// Robot devient enfant
	{
		title: "Level up !",
		message: "{{name}} a grandi ! C’est en écoutant les adultes qu’un bébé apprend à parler. Une fois que l’intelligence artificielle dispose d’une première base de donnée, elle peut commencer à apprendre d’elle-même; comme un enfant qui entre à l’école.",
		image: "robot-conducteur-bebe-enfant.gif",
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
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ?",
		message: "Score : - |  Étape 1/7",
		largeimage: "robot-conducteur-reconnaitre-route-1.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ?",
		message: "Score : {{peopleonroad}}  |  Étape 2/7",
		largeimage: "robot-conducteur-reconnaitre-route-2.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ?",
		message: "Score : {{peopleonroad}}  |  Étape 3/7",
		largeimage: "robot-conducteur-reconnaitre-route-3.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ?",
		message: "Score : {{peopleonroad}}  |  Étape 4/7",
		largeimage: "robot-conducteur-reconnaitre-route-4.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ? (5/7)",
		message: "Score : {{peopleonroad}}  |  Étape 5/7",
		largeimage: "robot-conducteur-reconnaitre-route-5.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ? (6/7)",
		message: "Score : {{peopleonroad}}  |  Étape 6/7",
		largeimage: "robot-conducteur-reconnaitre-route-6.jpg",
		yesno: {
			answer: true
		}
		//YES
	},
	{
		name: "peopleonroad",
		title: "Des personnes sont-elles sur la route ? (7/7)",
		message: "Score : {{peopleonroad}}  |  Étape 7/7",
		largeimage: "robot-conducteur-reconnaitre-route-7.jpg",
		yesno: {
			answer: false
		}
		//NO
	},
//////////////
// FIN MINI-JEU 2/4
// RECONNAISSANCE route présence piétons
// YES-NO
//////////////

	{
		title: "Seconde phase du «labelling» achevée !",
		message: "Score : {{peopleonroad}}/7  |  {{name}} sait désormais reconnaître les objets et peut les placer sur une image.",
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
		when: answers => answers.choice_basedonnees === 'Les lois de la physique',
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
		image: "robot-conducteur-cle-anime.gif",
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
		title: "Level up !",
		message: "{{name}} a grandi ! Votre intelligence artificielle dispose d’assez de données pour pouvoir analyser les nouvelles informations que vous lui soumettez et adapter son comportement et ses prédictions à toutes les situations. Mais comme un adolescent, elle a besoin de tester ses limites.",
		image: "robot-conducteur-enfant-ado.gif",
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
		title: "Quel est ce panneau ?",
		message: "Score : -  |  Étape 1/10",
		image: "robot-conducteur-reconnaitre-panneau-1.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Sens interdit",
				"points": 1
			},
			{
				"description": "Interdit de stationner",
				"points": 0
			},
			{
				"description": "Stop",
				"points": 0
			}		
		]
	},

	{
		name: "jeu_panneaux2",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 2/10",
		image: "robot-conducteur-reconnaitre-panneau-2.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Passage d’animaux domestiques",
				"points": 0
			},
			{
				"description": "Passage à niveau",
				"points": 0
			},
			{
				"description": "Proximité d’un pont mobile",
				"points": 1
			},		
		]
	},

	{
		name: "jeu_panneaux3",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 3/10",
		image: "robot-conducteur-reconnaitre-panneau-3.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Fin d’interdiction",
				"points": 0
			},
			{
				"description": "Intersection",
				"points": 0
			},
			{
				"description": "Fin du caractère prioritaire d’une route",
				"points": 1
			},			
		]
	},	

	{
		name: "jeu_panneaux4",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 4/10",
		image: "robot-conducteur-reconnaitre-panneau-4.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Pizza flottante",
				"points": 0
			},
			{
				"description": "Accès à une rocade",
				"points": 1
			},
			{
				"description": "Passage piéton surélevé",
				"points": 0
			},			
		]
	},	

	{
		name: "jeu_panneaux5",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 5/10",
		image: "robot-conducteur-reconnaitre-panneau-5.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Risque de chute de pierres",
				"points": 1
			},
			{
				"description": "Succession de virages",
				"points": 0
			},
			{
				"description": "Descente dangereuse",
				"points": 0
			},			
		]
	},

	{
		name: "jeu_panneaux6",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 6/10",
		image: "robot-conducteur-reconnaitre-panneau-6.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Circulation à sens unique",
				"points": 0
			},
			{
				"description": "Interdiction de dépasser",
				"points": 1
			},
			{
				"description": "Lieu aménagé pour le stationnement",
				"points": 0
			},			
		]
	},

	{
		name: "jeu_panneaux7",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 7/10",
		image: "robot-conducteur-reconnaitre-panneau-7.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Obligation d’aller tout droit",
				"points": 0
			},
			{
				"description": "Vous avez la priorité",
				"points": 0
			},
			{
				"description": "Cédez le passage aux véhicules en sens inverse",
				"points": 1
			},			
		]
	},

	{
		name: "jeu_panneaux8",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 8/10",
		image: "robot-conducteur-reconnaitre-panneau-8.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Entrée sur une rocade",
				"points": 1
			},
			{
				"description": "Début d’une section d’autoroute",
				"points": 1
			},
			{
				"description": "Intersection",
				"points": 0
			},			
		]
	},

	{
		name: "jeu_panneaux9",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 9/10",
		image: "robot-conducteur-reconnaitre-panneau-9.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Fin d’interdiction",
				"points": 0
			},
			{
				"description": "Stationnement interdit",
				"points": 1
			},
			{
				"description": "Arrêt et stationnement interdits",
				"points": 0
			},			
		]
	},

	{
		name: "jeu_panneaux10",
		title: "Quel est ce panneau ?",
		message: "Score : {{ contextPoints.jeu_panneaux }}  |  Étape 10/10",
		image: "robot-conducteur-reconnaitre-panneau-10.png",
		contextPoints: "jeu_panneaux",
		choices: [
			{
				"description": "Arrêt à l’intersection",
				"points": 1
			},
			{
				"description": "Air réservée à l’auto-stop",
				"points": 0
			},
			{
				"description": "Ville de Stop (Loire-et-Cher)",
				"points": 0
			},			
		]
	},
//////////////
// FIN MINI-JEU 3/4
// RECONNAISSANCE noms panneaux
// Choix
//////////////

	{
		title: "Apprentissage du code de la route achevé !",
		message: "Score : {{ contextPoints.jeu_panneaux }}/10  |  Vous êtes fin prêt·e à tester {{name}} sur l’un des circuits de Vroumvroum.",
		image: "robot-conducteur-ado.png",
	},

	{
		title: "Apprentissage des situations de conduite",
		message: "{{name}} doit maintenant apprendre à réagir en fonction de ce qui est vu : par exemple, si {{name}} voit qu’un piéton traverse, il faudra ralentir pour le laisser passer.",
		image: "robot-conducteur-ado.png",
	},	

//////////////
// MINI-JEU 4/4
// RECONNAISSANCE situation route
// Choix
//////////////
	{
		name: "jeu_route1",
		contextPoints: "jeu_route",
		message: "Le feu est vert, mais les piétons sont sur la route. Que faire ? (1/6)",
		image: "robot-conducteur-test-1.jpg",
		choices: [
			{
				"value": "",
				"description": "Avancer",
				"points": 1
			},
			{
				"value": " ",
				"description": "Les laisser passer",
				"points": 0
			},
			{
				"value": "  ",
				"description": "Klaxonner : les piétons devraient être sur le trottoir",
				"points": 0
			},			
		]
	},
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de continuer à avancer.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route1 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de continuer à avancer.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route1 !== "",
	},

	{
		name: "jeu_route2",
		contextPoints: "jeu_route",
		message: "Un animal surgit sur la route. Que faire ? (2/6)",
		image: "robot-conducteur-test-2.jpg",
		choices: [
			{
				"value": " ",				
				"description": "Mettre un coup de volant pour l’éviter",
				"points": 0
			},
			{
				"value": "",				
				"description": "Freiner pour éviter de le percuter",
				"points": 1
			},
			{
				"value": "  ",
				"description": "Continuer à rouler normalement",
				"points": 0
			},			
		]
	},	
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de freiner.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route2 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de freiner.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route2 !== "",
	},

	{
		name: "jeu_route3",
		contextPoints: "jeu_route",
		message: "Le feu est vert. Que faire ? (3/6)",
		image: "robot-conducteur-test-3.jpg",
		choices: [
			{
				"value": " ",
				"description": "Ralentir",
				"points": 0
			},
			{
				"value": "  ",
				"description": "S'arrêter",
				"points": 0
			},
			{
				"value": "",
				"description": "Continuer à rouler normalement",
				"points": 1
			},			
		]
	},	
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de continuer à rouler normalement.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route3 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de continuer à rouler normalement.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route3 !== "",
	},

	{
		name: "jeu_route4",
		contextPoints: "jeu_route",
		message: "La route est bloquée. Que faire ? (4/6)",
		image: "robot-conducteur-test-4.jpg",
		choices: [
			{
				"value": " ",
				"description": "Rebrousser chemin en marche arrière",
				"points": 0
			},
			{
				"value": "  ",
				"description": "Continuer à rouler normalement",
				"points": 0
			},
			{
				"value": "",
				"description": "Faire demi-tour en trois temps",
				"points": 1
			},			
		]
	},	
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de faire demi-tour.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route4 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de faire demi-tour.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route4 !== "",
	},

	{
		name: "jeu_route5",
		contextPoints: "jeu_route",
		message: "La voiture détecte un obstacle sur la route. Que faire ? {{ contextPoints.jeu_route }} (5/6)",
		image: "robot-conducteur-test-5.jpg",
		choices: [
			{
				"value": " ",
				"description": "Rouler dessus : c’est un simple sac plastique",
				"points": 0
			},
			{
				"value": "  ",
				"description": "L'éviter : c'est un rocher",
				"points": 0
			},
			{
				"value": "",
				"description": "Ralentir tout en s’approchant : permet d’identifier l’obstacle",
				"points": 1
			},			
		]
	},	
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de ralentir.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route5 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de ralentir.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route5 !== "",
	},

	{
		name: "jeu_route6",
		contextPoints: "jeu_route",
		message: "Le garçon veut visiblement traverser, mais vous ne savez pas s'il a vu la voiture. Que faire ? (6/6)",
		image: "robot-conducteur-test-6.jpg",
		choices: [
			{
				"value": " ",				
				"description": "Continuer sans ralentir : c’est à lui de regarder la route",
				"points": 0
			},
			{
				"value": "",
				"description": "Ralentir en attendant de voir ce qu'il va faire",
				"points": 1
			},
			{
				"value": "  ",
				"description": "Klaxonner pour signaler sa présence",
				"points": 0
			},			
		]
	},	
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Il fallait bien choisir de ralentir.",
		image: "robot-conducteur-ado.png",
		when: answers => answers.jeu_route6 === "",
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Il fallait choisir de ralentir.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.jeu_route6 !== "",
	},

//////////////
// FIN MINI-JEU 4/4
// RECONNAISSANCE situation route
// Choix
//////////////


//MINI-JEU 3 & 4 > CONCLUSION
//SI 80% BONNES REPONSES OU PLUS:
	{
		title: "C'est un succès !",
		message: "Avec {{contextPoints.jeu_route}} bonnes réponses sur 6, {{name}} a passé avec succès cette phase de test !",
		image: "robot-conducteur-ado.png",
		when: answers => answers.contextPoints.jeu_route >= 4,

	},
//MINI-JEU 3 & 4 > CONCLUSION
//SI MOINS DE 80% BONNES REPONSES:
	{
		title: "C'est plutôt un échec...",
		message: "Avec {{contextPoints.jeu_route}} bonnes réponses sur 6, il vous faut encore faire un effort. Vous continuez à faire tester {{name}}.",
		image: "robot-conducteur-ado-etonne.png",
		when: answers => answers.contextPoints.jeu_route < 4,
	},

////////////////
// ROBOT ADULTE
////////////////

// Robot devient adulte
	{
		title: "Level up !",
		message: "{{name}} a grandi ! Votre intelligence artificielle est fonctionnelle. Pendant la phase d’apprentissage, nous avons mis de côté les questions éthiques. Mais avec l’autonomie vient aussi les responsabilités morales auxquelles les jeunes adultes sont confrontés.",
		image: "robot-conducteur-ado-adulte.gif",
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
				"points": 0
			},
			{
				"value": "Prise de responsabilité",
				"description": "Vous et Vroumvoum vous portez responsable",
				"points": 0
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
		title: "Un coup dur pour l’industrie du véhicule autonome...",
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
		image: "robot-conducteur-cle-anime.gif",
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
				"points": 0
			},
			{
				"value": "Les piétons",
				"description": " ",
				"points": 0
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

//
// CONCLUSION
// Compte des points
//

	{
		title: "Votre score",
		message: "Mais avant de penser à tout cela, voyons si votre véhicule pourrait rouler, en fonction de vos réponses tout au long du parcours.",
		image: "robot-conducteur-cle-anime.gif",
	},

/// Victoire
/// Parcours véhicule opérationnel (25 points ou plus) 

	{
		title: "Votre véhicule autonome est prometteur !",
		message: "Vous avez {{points}} points sur un total de 35.",
		image: "robot-conducteur-gagnant.gif",
		when: answers => answers.points >= 25,
	},
	{
		title: "Mais le manque de législation vous empêche de le commercialiser",
		message: "Justement, le député Cédric Villani a proposé la création d’un comité éthique pour répondre à ces problématiques dans un rapport de mars 2018.",
		image: "experts-juriste-villani.jpg",
		when: answers => answers.points >= 25,
	},
	{
		message: "En attendant, cela vous laisse du temps pour continuer à améliorer {{name}}, notamment en vous penchant sur les enjeux moraux que soulève votre technologie.",
		image: "robot-conducteur-gagnant.gif",
		when: answers => answers.points >= 25,
	},

/// Échec
/// Parcours véhicule non opérationnel (moins de 25 points)

	{
		title: "Votre voiture autonome n'est vraiment pas prête...",
		message: "Vous avez {{points}} points sur un total de 35. L’accident avec le scooter vous l’a montré, {{name}} n’est pas encore totalement en capacité de rouler en toute sécurité.",
		image: "robot-conducteur-echec.gif",
		when: answers => answers.points < 25,
	},
	{
		message: "En attendant, le député Cédric Villani a proposé dans un rapport de mars 2018 la création d’un comité éthique pour étudier les questions morales liés aux accidents de voitures autonomes.",
		image: "experts-juriste-villani.jpg",
		when: answers => answers.points < 25,
	},
	{
		message: "Pour l’instant, votre objectif de base - réduire le nombre de morts sur la route - n’est pas encore atteint. Il va vous falloir davantage travailler sur votre voiture autonome.",
		image: "robot-conducteur-echec.gif",
		when: answers => answers.points < 25,
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