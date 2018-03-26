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
		type: "explanation",
		title: "Vous êtes assis·e à votre bureau...",
		message: "Vous contemplez la centaine de dossiers en attente de jugement. Vous êtes notamment en charge des recours en cas de licenciement abusif.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "explanation",
		title: "",
		message: "Comme la plupart des tribunaux français, le vôtre est encombré. Vous avez entendu parler d'outils d'intelligence artificielle pour traiter plus rapidement des dossiers.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "explanation",
		message: "Vous vous inspirez de Case Law Analytics et de Predictice, deux entreprises françaises qui proposent ce genre de services à des avocats. Vous vous associez avec un ingénieur pour écrire un algorithme adapté aux magistrats.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "explanation",
		title: "Qu'est-ce qu'un algorithme ?",
		message: "Ce sont les instructions qui commandent un programme informatique. C'est un peu comme une recette de cuisine. Les ingrédients sont les données ; votre plat, ce sont les différents jugements.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "explanation",
		title: "L'ingrédient principal",
		message: "Votre algorithme doit se nourrir de la loi qui détermine le montant des indemnités de licenciement d'un salarié.",
		image: "robot-juriste-bebe.png",
	},

	{
		type: "explanation",
		message: "Ce ne sont que quelques lignes de code, mais vous vous prenez déjà d'affection pour ce super-assistant qui va faire diminuer la pile de dossiers sur votre bureau. Vous décidez de lui donner un prénom.",
		image: "robot-juriste-bebe.png"
	},

	{
		type: "choices",
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
		type: "explanation",
		title: "Premier dossier",
		message: "Mme Laurent a été victime d'un licenciement abusif après avoir travaillé cinq ans dans un petit magasin.",
		image: "robot-juge-marteau-anime.gif",
//		when: answers => answers.name !== 'Justum'
	},
	
	{ 
		type: "explanation",
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
		type: "explanation",
		title: "Vous demandez conseil.",
		message: "Jacques Levy Vehel, le co-fondateur de Case Law Analytics, vous assiste.",
			image: "experts-juriste-vehel.jpg",
	},
	{
		type: "explanation",
		message:"«L'intelligence artificielle calcule ces probabilités grâce à un algorithme: à condition qu'on lui donne assez d'exemples, elle pourra simuler les différentes décisions possibles pour un cas particulier.»",
			image: "experts-juriste-vehel.jpg",
	}, 

	{
		type: "explanation",
		message: "Votre algorithme a donc besoin de plus de précisions quant aux critères qui motivent votre décision.",
		image: "robot-juriste-bebe.png",
	},
	{
		type: "choices",
		name: "choice_premiereslois",
		message: "Vous choisissez de nourrir {{ name }} avec :",
		choices: [
			{
				"value": "Tous les articles de loi",
				"description": "Quelque 11 000 articles du code du travail et la jurisprudence associée",
			},
			{
				"value": "Uniquement des décisions similaires",
				"description": "1 500 décisions prises par vous et vos collègues dans des cas similaires depuis le changement de la loi en septembre 2017",
			},
		]
	},

//Si choix - Tous les articles de loi
	{	
		type: "explanation",
		title: "Deuxième dossier",
		message: "Vous soumettez un dossier de votre pile pour tester {{ name }}. M. Husson a été victime d'un licenciement abusif après avoir travaillé 10 ans dans une entreprise de télécommunication.",
		image: "robot-juge-marteau-anime.gif",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},

	{
		type: "explanation",
		title: "Résultat de l'algorithme :",
		message: "M. Husson devrait recevoir douze mois de salaire brut en indemnité. Ce n'est plus une fourchette... mais le montant des indemnités est supérieur à ce que prévoit la loi actuelle.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		type: "explanation",
		message: "L'algorithme a pris en compte toutes les décisions liées aux lois précédentes. Le résultat est faussé.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		type: "explanation",
		message: "En donnant à l'algorithme trop de textes de lois et trop de jurisprudence, vous prenez le risque de prendre en compte des dossiers trop différents de celui que vous souhaitez analyser.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},
	{
		type: "explanation",
		message: "Définir manuellement les critères qui motivent votre décision va prendre du temps. C'est le côté «humain» de l'IA.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi',
	},

//Si choix - Que des décisions similaires
	{	
		type: "explanation",
		title: "Deuxième dossier",
		message: "M. Husson a été victime d'un licenciement abusif après avoir travaillé 10 ans dans une entreprise de télécommunication.",
		image: "robot-juge-marteau-anime.gif",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},

	{
		type: "explanation",
		title: "Résultat de l'algorithme :",
		message: "M. Husson devrait recevoir trois mois de salaire brut en indemnités. C'est un résultat précis... mais vous vous rendez compte que {{name}} n'a pas tenu compte de la zone géographique de votre cour.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
	{
		type: "explanation",
		message: "Vous auriez eu tendance à lui attribuer une indemnité d'au moins 6 mois de salaire brut puisque le chômage est plus élevé dans votre région.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
	{
		type: "explanation",
		message: "La définition manuelle des critères vous prend du temps, mais elle sera plus juste, car elle tiendra compte des spécificités des dossiers. C'est le côté «humain» de l'IA.",
		image: "robot-juriste-bebe.png",
		when: answers => answers.choice_premiereslois !== 'Tous les articles de loi',
	},
////////////////
// ROBOT ENFANT
////////////////
	{
		type: "explanation",
		title: "Conseil de l'ingénieur",
		message: "Pour que {{ name }} puisse reconnaître les données importantes dans toutes les futures décisions que vous ajouterez à la base de données, il faut recourir aux techniques de traitement automatique du langage naturel.",
		image: "robot-juriste-enfant.png",
	},

	{
		type: "explanation",
		message: "Une partie de ce processus consiste à soumettre à {{name}} un texte à trous. À chaque fois que la machine trouve le bon mot, elle est récompensée.",
		image: "robot-juriste-enfant.png",
	},
	{
		type: "explanation",
		message: "C'est en multipliant les exemples que {{name}} finit par comprendre où se situe l'information-clé dans une phrase, en fonction des mots qui l'entourent. Pour nos dossiers, {{ name }}  doit repérer l'ancienneté d'un salarié dans l'entreprise, critère décisif pour définir le montant des indemnités. On essaye ?",
		image: "robot-juriste-enfant.png",
	},


//INPUT OLIVIER FERRAND 
	{
		type: "blanks",
		name: "blanks_emploi_duree1",
		message: "M. Olivier Ferrand a travaillé",
		blanks: [
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
		type: "explanation",
		title: "Bonne réponse !",
		message: "Ici, l'information-clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, {{name}} doit identifier les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		image: "robot-juriste-enfant.png",
		when: answers => answers.blanks_emploi_duree1 
	},
//Si réponse incorrecte
	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "Ici, l'information-clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, {{name}} doit reconnaître les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		image: "robot-juriste-enfant-etonne.png",
		when: answers => !answers.blanks_emploi_duree1 
	},

//INPUT CORINNE DUTEIL
	{
		type: "blanks",
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
		type: "explanation",
		title: "Bonne réponse !",
		message: "Ici, trois réponses étaient possibles : 'embauchée', 'recrutée' ou 'engagée'. Plus il y a de manières d'exprimer une idée, plus {{name}} mettra du temps à reconnaître l'information.",
		image: "robot-juriste-enfant.png",
		when: answers => answers.blanks_emploi_duree2 
	},
//Si réponse incorrecte
	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "Ici, trois réponses étaient possibles : 'embauchée', 'recrutée' ou 'engagée'. Plus il y a de manières d'exprimer une idée, plus {{name}} mettra du temps à reconnaître l'information.",
		image: "robot-juriste-enfant-etonne.png",
},

//Si toutes réponses correctes
	{
		type: "explanation",
		title: "Bravo !",
		message: "Le taux d'erreur de {{name}} est inférieur à 15%, vous pourrez donc économiser de longues heures d'étiquetage manuel de vos données. Vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse 'prédire' la probabilité des différents jugements pour un nouveau dossier.",
		when: answers => answers.blanks_emploi_duree1 && answers.blanks_emploi_duree2,
		image: "robot-juriste-ado.png",
	},
//Sinon
	{
		type: "explanation",
		title: "Vous avez fait trop d'erreurs...",
		message: "Vous devez étiqueter vos données manuellement. Vous perdez beaucoup de temps, mais vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse «prédire» la probabilité des différents jugements pour un nouveau dossier.",
		image: "robot-juriste-ado-etonne.png",
		when: answers => !answers.blanks_emploi_duree1 || !answers.blanks_emploi_duree2,
	},

{
		type: "explanation",
		title: "",
		message: "«Quand le taux d'erreur est supérieur à 15 ou 20%, on étiquette les données à la main.» (Jacques Levy-Vehel, co-fondateur de Case Law Analytics)",
		image: "experts-juriste-vehel.jpg",
	},


//TODO Ajouter compte des bonnes & mauvaises réponses
	{
		type: "explanation",
		title: "Une tâche longue et fastidieuse...",
		message: "C'est la partie «humaine» de l'intelligence artificielle. Selon la taille de la base de données, l'opération peut prendre plusieurs jours, voire plusieurs semaines.",
		image: "robot-juge-marteau-anime.gif",	
	},


////////////////
// ROBOT ADO
////////////////

//Cas licenciements
	{
		type: "explanation",
		message: "Avant d'utiliser {{name}}, il faut vérifier si ses prédictions reflètent la réalité des décisions que vous avez prises par le passé. Case Law Analytics vous conseille de comparer les statistiques générées par {{name}} à un corpus de décisions «témoin».",
			image: "robot-juriste-ado.png",
	},

//TODO TABLEAU
	{
		type: "explanation",
		message: "Mme Petit : 29 ans, 10 ans d'ancienneté, ouvrière, entreprise de 10 salariés. Indemnité selon l'IA : 2,5 mois de salaire brut. M. Martin : 62 ans, 10 ans d'ancienneté, cadre technique, entreprise de 25 salariés. Indemnité selon le corpus de décisions témoin : 3 mois de salaire brut.",
		image: "robot-juriste-ado.png",
	},
	{
		type: "explanation",
		title: "Le montant des indemnités est différent...",
		message: "Vous ne comprenez pas pourquoi : Mme Petit et M. Martin ont pourtant travaillé tous deux 10 ans dans l'entreprise.",
			image: "robot-juriste-ado-etonne.png",
	},
	{
		type: "explanation",
		message: "Vous aviez pourtant programmé {{name}} pour calculer le montant des indemnités en fonction de l'ancienneté du salarié.",
		image: "robot-juriste-ado-etonne.png",
	},
//Choix proposé
	{
		type: "choices",
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
		type: "explanation",
		title: "Bravo !",
		message: "Depuis 2017, les indemnités diffèrent en fonction du nombre de salarié dans l'entreprise. ",
		image: "robot-juriste-ado.png",
		when: answers => answers.choice_critereneglige === 'Nombre de salariés dans entreprise',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "Les indemnités diffèrent en fonction du nombre de salariés dans l'entreprise. Il faut donc augmenter le poids de ce critère lorsque {{name}} apprend à reconnaître les informations-clés d'un dossier.",
		image: "robot-juriste-ado-etonne.png",
		when: answers => answers.choice_critereneglige !== 'Nombre de salariés dans entreprise',
	},

// Etape commune 	
	{
		type: "explanation",
		title: "Votre algorithme est maintenant bien entraîné !",
		message:"Vous lui soumettez un nouveau dossier : M. Olivier a été victime d'un licenciement abusif après avoir travaillé pendant 1 an dans une start-up.", 
		image: "robot-juge-marteau-anime.gif",
	},

////////////////
// ROBOT ADULTE
////////////////

	{
		type: "explanation",
		title: "Résultat de l'algorithme :",
		message: "M. Olivier devrait avoir 1 mois de salaire brut d'indemnité. C'est exactement ce que vous auriez décidé en étudiant vous-même le dossier.",
		image: "robot-juriste-adulte.png",
	},
	{
		type: "explanation",
		title: "Les dossiers s'enchaînent...",
		message: "La pile fond comme neige au soleil. Vous avez beaucoup plus de temps à consacrer aux dossiers compliqués.",
		image: "robot-juriste-adulte.png",
},
	{
		type: "explanation",
		message: "Pour chaque affaire, {{name}} vous propose plusieurs décisions et les classe en fonction de leur probabilité. Pour les dossiers les plus simples, une décision se dégage souvent avec un taux de probabilité supérieur à 90%.",
		image: "robot-juriste-adulte.png",
	},	 
//Nouveau choix proposé
	{
		type: "choices",
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
		type: "explanation",
		title: "Attention !",
		message: "Vous risquez d'être sanctionné si vous oubliez le côté «humain» de la justice. Une décision ne peut se baser uniquement sur un algorithme : {{name}} ne peut être qu'un outil d'aide à la décision.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
		{
		type: "explanation",
		message: "Mieux vaut prendre le temps d'étudier chaque propositions de l'intelligence artificielle à la lumière des spécificités des dossiers, et de la chambre chargée de les traiter.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		title: "Vous faites bien...",
		message: "Même sur les dossiers les plus simples, les décisions ne peuvent être prises automatiquement car cela va à l'encontre de la nature même d'une procédure judiciaire. {{name}} ne peut être qu'un outil d'aide à la décision.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_critereneglige_automatise === 'Non',
	},

// commun à tous 
	{
		type: "explanation",
		title: "La situation aux Etats-Unis",
		message: "Le logiciel Compas permet d'évaluer le risque de récidive d'un criminel. Mais les juges qui ne se basaient que sur ce programme ont été contraints de revoir leur jugement, et de justifier leur décision par un raisonnement humain et non informatique.",
		image: "experts-juriste-compas.jpg",
	},

//Choix Open source
	{
		type: "choices",
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
		type: "explanation",
		title: "Bonne réponse !",
		message: "Vous prenez le risque que {{name}} soit modifié, mais l'Open Source permettra à chacun d'apprécier les fondements de la décision prise par le juge qui l'utilise. En le rendant gratuit, vous évitez la création de nouvelles inégalités entre les professionnels de la justice qui pourraient se l'offrir et ceux qui ne le pourraient pas.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource === 'Le rendre accessible en Open source',
	},
	{
		type: "explanation",
		title: "Après plusieurs mois d'utilisation...",
		message: "Vous êtes confronté·e à un nouveau type de contestation. Une association a étudié en détail votre algorithme. Elle lui a soumis des dossiers similaires : les résultats montrent que les indemnités proposées aux femmes par {{name}} sont souvent inférieures à celles proposées aux hommes.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource === 'Le rendre accessible en Open source',
	},

//Si mauvaise réponse

	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "En rendant le code de {{name}} secret, vous exposez les juges qui l'utiliseront à des contestations : il faut que ceux-ci sachent sur quels critères se basent {{name}}. Pour assurer la transparence d'une décision, il faut que l'outil que vous utilisez le soit aussi.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_opensource !== 'Le rendre accessible en Open source',
	},
	{
		type: "explanation",
		title: "Après plusieurs mois d'utilisation...",
		message: "Vous êtes confronté·e à un nouveau type de contestation. Des hackers ont réussi à pirater votre programme. Ils lui ont soumis des dossiers similaires : les résultats montrent que les indemnités proposées aux femmes par {{name}} sont souvent inférieures à celles proposées aux hommes.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_opensource !== 'Le rendre accessible en Open source',
	},


//Indemnités homme/femme
	{
		type: "choices",
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
		type: "explanation",
		title: "Bonne réponse !",
		message: "Le raisonnement est plutôt logique, car les contestations concernent des dossiers similaires, dans lesquels les femmes touchent autant que les hommes.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_indemniteshommefemme === "Argument invalide",
	},
//Si mauvaise réponse
	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "Le raisonnement est plutôt logique, mais les contestations concernent des dossiers similaires, dans lesquels les femmes touchent autant que les hommes.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_indemniteshommefemme !== "Argument invalide",
	},


	{
		type: "explanation",
		title: "Biais de traitement",
		message: "Des études montrent également que dans certains domaines du droit, il y a une différence de traitement entre les femmes et les hommes. Ces derniers écopent par exemple de peines de prison plus lourdes.",
		image: "robot-juriste-adulte.png",
	},

	{
		type: "explanation",
		message: "Le biais peut donc se situer dans l'appréciation personnelle des juges et se refléter dans la base de données soumise à l'algorithme.",
		image: "robot-juriste-adulte.png",
	},


//Biais indemnités homme/femme
	{
		type: "choices",
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
		type: "explanation",
		title: "Bonne réponse !",
		message: "En prenant l'habitude d'anonymiser vos données, vous éviterez les biais liés au sexe des individus dans tous les domaines du droit que vous souhaitez couvrir avec votre intelligence artificielle.",
		image: "robot-juriste-adulte.png",
		when: answers => answers.choice_indemniteshommefemme_biais === "Anonymiser les décisions",
	},
//Si mauvaise réponse
	{
		type: "explanation",
		title: "Mauvaise réponse !",
		message: "Si vous voulez utiliser l'intelligence artificielle dans d'autres domaines que celui des indemnités de licenciement, il vous faudra répéter cette manipulation à chaque fois que vous trouverez un biais issu de la base de données et mal interprété par le système de traitement automatique du langage.",
		image: "robot-juriste-adulte-etonne.png",
		when: answers => answers.choice_indemniteshommefemme_biais !== "Anonymiser les décisions",
	},

	{
		type: "explanation",
		title: "L'anonymisation des données est un enjeu-clé",
		message: "Depuis le vote de la loi pour une République Numérique en octobre 2016, et la publication du rapport Cadiet sur l'open data dans le monde de la justice, les professionnels du secteur attendent une décision sur la question.",
		image: "robot-juriste-adulte.png",
	},
	{
		type: "explanation",
		message: "Avocats, juristes et magistrats sont nombreux à s'inquiéter d'une intelligence artificielle qui utiliserait des données non anonymisées, notamment dans le cadre de procédure pénale.",
		image: "robot-juriste-adulte.png",
	},

	{
		type: "explanation",
		message: "CITATION PHILOSOPHIQUE A TROUVER SUR L'AVENIR DE LA JUSTICE AVEC L'INTELLIGENCE ARTIFICIELLE",
		image: "robot-juriste-adulte.png",
	},

	{
		type: "explanation",
		message: "Mais concentrons-nous sur l'avenir de l'intelligence artificielle dans la justice en fonction des décisions que vous avez prises tout au long de ce parcours. Notre algorithme va calculer votre score.",
	},

	//Score mauvaise attitude --> Mini nouvelle sur l'avenir pessimiste de l'IA dans la justice 


]
