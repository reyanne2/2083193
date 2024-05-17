var nb = prompt("Choisissez un nombre");
var fact = 1;

function facto(){
		for (var i = nb; i>1; i-= 1)
	
		fact *= i;
		alert(" Factorielle " + nb + " = " + fact );
	
}

