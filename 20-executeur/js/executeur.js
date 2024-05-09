function execute(operation, a, b){
	if(typeof operation != "string")
	{
		if(typeof operation != "number")
		{
	 		return operation(a, b);
		}
		else 
		{
			return "type d'operation inconnue";
		}
	}

	else 
	{
	 
		switch(operation){
	 		 case 'ADD':
	 		 	return a + b;
	 		 case 'SUB':
	 		 	return a - b;
	 		 case 'MUL':
	 		 	return a * b;
	 		default :
	 		 	return "Nom d'operation inconnue";	
		}
	}
}