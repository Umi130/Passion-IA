// Tech todo: obsolete illustration.vue

// Todo: fond couleur différent programmatique quand faux
//       (container d-flex flex-column justify-content-center align-items-center)

// Todo: compte bonne réponses à incrémenter, then show as percentage

// Todo : Blanks to finish (don't shift text box)
// Todo : votre intelligence artificielle grandit ! when logo changes
// Todo : valign image robot (image must be anchored on bottom, not top)
// Todo : bouton SUIVANT ancré en bas

// Todo : add close box to go back to main menu

// Optional Todo : texte devient tableau pour aller à la ligne
// Optional Todo: Illustrations -- Taille images variable desktop/smartphone?

const juriste = [
	{
		title: "Vous êtes assis·e à votre bureau...",
		message: "Vous contemplez la centaine de dossiers en attente de jugement. Vous êtes en charge des affaires de recours en cas de licenciement abusif.",
		image: "robot-juriste-bebe.png",
	},
	{
		message: "Comme la plupart des tribunaux français, le vôtre est encombré. Vous avez entendu parler d'outils d'intelligence artificielle (IA) pour traiter plus rapidement des dossiers.",
		image: "robot-juriste-bebe.png",
	},
	{
		message: "Vous vous inspirez de Case Law Analytics et de Predictice, deux entreprises françaises qui proposent des outils d'IA à des avocats. Vous vous associez avec un ingénieur pour écrire un algorithme adapté aux magistrats.",
		image: "robot-juriste-bebe.png",
	},
	{
		title: "Qu'est-ce qu'un algorithme ?",
		message: "Ce sont les instructions qui commandent un programme informatique. C'est un peu comme une recette de cuisine. Les ingrédients sont les données des dossiers ; votre plat, ce sont les différents jugements.",
		image: "robot-juriste-bebe.png",
	},
	{
		title: "L'ingrédient principal",
		message: "Votre algorithme doit se nourrir de la loi qui détermine le montant des indemnités de licenciement d'un salarié.",
		image: "robot-juriste-bebe.png",
	},

	{
		message: "Ce ne sont que quelques lignes de code, mais vous vous prenez déjà d'affection pour ce super-assistant qui va faire diminuer la pile de dossiers sur votre bureau. Vous décidez de lui donner un prénom.",
		image: "robot-juriste-bebe.png"
	},

	{
		name: "name",
		message: "Vous l'appelez...",
		choices: [
			{
				"value": "Ross",
				"description": "Robot juriste star aux États-Unis",
				"points": 0
			},
			{
				"value": "Agatha",
				"description": "Personnage pré-cognitif de Minority Report",
				"points": 0
			},
			{
				"value": "Justum",
				"description": "Nominatif neutre : ce qui est juste en latin",
				"points": 1
			}
		]
	},
	{
		message: "Vous décidez de tester votre algorithme en lui soumettant un premier dossier.",
		image: "robot-juriste-bebe.png"
	},

	{
		title: "Premier dossier",
		message: "Mme Laurent a été victime d'un licenciement abusif après avoir travaillé cinq ans dans un petit magasin.",
		image: "robot-juriste-marteau-anime.gif",
//		when: answers => answers.name !== 'Justum'
	},
	
	{ 
		title: "L'algorithme vous dit :",
		message: "Mme Laurent a droit à une indemnité comprise entre 1,5 et 6 mois de salaire brut.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "explanation",
        title: "Vous êtes complètement déçu·e…",
		message: "{{name}} n’a fait que répéter ce qui est écrit dans la loi. Vous n’êtes pas très avancé·e, car vous souhaitez avoir un montant précis et pas seulement une fourchette.",
		image: "robot-juriste-bebe.png",
	},
	{
		title: "Vous demandez conseil.",
		message: "L'algorithme a besoin de plus de précisions quant aux critères qui motivent votre décision. Jacques Levy Vehel, le co-fondateur de Case Law Analytics, vous assiste.",
					image: "experts-juriste-vehel.jpg",
	},
	{
		message:"«L'intelligence artificielle calcule ces probabilités grâce à un algorithme: à condition qu'on lui donne assez d'exemples, elle pourra simuler les différentes décisions possibles pour un cas particulier.»",
			image: "experts-juriste-vehel.jpg",
	}, 

	{
		message: "Votre algorithme a donc besoin de plus de précisions quant aux critères qui motivent votre décision.",
		image: "robot-juriste-bebe.png",
	},
	{
		name: "choice_premiereslois",
		message: "Vous choisissez de nourrir {{ name }} avec :",
		choices: [
			{
				"value": "Tous les articles de loi",
				"description": "Les 11 000 articles du code du travail et la jurisprudence associée",
			},
			{
				"value": "Uniquement des décisions similaires",
				"description": "1 500 décisions prises par vous et vos collègues dans des cas similaires depuis le changement de la loi en septembre 2017",
			},
		]
	},

//Si choix - Tous les articles de loi
	{	
		title: "Deuxième dossier",
		message: "Vous soumettez un dossier de votre pile pour tester {{ name }}. M. Husson a été victime d'un licenciement abusif après avoir travaillé 10 ans dans une entreprise de télécommunication.",
		image: "robot-juriste-marteau-anime.gif",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},

	{
		title: "Résultat de l'algorithme :",
		message: "M. Husson devrait recevoir douze mois de salaire brut en indemnité. Ce n'est plus une fourchette... mais le montant des indemnités est supérieur à ce que prévoit la loi actuelle.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		message: "L'algorithme a pris en compte toutes les décisions liées aux lois précédentes. Le résultat est faussé.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		message: "En donnant à l'algorithme trop de textes de lois et trop de jurisprudence, vous prenez le risque de prendre en compte des dossiers trop différents de celui que vous souhaitez analyser.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		message: "Définir manuellement les critères qui motivent votre décision va prendre du temps. C'est le côté «humain» de l'IA.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},

//Si choix - Que des décisions similaires
	{	
		title: "Deuxième dossier",
		message: "M. Husson a été victime d'un licenciement abusif après avoir travaillé 10 ans dans une entreprise de télécommunication.",
		image: "robot-juriste-marteau-anime.gif",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},

	{
		title: "Résultat de l'algorithme :",
		message: "M. Husson devrait recevoir trois mois de salaire brut en indemnités. C'est un résultat précis... mais vous vous rendez compte que {{name}} n'a pas tenu compte de la zone géographique de votre cour.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
	{
		message: "Vous auriez eu tendance à lui attribuer une indemnité d'au moins 6 mois de salaire brut puisque le chômage est plus élevé dans votre région.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
	{
		message: "La définition manuelle des critères vous prend du temps, mais elle sera plus juste, car elle tiendra compte des spécificités des dossiers. C'est le côté «humain» de l'IA.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
////////////////
// ROBOT ENFANT
////////////////
	{
		title: "Conseil de l'ingénieur",
		message: "Pour que {{ name }} puisse reconnaître les données importantes dans toutes les futures décisions que vous ajouterez à la base de données, il faut recourir aux techniques de traitement automatique du langage naturel.",
		image: "robot-juriste-enfant.png",
	},

	{
		message: "Une partie de ce processus consiste à soumettre à {{name}} un texte à trous. À chaque fois que la machine trouve le bon mot, elle est récompensée.",
		image: "robot-juriste-enfant.png",
	},
	{
		message: "C'est en multipliant les exemples que {{name}} finit par comprendre où se situe l'information-clé dans une phrase, en fonction des mots qui l'entourent. Pour nos dossiers, {{ name }}  doit repérer l'ancienneté d'un salarié dans l'entreprise, critère décisif pour définir le montant des indemnités. On essaye ?",
		image: "robot-juriste-enfant.png",
	},


//INPUT OLIVIER FERRAND 
	{
		name: "blanks_emploi_duree1",
		title: "Entrez les mots manquants",
		blanks: [
			{
				"value": "M. Olivier Ferrand a travaillé"
			},
			{
				"value": "word_1",
				"type": "input",
				"answers": ['pendant', 'durant', 'Pendant', 'Durant']
			},
			{
				"value": " 10 ",
			},
			{
				"value": "word_2",
				"type": "input",
				"answers": ['ans', 'années', 'Ans', 'Années']
			},
		]
	},
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Ici, l'information-clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, {{name}} doit identifier les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		image: "robot-juriste-enfant.png",
		when: answers => answers.blanks_emploi_duree1 
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Ici, l'information-clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, {{name}} doit reconnaître les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		image: "robot-juriste-enfant-etonne.png",
		when: answers => !answers.blanks_emploi_duree1 
	},

//INPUT CORINNE DUTEIL
	{
		name: "blanks_emploi_duree2",
		message: "Mme Corinne Duteil a été victime d'un licenciement abusif. Elle avait été ",
		blanks: [
			{
				"value": "word_1",
				"type": "input",
				"answers": ['embauchée', 'engagée', 'recrutée', 'Embauchée', 'Engagée', 'Recrutée']
			},
			{
				"value": " dans l'entreprise en 2013.",
			},
		]
	},
//Si réponse correcte
	{
		title: "Bonne réponse !",
		message: "Ici, trois réponses étaient possibles : 'embauchée', 'recrutée' ou 'engagée'. Plus il y a de manières d'exprimer une idée, plus {{name}} mettra du temps à reconnaître l'information.",
		image: "robot-juriste-enfant.png",
		when: answers => answers.blanks_emploi_duree2 
	},
//Si réponse incorrecte
	{
		title: "Mauvaise réponse !",
		message: "Ici, trois réponses étaient possibles : 'embauchée', 'recrutée' ou 'engagée'. Plus il y a de manières d'exprimer une idée, plus {{name}} mettra du temps à reconnaître l'information.",
		image: "robot-juriste-enfant-etonne.png",
},

//Si toutes réponses correctes
	{
		title: "Bravo !",
		message: "Le taux d'erreur de {{name}} est inférieur à 15%, vous pourrez donc économiser de longues heures d'étiquetage manuel de vos données. Vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse 'prédire' la probabilité des différents jugements pour un nouveau dossier.",
		when: answers => answers.blanks_emploi_duree1 && answers.blanks_emploi_duree2,
		image: "robot-juriste-ado.png",
	},
//Sinon
	{
		title: "Vous avez fait trop d'erreurs...",
		message: "Vous devez étiqueter vos données manuellement. Vous perdez beaucoup de temps, mais vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse «prédire» la probabilité des différents jugements pour un nouveau dossier.",
		image: "robot-juriste-ado-etonne.png",
		when: answers => !answers.blanks_emploi_duree1 || !answers.blanks_emploi_duree2,
	},

{
		title: "",
		message: "«Quand le taux d'erreur est supérieur à 15 ou 20%, on étiquette les données à la main.» (Jacques Levy-Vehel, co-fondateur de Case Law Analytics)",
		image: "experts-juriste-vehel.jpg",
	},


//TODO Ajouter compte des bonnes & mauvaises réponses
	{
		title: "Une tâche longue et fastidieuse...",
		message: "C'est la partie «humaine» de l'intelligence artificielle. Selon la taille de la base de données, l'opération peut prendre plusieurs jours, voire plusieurs semaines.",
		image: "robot-juriste-marteau-anime.gif",	
	},


////////////////
// ROBOT ADO
////////////////

//Cas licenciements
	{
		message: "Avant d'utiliser {{name}}, il faut vérifier si ses prédictions reflètent la réalité des décisions que vous avez prises par le passé. Case Law Analytics vous conseille de comparer les statistiques générées par {{name}} à un corpus de décisions «témoin».",
			image: "robot-juriste-ado.png",
	},

//TODO TABLEAU
	{
		message: "Mme Petit : 29 ans, 10 ans d'ancienneté, ouvrière, entreprise de 10 salariés. Indemnité selon l'IA : 2,5 mois de salaire brut. M. Martin : 62 ans, 10 ans d'ancienneté, cadre technique, entreprise de 25 salariés. Indemnité selon le corpus de décisions témoin : 3 mois de salaire brut.",
		image: "robot-juriste-ado.png",
	},
	{
		title: "Le montant des indemnités est différent...",
		message: "Vous ne comprenez pas pourquoi : Mme Petit et M. Martin ont pourtant travaillé tous deux 10 ans dans l'entreprise.",
			image: "robot-juriste-ado-etonne.png",
	},
	{
		message: "Vous aviez pourtant programmé {{name}} pour calculer le montant des indemnités en fonction de l'ancienneté du salarié.",
		image: "robot-juriste-ado-etonne.png",
	},
//Choix proposé
	{
		name: "choice_critereneglige",
		message: "Lequel de ces critères avez-vous négligé ?",
		choices: [
			{
				"value": "Âge du salarié",
				"description": ""
			},
			{
				"value": "Sexe du salarié",
				"description": ""
			},
			{
				"value": "Nombre de salariés dans entreprise",
				"description": ""
			},
			{
				"value": "Poste du salarié",
				"description": "Cadre ou non-cadre"
			},
			]
	},
//Réponse correcte 3
	{
		title: "Bravo !",
		message: "Depuis 2017, les indemnités diffèrent en fonction du nombre de salarié dans l'entreprise. Il faut donc augmenter le poid de ce critère lorsque {{name}} apprend à reconnaître les informations clés d’un dossier.",
		image: "robot-juriste-ado.png",
		when: answers => answers.choice_critereneglige === 'Nombre de salariés dans entreprise',
	},
//Si mauvaise réponse
	{
		title: "Mauvaise réponse !",
		message: "Les indemnités diffèrent en fonction du nombre de salariés dans l'entreprise. Il faut donc augmenter le poids de ce critère lorsque {{name}} apprend à reconnaître les informations-clés d'un dossier.",
		image: "robot-juriste-ado-etonne.png",
		when: answers => answers.choice_critereneglige !== 'Nombre de salariés dans entreprise',
	},

// Etape commune 	
	{
		title: "Votre algorithme est maintenant bien entraîné !",
		message:"Vous lui soumettez un nouveau dossier : M. Olivier a été victime d'un licenciement abusif après avoir travaillé pendant 1 an dans une start-up.", 
		image: "robot-juriste-marteau-anime.gif",
	},

////////////////
// ROBOT ADULTE
////////////////

	{
		title: "Résultat de l'algorithme :",
		message: "M. Olivier devrait avoir 1 mois de salaire brut d'indemnité. C'est exactement ce que vous auriez décidé en étudiant vous-même le dossier.",
		image: "robot-juriste-adulte.png",
	},
	{
		title: "L'algorithme enchaîne les dossiers",
		message: "La pile fond comme neige au soleil. Vous avez beaucoup plus de temps à consacrer aux dossiers compliqués.",
		image: "robot-juriste-adulte.png",
},
	{
		message: "Pour chaque affaire, {{name}} vous propose plusieurs décisions et les classe en fonction de leur probabilité. Pour les dossiers les plus simples, une décision se dégage souvent avec un taux de probabilité supérieur à 90%.",
		image: "robot-juriste-adulte.png",
	},	 
//Nouveau choix proposé
	{
		name: "choice_critereneglige_automatise",
		message: "Vous décidez d'automatiser vos décisions sur les dossiers les plus simples, afin de consacrer plus de temps aux dossiers complexes.",
		choices: [
			{
				"value": "Oui",
				"description": ""
			},
			{
				"value": "Non",
				"description": ""
			},
			]
	},
//Si bonne réponse
	{
		title: "Attention !",
		message: "Vous risquez d'être sanctionné si vous oubliez le côté «humain» de la justice. Une décision ne peut se baser uniquement sur un algorithme : {{name}} ne peut être qu'un outil d'aide à la décision.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
		{
		message: "Mieux vaut prendre le temps d'étudier chaque propositions de l'intelligence artificielle à la lumière des spécificités des dossiers, et de la chambre chargée de les traiter.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
//Si mauvaise réponse
	{
		title: "Vous faîtes bien...",
		message: "Même sur les dossiers les plus simples, les décisions ne peuvent être prises automatiquement car cela va à l'encontre de la nature même d'une procédure judiciaire. {{name}} ne peut être qu'un outil d'aide à la décision.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_critereneglige_automatise === 'Non',
	},

// commun à tous 
	{
		title: "La situation aux Etats-Unis",
		message: "Le logiciel Compas permet d'évaluer le risque de récidive d'un criminel. Mais les juges qui ne se basaient que sur ce programme ont été contraints de revoir leur jugement, et de justifier leur décision par un raisonnement humain et non informatique.",
		image: "experts-juriste-compas.jpg",
	},

//Choix Open source
	{
		name: "choice_opensource",
		message: "Plusieurs juges sont intéressés par votre outil. Vous décidez de :",
		choices: [
			{
				"value": "Le rendre accessible en Open source",
				"description": "lisible, modifiable et utilisable par tous (magistrats, avocats et juristes) gratuitement"
			},
			{
				"value": "Le diffuser uniquement aux magistrats",
				"description": "pour éviter que le programme ne soit modifié ou utilisé à mauvais escient."
			},
			]
	},
//Si bonne réponse
	{
		title: "Bonne réponse !",
		message: "Vous prenez le risque que {{name}} soit modifié, mais l'Open Source permettra à chacun d'apprécier les fondements de la décision prise par le juge qui l'utilise. En le rendant gratuit, vous évitez la création de nouvelles inégalités entre les professionnels de la justice qui pourraient se l'offrir et ceux qui ne le pourraient pas.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource === 'Le rendre accessible en Open source',
	},
	{
		title: "Après plusieurs mois d'utilisation...",
		message: "Vous êtes confronté·e à un nouveau type de contestation. Une association a étudié en détail votre algorithme. Elle lui a soumis des dossiers similaires : les résultats montrent que les indemnités proposées aux femmes par {{name}} sont souvent inférieures à celles proposées aux hommes.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource === 'Le rendre accessible en Open source',
	},

//Si mauvaise réponse

	{
		title: "Mauvaise réponse !",
		message: "En rendant le code de {{name}} secret, vous exposez les juges qui l'utiliseront à des contestations : il faut que ceux-ci sachent sur quels critères se basent {{name}}. Pour assurer la transparence d'une décision, il faut que l'outil que vous utilisez le soit aussi.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_opensource !== 'Le rendre accessible en Open source',
	},
	{
		title: "Après plusieurs mois d'utilisation...",
		message: "Vous êtes confronté·e à un nouveau type de contestation. Des hackers ont réussi à pirater votre programme. Ils lui ont soumis des dossiers similaires : les résultats montrent que les indemnités proposées aux femmes par {{name}} sont souvent inférieures à celles proposées aux hommes.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource !== 'Le rendre accessible en Open source',
	},


//Indemnités homme/femme
	{
		name: "choice_indemniteshommefemme",
		message: "Les indemnités sont calculées en fonction du salaire. Puisque le salaire des femmes est moins élevé, les indemnités seront moins élevées.",
		choices: [
			{
				"value": "Argument valide",
				"description": ""
			},
			{
				"value": "Argument invalide",
				"description": ""
			},
			]
	},
//Si bonne réponse
	{
		title: "Bonne réponse !",
		message: "Le raisonnement paraît logique,mais vous ne vous êtes pas fait·e avoir: les dossiers dont on parle sont similaires en termes de salaire.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_indemniteshommefemme === "Argument invalide",
	},
//Si mauvaise réponse
	{
		title: "Mauvaise réponse !",
		message: "Le raisonnement est plutôt logique, mais les contestations concernent des dossiers similaires, dans lesquels les femmes touchent autant que les hommes.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_indemniteshommefemme !== "Argument invalide",
	},


	{
		title: "Biais de traitement",
		message: "Des études montrent également que dans certains domaines du droit, il y a une différence de traitement entre les femmes et les hommes. Ces derniers écopent par exemple de peines de prison plus lourdes.",
		image: "robot-juriste-adulte.png",
	},

	{
		message: "Le biais peut donc se situer dans l'appréciation personnelle des juges et se refléter dans la base de données soumise à l'algorithme.",
		image: "robot-juriste-adulte.png",
	},


//Biais indemnités homme/femme
	{
		name: "choice_indemniteshommefemme_biais",
		message: "Comment corriger ce biais ?",
		choices: [
			{
				"value": "Corriger le programme",
				"description": "pour que le mot «Madame» ne soit pas associé à des indemnités plus faibles que celles des hommes."
			},
			{
				"value": "Anonymiser les décisions",
				"description": "de votre base de données."
			},
			]
	},
//Si bonne réponse
	{
		title: "Bonne réponse !",
		message: "En prenant l'habitude d'anonymiser vos données, vous éviterez les biais liés au sexe des individus dans tous les domaines du droit que vous souhaitez couvrir avec votre intelligence artificielle.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_indemniteshommefemme_biais === "Anonymiser les décisions",
	},
//Si mauvaise réponse
	{
		title: "Mauvaise réponse !",
		message: "Si vous voulez utiliser l'intelligence artificielle dans d'autres domaines, il vous faudra répéter cette manipulation à chaque fois que vous trouverez un biais issu de la base de données et mal interprété par le système de traitement automatique du langage. Il vaut mieux anonymiser les données.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_indemniteshommefemme_biais !== "Anonymiser les décisions",
	},

	{
		title: "L'anonymisation des données est un enjeu-clé",
		message: "Depuis le vote de la loi pour une République Numérique en octobre 2016, et la publication du rapport Cadiet sur l'open data dans le monde de la justice, les professionnels du secteur attendent une décision sur la question.",
		image: "robot-juriste-adulte.png",
	},
	{
		message: "Avocats, juristes et magistrats sont nombreux à s'inquiéter d'une intelligence artificielle qui utiliserait des données non anonymisées, notamment dans le cadre de procédure pénale.",
		image: "robot-juriste-adulte.png",
	},

	{
		message: "Le député Cedric Villani a écrit un rapport intitulé “Donner un sens à l’intelligence artificielle” Ces quelques 240 pages recommandent la création d’un corps d’experts qui pourrait être saisi pour enquêter sur une prise de décision algorithmique.",
		image: "robot-juriste-adulte.png",
	},
	{
		message: "Il préconise des études d’impact pour éviter les discriminations dont pourrait se rendre coupable l’intelligence artificielle, notamment dans le domaine de la justice. La sensibilisation des concepteurs d’intelligence artificielle à l’éthique est donc essentielle.",
		image: "robot-juriste-adulte.png",
	},

	{
		message: "En fonction de vos réponses tout au long de l’éducation de (NOM), essayons de voir si vous avez adopté les bons réflexes.",
	},

	//Score mauvaise attitude --> Mini nouvelle sur l'avenir pessimiste de l'IA dans la justice 


]
