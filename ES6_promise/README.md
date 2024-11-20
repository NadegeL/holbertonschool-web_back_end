L'interface Promise représente un intermédiaire (proxy) vers une valeur qui n'est pas nécessairement connue au moment de la création de la promesse. Cela permet d'associer des gestionnaires au succès éventuel d'une action asynchrone et à la raison d'une erreur. Ainsi, les méthodes asynchrones peuvent renvoyer des valeurs de manière similaire aux méthodes synchrones, la seule différence est que la valeur retournée par la méthode asynchrone est une promesse (d'avoir une valeur plus tard).

Une Promise est dans un de ces états :

pending (en attente) : état initial, la promesse n'est ni tenue, ni rompue ;
fulfilled (tenue) : l'opération a réussi ;
rejected (rompue) : l'opération a échoué.
Une promesse en attente peut être tenue avec une valeur ou rompue avec une raison (erreur). Quand on arrive à l'une des deux situations, les gestionnaires associés lors de l'appel de la méthode then sont alors appelés. Si la promesse a déjà été tenue ou rompue lorsque le gestionnaire est attaché à la promesse, le gestionnaire est appelé. Cela permet qu'il n'y ait pas de situation de compétition entre une opération asynchrone en cours et les gestionnaires ajoutés.