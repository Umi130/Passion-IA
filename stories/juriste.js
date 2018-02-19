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
		name: "firstchoice",
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


	{
		type: "explanation",
		message: "Vous soumettez un dossier pour tester votre algorithme.",
	},
	{
		type: "explanation",
		message: "Pour ce dossier, le salarié licencié devrait recevoir des indemnités égales à douze mois de salaire brut. Vous vous rendez compte que les textes de loi et la jurisprudence que vous avez soumis à l'algorithme étaient trop larges et l'indemnité est plus élevée que ce que prévoit la loi.",
		when: answers => answers.firstchoice === 'Tous les articles de loi'
	},

	{
		type: "explanation",
		message: "Scrap.",
	},

]