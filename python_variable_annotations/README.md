Le typage en programmation définit la nature des valeurs que peuvent prendre les données que nous manipulons. Pour tester le type d’une variable en Python, on fait appel à la fonction type() qui retourne, sans surprise, le type de l’objet entré en paramètre de la fonction.

La fonction s’utilise comme suit :

a = 2 
type_de_a = type(a) 
view rawtype.py hosted with ❤ by GitHub
Le type de l’argument s’affiche à l’aide de la fonction print() sous la forme :
>> <class ‘int’>

Dans l’exemple ci-dessus, on teste une variable numérique entière, le type correspondant est int. En Python, il existe une multitude de types dits natifs, vous trouverez la liste exhaustive sur le site de la documentation officielle. Python, étant un langage dynamiquement typé, est assez flexible dans la gestion des types de données, mais cette flexibilité peut parfois entraîner des confusions et des erreurs. C’est là que les annotations de type entrent en jeu, ajoutant une couche supplémentaire de clarté et de vérification de type au code Python.