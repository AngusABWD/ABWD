
	window.onload = Init1 ();
	window.onload = Init2 ();
	window.onload = Init3 ();
	window.onload = Init4 ();
	
	bouton1.oncontextmenu = function() { // Suppression du menu droit pour bouton, qui permettra un deffilement bouton droit/gauche
	return false;
	}
	bouton2.oncontextmenu = function() { // Suppression du menu droit pour bouton, qui permettra un deffilement bouton droit/gauche
	return false;
	}
	bouton3.oncontextmenu = function() { // Suppression du menu droit pour bouton, qui permettra un deffilement bouton droit/gauche
	return false;
	}
	bouton4.oncontextmenu = function() { // Suppression du menu droit pour bouton, qui permettra un deffilement bouton droit/gauche
	return false;
	}
	
	
	
	var cBo1=-10;// Variable de départ de la position de sélection supérieur au nombre de positions
	var cBo2=-10;// Variable de départ de la position de sélection supérieur au nombre de positions
	var cBo3=-10;// Variable de départ de la position de sélection supérieur au nombre de positions
	var cBo4=-10;// Variable de départ de la position de sélection supérieur au nombre de positions
	var cBom1=0;// Variable de mémoire de la position du bouton 1
	var cBom2=0;// Variable de mémoire de la position du bouton 2
	var cBom3=0;// Variable de mémoire de la position du bouton 3
	var cBom4=0;// Variable de mémoire de la position du bouton 4
	var rolled = 0;// Initialisation de la variable qui quatifiera le scroll souris
	var etatPower=0;//Permet de savoir si Power est on ou off
	var etatAngus=0;//Permet de savoir si Angus est utilliser
	var helpb=0;//Permet de savoir si Angus vous a déja expliquer la sélection du bouton
	var opacite=0;//variable permettant de faire des "fondu"

	function power() {//Fonction permettant l'actionnement du bouton power et d'identifier son état
		if ( etatPower == 0 ) {//test pour la procédure "Allumage"
        text.scrollTop= bienvenue.offsetTop;
		doc.scrollTop= angusguitare.offsetTop;
		document.getElementById('angusPowerSon').play();
		document.getElementById('boutonPower').style.transform = "rotate(180deg)";
		document.getElementById('boutonPower').style.opacity = 1;
		document.getElementById('haloPower').style.opacity = 1;
		fade();
		etatPower= 1;
			if ( etatAngus == 1 ) {//Bascule sur l'aide Bouton après l'allumage
				document.getElementById('angusPower').style.opacity= 0;
				document.getElementById('angusBouton1').style.opacity= 1;
				document.getElementById('angusBouton2').style.opacity= 0;
			}
		}
		else {// Eteindre
		document.getElementById('halo1').style.opacity='0';
		document.getElementById('halo2').style.opacity='0';
		document.getElementById('halo3').style.opacity='0';
		document.getElementById('halo4').style.opacity='0';
		document.getElementById('bruitBouton').play();
		document.getElementById('boutonPower').style.transform = "rotate(0deg)";
		document.getElementById('boutonPower').style.opacity = 0.6;
		document.getElementById('haloPower').style.opacity = 0;
		text.style.opacity= 0;
		doc.style.opacity= 0;
		if ( etatAngus == 1 ) {//Conserve l'aide sur le bouton Power
				document.getElementById('angusPower').style.opacity= 1;
				document.getElementById('angusBouton1').style.opacity= 0;
				document.getElementById('angusBouton2').style.opacity= 0;
			}		
		etatPower= 0;
		cBo1=-10;
		cBo2=-10;
		cBo3=-10;
		cBo4=-10;
		helpb=0;
		opacite=0;
		}
	console.log (etatPower);
	}
	
	function fade() {//fonction permettant un affichage progressif a l'allumage
		setTimeout( function () {
			text.style.opacity= opacite*0.025;
			doc.style.opacity= opacite*0.025;
			opacite++;
			if ( opacite<41 ) {
				fade();
			}
		},100)
	}
	
	function MouseScroll1 (event) { // Fonction permettant de définir lors d'un scroll si il est positif ou négatif modifiant la variable de position du bouton1
            if ('wheelDelta' in event) {
                rolled = event.wheelDelta;// soit 120 soit -120
            }
            else {  // Firefox
                rolled = -40 * event.detail;
            }
			if ( rolled == 120 && cBo1 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo1 = cBo1-1;// -1 en position
			}
			if ( rolled == -120 && cBo1 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo1 = cBo1+1;// +1 en position
			}
			helpb= helpb + 1;// pour l'état de l'aide	
			menu1();// Appel de la fonction affichant la position
			console.log(cBo1); 
	}
	function MouseScroll2 (event) { // Fonction permettant de définir lors d'un scroll si il est positif ou négatif modifiant la variable de position du bouton2
            if ('wheelDelta' in event) {
                rolled = event.wheelDelta;// soit 120 soit -120
            }
            else {  // Firefox
                rolled = -40 * event.detail;
            }
			if ( rolled == 120 && cBo2 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo2 = cBo2-1;// -1 en position
			}
			if ( rolled == -120 && cBo2 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo2 = cBo2+1;// +1 en position
			}
			menu2();// Appel de la fonction affichant la position
			console.log(cBo2); 
	}
	function MouseScroll3 (event) { // Fonction permettant de définir lors d'un scroll si il est positif ou négatif modifiant la variable de position du bouton3
            if ('wheelDelta' in event) {
                rolled = event.wheelDelta;// soit 120 soit -120
            }
            else {  // Firefox
                rolled = -40 * event.detail;
            }
			if ( rolled == 120 && cBo3 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo3 = cBo3-1;// -1 en position
			}
			if ( rolled == -120 && cBo3 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo3 = cBo3+1;// +1 en position
			}
			menu3();// Appel de la fonction affichant la position
			console.log(cBo3); 
	}
	function MouseScroll4 (event) { // Fonction permettant de définir lors d'un scroll si il est positif ou négatif modifiant la variable de position du bouton4
            if ('wheelDelta' in event) {
                rolled = event.wheelDelta;// soit 120 soit -120
            }
            else {  // Firefox
                rolled = -40 * event.detail;
            }
			if ( rolled == 120 && cBo4 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo4 = cBo4-1;// -1 en position
			}
			if ( rolled == -120 && cBo4 > -10 ) { //Condition pour obliger un click avant de scroll
			cBo4 = cBo4+1;// +1 en position
			}
			menu4();// Appel de la fonction affichant la position
			console.log(cBo4); 
	}
	
	function selection1() { // Fonction permettant de définir lors d'un clic si il est droit/centre  ou gauche modifiant la variable de position du bouton1
		if ( etatPower == 1 ) {	//Test si l'ampli est sur "on"
			var mouseClick = window.event ;
			if ( cBo1 < -9 ) {// Initialisation de la position en forçant un clic 
				if ( mouseClick.button == 2 ) {// Initialisation de la position en forçant un clic gauche
					cBo1=-10;
				}
				else {
				cBo1=cBom1-1;// Rappel de la position en mémoire
				document.getElementById('halo2').style.opacity="0";	//initialisation des 3 autres boutons
				document.getElementById('halo3').style.opacity="0";	
				document.getElementById('halo4').style.opacity="0";	
				cBo2 = -10;
				cBo3 = -10;
				cBo4 = -10;
				}
			}
			if ( mouseClick.button == 2 ) {// Click gauche
				cBo1 = cBo1-1;// -1 en position				
			}
			else {
				cBo1 = cBo1+1;// +1 en position
			}			
			helpb= helpb + 1;// incrémente l'état de l'aide à chaque click
			if ( etatAngus == 1 && helpb == 1) {//Permet d'afficher la suite de l'aide
				document.getElementById('angusPower').style.opacity= 0;
				document.getElementById('angusBouton1').style.opacity= 0;
				document.getElementById('angusBouton2').style.opacity= 1;
			}	
			menu1();// Appel de la fonction affichant la position
			console.log(cBo1);
			
						
		}
		
	}
	  
    function selection2() { // Fonction permettant de définir lors d'un clic si il est droit/centre  ou gauche modifiant la variable de position du bouton2
		if ( etatPower == 1 ) {	
			var mouseClick = window.event;
			if ( cBo2 < -9 ) {// Initialisation de la position en forçant un clic 
				if ( mouseClick.button == 2 ) {// Initialisation de la position en forçant un clic gauche
					cBo2=-10;
				}
				else {
				cBo2=cBom2-1;// Rappel de la position en mémoire
				document.getElementById('halo1').style.opacity="0";	
				document.getElementById('halo3').style.opacity="0";	
				document.getElementById('halo4').style.opacity="0";	
				cBo1 = -10;
				cBo3 = -10;
				cBo4 = -10;
				}
			}
			if ( mouseClick.button == 2 ) {// Click gauche
				cBo2 = cBo2-1;// -1 en position				
			}
			else {
				cBo2 = cBo2+1;// +1 en position
			}
			menu2();// Appel de la fonction affichant la position
			console.log(cBo2);
		}
		
	}

    function selection3() { // Fonction permettant de définir lors d'un clic si il est droit/centre  ou gauche modifiant la variable de position du bouton3
		if ( etatPower == 1 ) {	
			var mouseClick = window.event;
			if ( cBo3 < -9 ) {// Initialisation de la position en forçant un clic 
				if ( mouseClick.button == 2 ) {// Initialisation de la position en forçant un clic gauche
					cBo3=-10;
				}
				else {
				cBo3=cBom3-1;// Rappel de la position en mémoire
				document.getElementById('halo1').style.opacity="0";	
				document.getElementById('halo2').style.opacity="0";	
				document.getElementById('halo4').style.opacity="0";	
				cBo1 = -10;
				cBo2 = -10;
				cBo4 = -10;
				}
			}
			if ( mouseClick.button == 2 ) {// Click gauche
				cBo3 = cBo3-1;// -1 en position
			}
			else {
				cBo3 = cBo3+1;// +1 en position
			}
			menu3();// Appel de la fonction affichant la position
			console.log(cBo3);
		}
		
	}
	
	function selection4() { // Fonction permettant de définir lors d'un clic si il est droit/centre  ou gauche modifiant la variable de position du bouton4
		if ( etatPower == 1 ) {	
			var mouseClick = window.event;
			if ( cBo4 < -9 ) {// Initialisation de la position en forçant un clic 
				if ( mouseClick.button == 2 ) {// Initialisation de la position en forçant un clic gauche
					cBo4=-10;
				}
				else {
				cBo4=cBom4-1;// Rappel de la position en mémoire
				document.getElementById('halo1').style.opacity="0";	
				document.getElementById('halo2').style.opacity="0";	
				document.getElementById('halo3').style.opacity="0";	
				cBo1 = -10;
				cBo2 = -10;
				cBo3 = -10;
				}
			}
			if ( mouseClick.button == 2 ) {// Click gauche
				cBo4 = cBo4-1;// -1 en position
			}
			else {
				cBo4 = cBo4+1;// +1 en position
			}
			menu4();// Appel de la fonction affichant la position
			console.log(cBo4);
		}
		
	}
	
	function menu1() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 1
	if ( helpb == 3 && etatAngus == 1){//desactive l'aide après 2 clicks ou scrolls
					demandeAide();
					helpb=1;
				}
	if ( etatAngus == 0 ) {//maintient le compteur d'aide à 1 si l'aide est désactivée
		helpb=1;
	}
	switch ( cBo1 ) {//affiche le bouton et le contenu des textes et documents en fonction de la position
		case 0 :
			document.getElementById('halo1').style.opacity="1";	
			document.getElementById('bouton1').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();
			text.scrollTop= intro.offsetTop;
			doc.scrollTop= introD.offsetTop;
			break;
		case 1 :
			document.getElementById('halo1').style.opacity="1";
			document.getElementById('bouton1').style.transform = "rotate(45deg)";
			document.getElementById('bruitBouton').play();
			text.scrollTop= pourquoi.offsetTop;
			doc.scrollTop= introD.offsetTop;		
			cBom1=cBo1;				
			break;
		case 2 :
			document.getElementById('halo1').style.opacity="1";
			document.getElementById('bouton1').style.transform = "rotate(180deg)";
			document.getElementById('bruitBouton').play();
			text.scrollTop= comment.offsetTop;
			doc.scrollTop= introD.offsetTop;				
			cBom1=cBo1;		
			break;
		case 3 :
			document.getElementById('halo1').style.opacity="1";
			document.getElementById('bouton1').style.transform = "rotate(270deg)";
			document.getElementById('bruitBouton').play();
			text.scrollTop= metier.offsetTop;
			doc.scrollTop= introD.offsetTop;				
			cBom1=cBo1;		
			break;			
		case 4 :
			document.getElementById('halo1').style.opacity="1";	
			document.getElementById('bouton1').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();
			cBo1 = 0;// fin de boucle pour case n = nombre de positions possibles
			cBom1=cBo1;		
			menu1();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
		case -2 : // en cas de click gauche à l'initialisation
			document.getElementById('halo1').style.opacity="1";		
			document.getElementById('bouton1').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();
			cBo1 = 0;
			cBom1=cBo1;	
			menu1();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;	
		case -1 :// en cas de clic gauche à la position initiale 0
			document.getElementById('halo1').style.opacity="1";
			document.getElementById('bouton1').style.transform = "rotate(270deg)";
			document.getElementById('bruitBouton').play();
			cBo1=3;
			cBom1=cBo1;	
			menu1();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
			
		}
	
	}
		
	function menu2() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 2
	switch ( cBo2 ) {
		case 0 :
			document.getElementById('halo2').style.opacity="1";	
			document.getElementById('bouton2').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= formation.offsetTop;
			doc.scrollTop= introD.offsetTop;			
			cBom2=cBo2;
			break;
		case 1 :
			document.getElementById('halo2').style.opacity="1";
			document.getElementById('bouton2').style.transform = "rotate(45deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= diplomes.offsetTop;
			doc.scrollTop= introD.offsetTop;								
			cBom2=cBo2;
			break;
		case 2 :
			document.getElementById('halo2').style.opacity="1";
			document.getElementById('bouton2').style.transform = "rotate(180deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= certificas.offsetTop;
			doc.scrollTop= angusguitare.offsetTop;
			cBom2=cBo2;
			break;
		case 3 :
			document.getElementById('halo2').style.opacity="1";
			document.getElementById('bouton2').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= solo.offsetTop;
			doc.scrollTop= introD.offsetTop;
			cBom2=cBo2;
			break;			
		case 4 :
			document.getElementById('halo2').style.opacity="1";	
			document.getElementById('bouton2').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo2 = 0;// fin de boucle pour case n = nombre de positions possibles
			cBom2=cBo2;
			menu2();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
		case -2 : // en cas de click gauche à l'initialisation
			document.getElementById('halo2').style.opacity="1";		
			document.getElementById('bouton2').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo2 = 0;
			cBom2=cBo2;
			menu2();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;	
		case -1 :// en cas de clic gauche à la position initiale 0
			document.getElementById('halo2').style.opacity="1";
			document.getElementById('bouton2').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			cBo2=3;
			cBom2=cBo2;
			menu2();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
			
		}
	
	}
	
	function menu3() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 3
	switch ( cBo3 ) {
		case 0 :
			document.getElementById('halo3').style.opacity="1";	
			document.getElementById('bouton3').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= competences.offsetTop;
			doc.scrollTop= introD.offsetTop;								
			cBom3=cBo3;				
			break;
		case 1 :
			document.getElementById('halo3').style.opacity="1";
			document.getElementById('bouton3').style.transform = "rotate(45deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= savoir.offsetTop;
			doc.scrollTop= introD.offsetTop;								
			cBom3=cBo3;						
			break;
		case 2 :
			document.getElementById('halo3').style.opacity="1";
			document.getElementById('bouton3').style.transform = "rotate(180deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= savoirfaire.offsetTop;
			doc.scrollTop= introD.offsetTop;			
			cBom3=cBo3;		
			break;
		case 3 :
			document.getElementById('halo3').style.opacity="1";
			document.getElementById('bouton3').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= refrain.offsetTop;
			doc.scrollTop= introD.offsetTop;			
			cBom3=cBo3;
			break;
		case 4 :
			document.getElementById('halo3').style.opacity="1";	
			document.getElementById('bouton3').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo3 = 0;// fin de boucle pour case n = nombre de positions possibles
			cBom3=cBo3;		
			menu3();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
		case -2 : // en cas de click gauche à l'initialisation
			document.getElementById('halo3').style.opacity="1";		
			document.getElementById('bouton3').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo3 = 0;
			cBom3=cBo3;
			menu3();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;	
		case -1 :// en cas de clic gauche à la position initiale 0
			document.getElementById('halo3').style.opacity="1";
			document.getElementById('bouton3').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			cBo3=3;
			cBom3=cBo3;	
			menu3();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
			
		}
	
	}
	
	function menu4() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton4
	switch ( cBo4 ) {
		case 0 :
			document.getElementById('halo4').style.opacity="1";	
			document.getElementById('bouton4').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= contact.offsetTop;
			doc.scrollTop= introD.offsetTop;							
			cBom4=cBo4;						
			break;
		case 1 :
			document.getElementById('halo4').style.opacity="1";
			document.getElementById('bouton4').style.transform = "rotate(90deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= telechargement.offsetTop;
			doc.scrollTop= introD.offsetTop;					
			cBom4=cBo4;					
			break;
		case 2 :
			document.getElementById('halo4').style.opacity="1";
			document.getElementById('bouton4').style.transform = "rotate(180deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= savoirPlus.offsetTop;
			doc.scrollTop= introD.offsetTop;			
			cBom4=cBo4;	
			break;
		case 3 :
			document.getElementById('halo4').style.opacity="1";
			document.getElementById('bouton4').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			text.scrollTop= final.offsetTop;
			doc.scrollTop= introD.offsetTop;			
			cBom4=cBo4;	
			break;			
		case 4 :
			document.getElementById('halo4').style.opacity="1";	
			document.getElementById('bouton4').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo4 = 0;// fin de boucle pour case n = nombre de positions possibles
			cBom4=cBo4;	
			menu4();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
		case -2 : // en cas de click gauche à l'initialisation
			document.getElementById('halo4').style.opacity="1";		
			document.getElementById('bouton4').style.transform = "rotate(0deg)";
			document.getElementById('bruitBouton').play();	
			cBo4 = 0;
			cBom4=cBo4;	
			menu4();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;	
		case -1 :// en cas de clic gauche à la position initiale 0
			document.getElementById('halo4').style.opacity="1";
			document.getElementById('bouton4').style.transform = "rotate(225deg)";
			document.getElementById('bruitBouton').play();	
			cBo4=3;
			cBom4=cBo4;	
			menu4();// Rappel de la fonction pour l'affichage du texte après la remise à 0
			break;
			
		}
	
	}
	
	function Init1 () {//fonction initialisant le scroll du bouton1
                // Firefox
        var elem = document.getElementById ("bouton1");
        if (elem.addEventListener) {   
                    // Internet Explorer, Opera, Google Chrome and Safari
            elem.addEventListener ("mousewheel", MouseScroll1, false);
                    // Firefox
            elem.addEventListener ("DOMMouseScroll", MouseScroll1, false);
        }
        else {
            if (elem.attachEvent) { // IE avant version 9
                    elem.attachEvent ("onmousewheel", MouseScroll1);
            }
        }
    }
	
	function Init2 () {//fonction initialisant le scroll du bouton2
                // Firefox
        var elem = document.getElementById ("bouton2");
        if (elem.addEventListener) {   
                    // Internet Explorer, Opera, Google Chrome and Safari
            elem.addEventListener ("mousewheel", MouseScroll2, false);
                    // Firefox
            elem.addEventListener ("DOMMouseScroll", MouseScroll2, false);
        }
        else {
            if (elem.attachEvent) { // IE avant version 9
                    elem.attachEvent ("onmousewheel", MouseScroll2);
            }
        }
    }	
	
	function Init3 () {//fonction initialisant le scroll du bouton3
                // Firefox
        var elem = document.getElementById ("bouton3");
        if (elem.addEventListener) {   
                    // Internet Explorer, Opera, Google Chrome and Safari
            elem.addEventListener ("mousewheel", MouseScroll3, false);
                    // Firefox
            elem.addEventListener ("DOMMouseScroll", MouseScroll3, false);
        }
        else {
            if (elem.attachEvent) { // IE avant version 9
                    elem.attachEvent ("onmousewheel", MouseScroll3);
            }
        }
    }	
	
	function Init4 () {//fonction initialisant le scroll du bouton4
                // Firefox
        var elem = document.getElementById ("bouton4");
        if (elem.addEventListener) {   
                    // Internet Explorer, Opera, Google Chrome and Safari
            elem.addEventListener ("mousewheel", MouseScroll4, false);
                    // Firefox
            elem.addEventListener ("DOMMouseScroll", MouseScroll4, false);
        }
        else {
            if (elem.attachEvent) { // IE avant version 9
                    elem.attachEvent ("onmousewheel", MouseScroll4);
            }
        }
    }	
	
	function demandeAide() {//Fonction de clic sur l'icone d'aide
		if ( etatAngus == 0 ) {//Test de l'état de l'aide et affichage des image d'aide en fonction de l'avancement de l'utilisation 
			etatAngus=1;
			document.getElementById('haloAngus').style.opacity= 1;
			if ( etatPower == 0 ) {
				document.getElementById('angusPower').style.opacity= 1;
				document.getElementById('angusBouton1').style.opacity= 0;
				document.getElementById('angusBouton2').style.opacity=0;
			}
			else {
				if (helpb == 1) {
					document.getElementById('angusPower').style.opacity= 0;
					document.getElementById('angusBouton1').style.opacity= 0;
					document.getElementById('angusBouton2').style.opacity= 1;
				}
				else {
					document.getElementById('angusPower').style.opacity= 0;
					document.getElementById('angusBouton1').style.opacity= 1;
					document.getElementById('angusBouton2').style.opacity= 0;
				}	
			}
		}
		else {// Interruption de l'aide
			document.getElementById('angusPower').style.opacity= 0;
			document.getElementById('angusBouton1').style.opacity= 0;
			document.getElementById('angusBouton2').style.opacity= 0;
			etatAngus= 0;
			document.getElementById('haloAngus').style.opacity= 0;
			}
		console.log(helpb);	
	}
