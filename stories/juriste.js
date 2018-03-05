const juriste = [
	{
		type: "explanation",
		message: "Vous êtes assis.e à votre bureau et contemplez la centaine de dossiers en attente de jugement. Vous faites partie de la chambre sociale notamment en charge des recours en cas de licenciement abusif. Comme la plupart des tribunaux français, le votre est encombré. Vous avez entendu parler d'outils d'intelligence artificielle pour traiter plus rapidement des dossiers. "
	},
	{
		type: "explanation",
		message: "Vous vous inspirez de de Case Law Analytics et de Predictice, deux entreprises françaises qui proposent ce genre de services surtout à des avocats et vous vous associez avec un ingénieur pour écrire un algorithme adapté aux magistrats."
	},
	{
		type: "explanation",
		message: "Un algorithme, ce sont les instructions qui commandent un programme informatique. Les instructions en justice, ce sont les textes de lois. Dans votre cas, c'est la loi qui encadre les licenciements abusifs."
	},
	{
		type: "explanation",
		message: "C'est un peu comme une recette de cuisine. Le résultat est le plat. Les ingrédients sont les données. Votre plat, ce sont les différents jugements que vous pouvez rendre sur un dossier. La recette, ce sont les critères qui motivent votre décision. "
	},
	{
		type: "illustration",
		src: "./assets/images/illust_bebejuge.png"
	},
		{
		type: "explanation",
		message: "Ce ne sont que quelques lignes de code mais vous vous prenez déjà d'affection pour ce super-assistant qui va faire diminuer la pile de dossier sur votre bureau. Vous décidez de lui donner un prénom."
	},
	{
		type: "choices",
		name: "name",
		message: "Vous l'appelez...",
		choices: [
			{
				"value": "Ross",
				"description": "Robot juriste start aux États-Unis"
			},
			{
				"value": "Agatha",
				"description": "Personnage pré-cognitif de Minority Report"
			},
			{
				"value": "Justum",
				"description": "Nominatif neutre : ce qui est juste en latin"
			}
		]
	},
	{
		type: "explanation",
		message: "Votre robot s'appelle {{ name }}",
		when: answers => answers.name !== 'Justum'
	},
	{
		type: "explanation",
		message: "Bravo vous n'êtes pas sexistes ! Votre robot s'appelle {{ name }}",
		when: answers => answers.name === 'Justum'
	},

	{
		type: "explanation",
		message: "Vous soumettez un premier dossier de votre pile pour tester l'algorithme. Le salarié licencié a droit à une indemnité comprise entre 1,5 et 6 mois de salaire brut.",
	},

	{
		type: "explanation",
		message: "Vous êtes complètement déçu… {{{\n}}} L’algorithme n’a fait que répéter ce qui est écrit dans la loi. Vous n’êtes pas très avancé.",
	},

	{
		type: "choices",
		name: "choice_premiereslois",
		message: "Vous choisissez de nourrir {{ name }} avec :",
		choices: [
			{
				"value": "Tous les articles de loi",
				"description": "Quelques 11 000 articles du code du travail et la jurisprudence associée"
			},
			{
				"value": "Que des décisions similaires",
				"description": "Vous soumettez à votre algorithme 1500 décisions qui ont été prises par vous et vos collègues dans des cas similaires depuis le changement de la loi sur les indemnités en cas de licenciement en septembre 2017"
			},
			]
	},


//Quelque soit le choix, afficher la même chose
	{
		type: "explanation",
		message: "Vous soumettez un dossier pour tester votre algorithme.",
	},

//Si choix - Que des décisions similaires
	{
		type: "explanation",
		message: "Pour ce dossier, le salarié licencié devrait recevoir des indemnités égales à douze mois de salaire brut. Vous vous rendez compte que les textes de loi et la jurisprudence que vous avez soumis à l'algorithme étaient trop larges et l'indemnité est plus élevée que ce que prévoit la loi.",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},
	{
		type: "explanation",
		message: "En donnant à l'algorithme trop de textes de lois et trop de jurisprudence vous prenez le risque de prendre en compte des dossiers trop différents de celui que vous souhaitez analyser. De plus, il y a des critères 'purement juridiques et d'autres purement humains dans une décision' (Jacques Levy-Vehel) et la loi ne suffit pas à tous les définir.",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},
	{
		type: "explanation",
		message: "Définir manuellement les critères qui motivent votre décision va prendre du temps. C'est le côté 'humain' de l'intelligence artificielle. Lorsqu'on soumet à l'algorithme une première base de données, il faut lui indiquer où sont les informations clés.",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},
	{
		type: "explanation",
		message: "Pour que {{ name }} puisse reconnaître les données importantes dans toutes les futures décisions que vous ajouterez à la base données, l'ingénieur vous conseille de recourir aux techniques de traitement automatique du langage naturel. Une partie de ce processus consiste à soumettre à la machine un texte à trous qu'elle doit remplir à partir des données qu'elle a traitées par le passé.",
		when: answers => answers.choice_premiereslois === 'Tous les articles de loi'
	},

//Si choix - Que des décisions similaires
	{
		type: "explanation",
		message: "Pour ce dossier, le salarié licencié devrait recevoir des indemnités égales à trois mois de salaire brut. Vous vous rendez compte que la décision n'a pas tenu compte de la zone géographique de votre cour. Vous auriez eu tendance à lui attribuer une indemnité d'au moins 6 mois de salaire brut.",
		when: answers => answers.choice_premiereslois === 'Que des décisions similaires'
	},
	{
		type: "explanation",
		message: "La définition manuelle des critères va prendre du temps, mais elle sera plus juste car elle tiendra compte des spécificités des dossiers. C'est le côté 'humain' de l'IA : lorsqu'on soumet une première base de données à l'algorithme, il faut lui indiquer où sont les informations clés.",
		when: answers => answers.choice_premiereslois === 'Que des décisions similaires'
	},
	{
		type: "explanation",
		message: "Pour que {{ name }} puisse reconnaître les données importantes dans toutes les futures décisions que vous ajouterez à la base données, l'ingénieur vous conseille de recourir aux techniques de traitement automatique du langage naturel. Une partie de ce processus consiste à soumettre à la machine un texte à trous qu'elle doit remplir à partir des données qu'elle a traitées par le passé.",
		when: answers => answers.choice_premiereslois === 'Que des décisions similaires'
	},

//TOCHANGE TO JUGE ENFANT
	{
		type: "illustration",
		src: "./assets/images/illust_jugeenfant.png"
	},

	{
		type: "explanation",
		message: "À chaque fois que la machine trouve le bon mot, elle est 'récompensée'. C'est en multipliant les exemples et les primes qu'elle finit par comprendre seule où se trouve l'information clé dans une phrase, en fonction des mots qui l'entourent. Pour nos dossiers, il faudrait apprendre à  {{ name }}  à repérer l'ancienneté d'un salarié dans l'entreprise - critère décisif pour définir le montant des indemnités. On essaye ?",
	},

//TOCHANGE TO INPUT
	{
		type: "choices",
		name: "choice_emploi_duree1",
		message: "M. Olivier Ferrand a travaillé 10...",
		choices: [
			{
				"value": "Pendant x ans",
				"description": ""
			},
			{
				"value": "Autre réponse",
				"description": ""
			},
			]
	},
//Si réponse correcte
	{
		type: "explanation",
		message: "Bonne réponse ! Ici, l'information clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, la machine doit reconnaître les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		when: answers => answers.choice_emploi_duree1 === 'Pendant x ans'
	},
//Si réponse incorrecte
	{
		type: "explanation",
		message: "Mauvaise réponse ! Ici, l'information clé est le nombre d'années passées dans l'entreprise. Pour repérer cette information, qui varie selon les salariés, la machine doit reconnaître les mots contextuels 'pendant' et 'ans' qui précèdent et suivent cette information.",
		when: answers => answers.choice_emploi_duree1 !== 'Pendant x ans'
	},

//TOCHANGE TO INPUT
	{
		type: "choices",
		name: "choice_emploi_duree2",
		message: "M. Corinne Duteil a été ... en 2013.",
		choices: [
			{
				"value": "embauchée en / engagée en / recrutée en",
				"description": ""
			},
			{
				"value": "Autre réponse",
				"description": ""
			},
			]
	},
//Si réponse correcte
	{
		type: "explanation",
		message: "Bonne réponse ! Plus l'information est énoncée de manière détournée, plus le taux d'erreur de la machine est élevé. 'Quand le taux d'erreur est supérieur à 15 ou 20%, on étiquette les données à la main', dit Jacques Levy-Vehel, co-fondateur de Case Law Analytics.",
		when: answers => answers.choice_emploi_duree2 === 'embauchée en / engagée en / recrutée en'
	},
//Si réponse incorrecte
	{
		type: "explanation",
		message: "Mauvaise réponse ! Plus l'information est énoncée de manière détournée, plus le taux d'erreur de la machine est élevé. 'Quand le taux d'erreur est supérieur à 15 ou 20%, on étiquette les données à la main', dit Jacques Levy-Vehel, co-fondateur de Case Law Analytics.",
		when: answers => answers.choice_emploi_duree2 !== 'embauchée en / engagée en / recrutée en'
	},


//Ajouter compte des bonnes & mauvaises réponses
	{
		type: "explanation",
		message: "Plutôt long et fastidieux comme tâche non? C'est la partie 'humaine' de l'intelligence artificielle. Selon la taille de la base de données, l'opération peut prendre plusieurs jours voire plusieurs semaines.",
	},


//Si toutes réponses correctes
	{
		type: "explanation",
		message: "Bravo. Le taux d'erreur de votre algorithme de traitement automatique du langage est inférieur à 15%, vous pourrez donc économiser de longues heures d'étiquetage manuel de vos données. Vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse 'prédire' la probabilité des différents jugements pour un nouveau dossier.",
		when: answers => answers.choice_emploi_duree1 === 'embauchée en / engagée en / recrutée en',
	},
//Sinon
	{
		type: "explanation",
		message: "Vous avez fait trop d'erreur dans les textes à trou. Votre algorithme de traitement automatique du langage n'est pas assez performant, le taux d'erreur est trop élevé. Vous devez étiqueter vos données manuellement. Vous perdez beaucoup de temps mais vous avez maintenant une base de données suffisamment complète pour que {{name}} puisse 'prédire' les différents jugements possibles et la probabilité qui leur est associée.",
		when: answers => answers.choice_emploi_duree1 !== 'embauchée en / engagée en / recrutée en',
	},

//TOCHANGE TO JUGE ADO
	{
		type: "illustration",
		src: "./assets/images/illust_jugeado.png"
	},

//Cas licenciements
	{
		type: "explanation",
		message: "Avant d'utiliser l'algorithme, il faudrait vérifier si ses prédictions reflètent la réalité des décisions que vous avez prises par le passé. Case Law Analytics nous conseille de comparer les statistiques sorties par l'algorithme à un groupe de décisions 'témoin'.",
	},
	{
		type: "explanation",
		message: "Mme.Petit, 10 d'ancienneté, 29 ans, ouvrière, entreprise de 10 salariés : indemnité selon l'IA 2,5 mois de salaire brut. A LA LIGNE M. Martin, 62 ans,10 ans d'ancienneté, cadre technique, entreprise de 25 salariés : indemnité selon le corpus texte 3 mois de salaire brut**",
	},
		{
		type: "explanation",
		message: "Vous ne comprenez pas pourquoi le montant des indemnités diffère entre M. Martin et Mme Petit : tous les deux ont travaillé pendant 10 ans dans l'entreprise. Vous avez pourtant fourni assez de données à votre programme pour qu'il puisse calculer le montant des indemnités en fonction de l'ancienneté du salarié.",
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
				"value": "Poste du salarié (cadre/non cadre)",
				"description": ""
			},
			]
	},
//Réponse correcte 3
	{
		type: "explanation",
		message: "Bravo ! Les indemnités diffèrent en fonction du nombre de salarié dans l'entreprise. ",
		when: answers => answers.choice_critereneglige === 'Nombre de salariés dans entreprise',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		message: "Faux. Les indemnités diffèrent en fonction du nombre de salariés dans l'entreprise. Il faut donc augmenter le poids de ce critère lorsque votre programme apprend à reconnaître les informations clés d'un dossier.",
		when: answers => answers.choice_critereneglige !== 'Nombre de salariés dans entreprise',
	},
//Nouveau choix proposé
	{
		type: "choices",
		name: "choice_critereneglige_automatise",
		message: "Vous décidez d'automatiser vos décisions sur les dossiers les plus simples pour consacrer plus de temps aux dossiers complexes.",
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
		message: "Vous risquez d'être sanctionné si vous oubliez le côté 'humain' de la justice. Une décision ne peut se baser uniquement sur un algorithme. Votre travail de juge ne consiste pas à trouver une machine pour vous remplacer. Le jugement doit être rédigé par un juge qui a connaissance du dossier.",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
		{
		type: "explanation",
		message: "Mieux vaut prendre le temps d'étudier chaque propositions de l'intelligence artificielle à la lumière des spécificités des dossiers et de la chambre chargée de les traiter.",
		when: answers => answers.choice_critereneglige_automatise === 'Oui',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		message: "Vous avez bien fait, même sur les dossiers les plus simples, les décisions ne peuvent être prises automatiquement car cela va à l'encontre de la nature même d'une procédure judiciaire.",
		when: answers => answers.choice_critereneglige_automatise !== 'Oui',
	},

//TOCHANGE TO JUGE ADULTE
	{
		type: "illustration",
		src: "./assets/images/illust_jugeadulte.png"
	},

	{
		type: "explanation",
		message: "Aux Etats-Unis, le logiciel Compas permet d'évaluer le risque de récidive d'un criminel. Les juges qui ont motivé leur décision de non remise en liberté en fonction des conclusions du programme ont été contraints de revoir leur jugement et de justifier leur décision par un raisonnement humain et non informatique.",
	},

//Choix Open source
	{
		type: "choices",
		name: "choice_opensource",
		message: "Plusieurs juges sont intéressés par votre outil.",
		choices: [
			{
				"value": "Vous décidez de le rendre accessible en Open source",
				"description": "un programme lisible, modifiable et utilisable par tous (magistrats, avocats et juristes) gratuitement"
			},
			{
				"value": "Vous décidez de le diffuser uniquement aux magistrats",
				"description": "pour éviter que le programme ne soit modifié ou utilisé à mauvais escient."
			},
			]
	},
//Si bonne réponse
	{
		type: "explanation",
		message: "Bonne réponse ! Vous prenez le risque que votre programme soit modifié, mais l'Open Source permettra à chacun d'apprécier les fondements de la décision prise par le juge qui l'utilisera. Vous ne serez pas personnellement responsable de l'utilisation de cet outil. De plus, en le rendant gratuit vous évitez la création de nouvelles inégalités entre les professionnels de la justice qui pourraient se l'offrir et ceux qui ne pourraient pas.",
		when: answers => answers.choice_opensource === 'Vous décidez de le rendre accessible en Open source',
	},
	{
		type: "explanation",
		message: "Après plusieurs mois d'utilisation de votre algorithme, vous êtes confronté.e à un nouveau type de contestation. Une association a étudié en détail votre algorithme qui était en accès libre. Elle lui a soumis des dossiers similaires et a mis en avant que les indemnités proposées aux femmes par l'intelligence artificielle sont souvent inférieures à celles proposées aux hommes.",
		when: answers => answers.choice_opensource === 'Vous décidez de le rendre accessible en Open source',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		message: "Après plusieurs mois d'utilisation de votre algorithme, vous êtes confronté à un nouveau type de contestation. Des hackers ont réussi à pirater votre programme. Ils lui ont soumis des dossiers similaires et ont mis en avant que les indemnités proposées aux femmes par l'intelligence artificielle sont souvent inférieures à celles proposées aux hommes.",
		when: answers => answers.choice_opensource === 'Vous décidez de le rendre accessible en Open source',
	},


	{
		type: "explanation",
		message: "Mauvaise réponse ! En rendant le code de votre algorithme secret, vous exposez les juges qui l'utiliseront à des contestations : il faut que ceux-ci sachent sur quel critères se basent votre algorithme pour en tenir compte dans leur décision. Pour assurer la transparence d'une décision il faut que l'outil que vous utilisez le soit aussi.  ",
		when: answers => answers.choice_opensource === 'Vous décidez de le rendre accessible en Open source',
	},


//Indemnités homme/femme
	{
		type: "choices",
		name: "choice_indemniteshommefemme",
		message: "Les indemnités sont calculées en fonction du salaire. Si le salaire des femmes est moins élevé, les indemnités seront moins élevées. Vous considérez que cet argument est :",
		choices: [
			{
				"value": "Valide",
				"description": ""
			},
			{
				"value": "Invalide",
				"description": ""
			},
			]
	},
//Si bonne réponse
	{
		type: "explanation",
		message: "Le raisonnement est plutôt logique, mais les contestations concernent des dossiers similaires* dans lesquels les femmes touchent autant que les hommes.",
		when: answers => answers.choice_indemniteshommefemme === 'Valide',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		message: "Le raisonnement est plutôt logique, mais les contestations concernent des dossiers similaires dans lesquels les femmes touchent autant que les hommes.",
		when: answers => answers.choice_indemniteshommefemme !== 'Valide',
	},

	{
		type: "explanation",
		message: "Des études montrent également que dans certains domaines du droit, il y a une différence de traitement entre les femmes et les hommes. Ces derniers écopent par exemple de peines de prison plus lourdes. Le biais peut donc se situer dans l'appréciation personnelle des juges et se refléter dans la base de données soumise à l'algorithme.",
	},


//Biais indemnités homme/femme
	{
		type: "choices",
		name: "choice_indemniteshommefemme_biais",
		message: "",
		choices: [
			{
				"value": "Vous corrigez",
				"description": "votre programme pour que le mot 'Madame' ne soit pas associé à des indemnités plus faibles que celles des hommes."
			},
			{
				"value": "Vous anonymisez",
				"description": "toutes les décisions de votre base de données."
			},
			]
	},
//Si bonne réponse
	{
		type: "explanation",
		message: "Si vous voulez utiliser l'intelligence artificielle dans d'autres domaines que celui des indemnités de licenciement, il vous faudra répéter cette manipulation à chaque fois que vous trouverez un biais issu de la base de données et mal interprété par le système de traitement automatique du langage.",
		when: answers => answers.choice_indemniteshommefemme_biais === 'Vous anonymisez',
	},
//Si mauvaise réponse
	{
		type: "explanation",
		message: "Le raisonnement est plutôt logique, mais les contestations concernent des dossiers similaires dans lesquels les femmes touchent autant que les hommes.",
		when: answers => answers.choice_indemniteshommefemme_biais !== 'Vous anonymisez',
	},

	{
		type: "explanation",
		message: "L'anonymisation des données est un enjeu clé dans le domaine juridique. Depuis le vote de la loi pour une République Numérique en octobre 2016 et la publication du rapport Cadiet sur l'open-data dans le monde de la justice, les professionnels du secteur attendent une décision sur la question.",
	},
	{
		type: "explanation",
		message: "Avocats, juristes et magistrats sont nombreux à s'inquiéter d'une intelligence artificielle qui utiliserait des données non anonymisées notamment dans le cadre de procédure pénale. ",
	},
	{
		type: "explanation",
		message: "CITATION PHILOSOPHIQUE A TROUVER SUR L'AVENIR DE LA JUSTICE AVEC L'INTELLIGENCE ARTIFICIELLE",
	},

	{
		type: "explanation",
		message: "Mais concentrons-nous sur l'avenir de l'intelligence artificielle dans la justice en fonction des décisions que vous avez prises tout au long de ce parcours. Notre algorithme va calculer votre score.",
	},

	//Score mauvaise attitude --> Mini nouvelle sur l'avenir pessimiste de l'IA dans la justice 


]