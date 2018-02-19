const juriste = [
	{
		"type": "explanation",
		"message": "Vous êtes assis.e à votre bureau et contemplez la centaine de dossiers en attente de jugement. Vous faites partie de la chambre sociale notamment en charge des recours en cas de licenciement abusif. Comme la plupart des tribunaux français, le votre est encombré. Vous avez entendu parler d'outils d'intelligence artificielle pour traiter plus rapidement des dossiers. "
	},
	{
		"type": "explanation",
		"message": "Vous vous inspirez de de Case Law Analytics et de Predictice, deux entreprises françaises qui proposent ce genre de services surtout à des avocats et vous vous associez avec un ingénieur pour écrire un algorithme adapté aux magistrats."
	},
	{
		"type": "explanation",
		"message": "Un algorithme, ce sont les instructions qui commandent un programme informatique. Les instructions en justice, ce sont les textes de lois. Dans votre cas, c'est la loi qui encadre les licenciements abusifs."
	},
	{
		"type": "explanation",
		"message": "C'est un peu comme une recette de cuisine. Le résultat est le plat. Les ingrédients sont les données. Votre plat, ce sont les différents jugements que vous pouvez rendre sur un dossier. La recette, ce sont les critères qui motivent votre décision. "
	},
	{
		"type": "illustration",
		"src": "./assets/images/Robot.png"
	},
	{
		"type": "choices",
		"name": "name",
		"message": "Vous l'appelez...",
		"choices": [
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
		"type": "explanation",
		"message": "Votre robot s'appelle {{ name }}"
	}
];