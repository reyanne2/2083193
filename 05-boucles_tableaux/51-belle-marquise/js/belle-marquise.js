' use strict '
const VIRGULE = ',';
const tableau = [
		'belle marquise',
		'vos beaux yeux',
		'me font mourir',
		'd\'amour'
		]
	
	function marquise(tableau){
	document.write("<ul> <li>" + tableau[0] + VIRGULE + tableau[1] + VIRGULE + tableau[2] + VIRGULE + tableau[3] + "." + "</li>" +
				"<li>" + tableau[1] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[2] + "." + "</li>" +
				 "<li>" + tableau[3] + VIRGULE + tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[1] + "." + "</li>" +
				"<li>" + tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[1] + "." + "</li> </ul>");
	}

marquise(tableau);
	