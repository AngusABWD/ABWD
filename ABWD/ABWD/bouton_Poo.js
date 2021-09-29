    
    var shadow=document.getElementsByClassName('head__text');//variable permettant de reinitialiser le text-shadow
    var cBo1=cBo2=cBo3=cBo4=-10;// Variable de départ de la position de sélection supérieur au nombre de positions
    var cBom1=cBom2=cBom3=cBom4=0;// Variable de mémoire de la position du bouton 1
    var cBoG=0;// Variable de retour pour l'objet Selection
    var cBomG=0;// Variable de retour pour la mémoire
    var rolled = 0;// Initialisation de la variable qui quatifiera le scroll souris
    var etatPower=0;//Permet de savoir si Power est on ou off
    var etatAngus=0;//Permet de savoir si Angus est utilliser
    var helpb=0;//Permet de savoir si Angus vous a déja expliquer la sélection du bouton
    var opacite=0;//variable permettant de faire des "fondu"

    class Opacite {// Définition d'un Objet permettant d'opacifier une série d'elements
        opacifier(num, element) {//opacifier tous les elements determinés sauf celui choisi
            let tab = [1,2,3,4];// création d'un tableau pour la boucle permettant de les désactiver 
            this.num = num;
            this.elem = element;
            if ( this.num == 0){// Permet si l'on souhaite d'effacer une liste complète 
                for (i=0; i < tab.length; i++) {
                document.getElementById(this.elem + tab[i]).style.opacity="0";
                }
            }
            else {
                document.getElementById(this.elem + this.num).style.opacity="1";
                tab.splice( this.num-1, 1);// retrait de celui qui doit rester actif
                for (i=0; i < tab.length; i++) {// boucle qui désactive les autres Halo
                document.getElementById(this.elem + tab[i]).style.opacity="0";
                }
            }
        }
    }
    var Opa = new Opacite(); 
    class MouseScroll {//class Objet de la selection par scroll sur les boutons permettant de définir lors d'un scroll si il est positif ou négatif modifiant la variable de position du bouton
        constructor(menu) {
        this.menu = menu;
        }  
        scroller(event, cBo) {
            this.cBo = cBo;
            this.event = event;
            if ('wheelDelta' in this.event) {
                rolled = this.event.wheelDelta;// soit 120 soit -120
            }
            else {  // Firefox
                rolled = -40 * this.event.detail;
            }
            if ( this.cBo > -9 ) {// controle pour ne pas lancer la fonction menu si le bouton n'est pas sélectionner
                if ( rolled == 120 && this.cBo > -10 ) { //Condition pour obliger un click avant de scroll
                 this.cBo = this.cBo-1;// -1 en position
                }
                 if ( rolled == -120 && this.cBo > -10 ) { //Condition pour obliger un click avant de scroll
                this.cBo = this.cBo+1;// +1 en position
                }
                 helpb= helpb + 1;// pour l'état de l'aide	
                cBoG = this.cBo;
                this.menu(cBoG);// Appel de la fonction affichant la position
            }
        }
    }
    var mouseScroll1 = new MouseScroll(menu1);
    var mouseScroll2 = new MouseScroll(menu2);
    var mouseScroll3 = new MouseScroll(menu3);
    var mouseScroll4 = new MouseScroll(menu4);
    class Selection {// class Objet de la selection par click sur les boutons permettant de définir lors d'un clic si il est droit/centre  ou gauche modifiant la variable de position du bouton 
        constructor(menu) {
        this.menu = menu;
        }
        selectionner(cBo, cBom) {
        cBo1=cBo2=cBo3=cBo4=-10; //initialisation des boutons
        this.cBo = cBo;
        this.cBom = cBom;
        if ( etatPower == 1 ) {	//Test si l'ampli est sur "on"
            let mouseClick = window.event;
            if ( this.cBo < -9 ) {// Initialisation de la position en forçant un clic 
                if ( mouseClick.button == 2 ) {// Initialisation de la position en forçant un clic gauche
                    this.cBo=-10;
                }
                else {
                    this.cBo=this.cBom-1;
                }
            }
            
            if ( mouseClick.button == 2 && this.cBo != -10 ) {// Click gauche
                this.cBo = this.cBo-1;// -1 en position	
                cBoG=this.cBo;
                this.menu(cBoG);// Appel de la fonction affichant la position  			
            }
            else {
                if ( this.cBo == -10){
                    this.cBo=-10;
                }
                else {
                this.cBo = this.cBo+1;// +1 en position
                cBoG=this.cBo;
                this.menu(cBoG);// Appel de la fonction affichant la position  
                }
            }	
            if (etatAngus == 0) {//maintient le compteur d'aide à 1 si l'aide est désactivée
                helpb=1;
            }
            else {
            helpb= helpb + 1;// incrémente l'état de l'aide à chaque click
            }
            if ( etatAngus == 1 && helpb == 1) {//Permet d'afficher la suite de l'aide
                Opa.opacifier(3, "angusBouton");
            }
            if ( etatAngus == 1 && helpb == 2) {//Permet d'afficher la suite de l'aide
                Opa.opacifier(4, "angusBouton");
            }              
        }
        console.log(helpb);	
        }
    }
    var selection_1 = new Selection(menu1);
    var selection_2 = new Selection(menu2);
    var selection_3 = new Selection(menu3);
    var selection_4 = new Selection(menu4);
    class Menu {// class Objet definition des Menus
        constructor(cBo, num_halobtn, menu, cBom) {     
        this.cBo = cBo;  
        this.num = num_halobtn;
        this.menu = menu;
        this.cBom = cBom;
        }
        menuf(cBo, cBom) {
        this.cBo = cBo;
        let mouseClick = window.event;
        if ( mouseClick.button != 2 ) {
            Opa.opacifier(this.num, "halo");
        }
        document.getElementById('angusExpress').style.opacity= 1;//allumage du menu express
        if ( helpb == 3 && etatAngus == 1){//desactive l'aide après 2 clicks ou scrolls
                    demandeAide();
                    helpb=1;
        }
        if ( document.getElementById("halo" + this.num).style.opacity == 1 ) {// Si le bouton est actif
            for (i=0;i<shadow.length;i++) {//raz des text-shadows au changement d'état
            shadow[i].style.textShadow = "0px 0px 0px transparent";
            }
        }
        document.getElementById('bruitBouton').play();
            
        switch ( this.cBo ) {//affiche le bouton et le contenu des textes et documents en fonction de la position
        case 0 :
            document.getElementById("bouton"+this.num).style.transform = "rotate(0deg)";           
            document.getElementById('hm'+ this.num + "1").style.textShadow = "0px 0px 4px red";
            text.scrollTo({
                            top: document.getElementById('doc'+ this.num + "1").offsetTop,
                            behavior: 'smooth',
                            });
            doc.scrollTo({
                            top: document.getElementById('hm'+ this.num + "1d").offsetTop,
                            behavior: 'smooth',
                            });				
            cBomG= this.cBo;			
            break;
        case 1 :
            if ( this.cBo == cBo4) {
                document.getElementById("bouton"+this.num).style.transform = "rotate(90deg)";
            }
            else {
            document.getElementById("bouton"+this.num).style.transform = "rotate(60deg)";
            }
            document.getElementById('hm'+ this.num + "2").style.textShadow = "0px 0px 4px red";	
            text.scrollTo({
                            top: document.getElementById('doc'+ this.num + "2").offsetTop,
                            behavior: 'smooth',
                            });
            doc.scrollTo({
                            top: document.getElementById('hm'+ this.num + "2d").offsetTop,
                            behavior: 'smooth',
                            });			
            cBomG= this.cBo;			
            break;
        case 2 :
            document.getElementById("bouton"+this.num).style.transform = "rotate(180deg)";
            document.getElementById('hm'+ this.num + "3").style.textShadow = "0px 0px 4px red";	
            text.scrollTo({
                            top: document.getElementById('doc'+ this.num + "3").offsetTop,
                            behavior: 'smooth',
                            });
            doc.scrollTo({
                            top: document.getElementById('hm'+ this.num + "3d").offsetTop,
                            behavior: 'smooth',
                            });					
            cBomG= this.cBo;	
            break;
        case 3 :
            if ( this.cBo == cBo1) {
                document.getElementById("bouton"+this.num).style.transform = "rotate(270deg)";
            }
            else {
            document.getElementById("bouton"+this.num).style.transform = "rotate(240deg)";
            }
            document.getElementById('hm'+ this.num + "4").style.textShadow = "0px 0px 4px red";	
            text.scrollTo({
                            top: document.getElementById('doc'+ this.num + "4").offsetTop,
                            behavior: 'smooth',
                            });
            doc.scrollTo({
                            top: document.getElementById('hm'+ this.num + "4d").offsetTop,
                            behavior: 'smooth',
                            });					
            cBomG= this.cBo;	
            break;			
        case 4 :
            document.getElementById("bouton"+this.num).style.transform = "rotate(0deg)";
            this.cBo = 0;
            cBoG = 0;// fin de boucle pour case n = nombre de positions possible
            cBomG= this.cBo;		
            this.menu();// Rappel de la fonction pour l'affichage du texte après la remise à 0
            break;
        case -2 : // en cas de click gauche à l'initialisation	
            document.getElementById("bouton"+this.num).style.transform = "rotate(0deg)";
            this.cBo = 0;
            cBoG = 0;
            cBomG= this.cBo;	
            this.menu();// Rappel de la fonction pour l'affichage du texte après la remise à 0
            break;	
        case -1 :// en cas de clic gauche à la position initiale 0
            if ( this.cBo == cBo1) {
                document.getElementById("bouton"+this.num).style.transform = "rotate(270deg)";
            }
            else {
            document.getElementById("bouton"+this.num).style.transform = "rotate(240deg)";
            }
            this.cBo=3;
            cBoG=3;
            cBomG= this.cBo;	
            this.menu();// Rappel de la fonction pour l'affichage du texte après la remise à 0
            break;
        }
    }
    }
    var menu_1 = new Menu(cBo1, 1, menu1, cBom1);
    var menu_2 = new Menu(cBo2, 2, menu2, cBom2);
    var menu_3 = new Menu(cBo3, 3, menu3, cBom3);
    var menu_4 = new Menu(cBo4, 4, menu4, cBom4);
    class  Init {// Class Objet Initialisation du scroll
        constructor(num_halobtn, MouseScroll) {
        this.num_halobtn = num_halobtn;
        this.MouseScroll = MouseScroll;
        }
        init(num_halobtn) {
        this.num_halobtn = num_halobtn;
        var elem = document.getElementById ("bouton" + num_halobtn);
        if (elem.addEventListener) {   
                    // Internet Explorer, Opera, Google Chrome and Safari
            elem.addEventListener ("mousewheel", this.MouseScroll, false);
                    // Firefox
            elem.addEventListener ("DOMMouseScroll", this.MouseScroll, false);
        }
        else {
            if (elem.attachEvent) { // IE avant version 9
                    elem.attachEvent ("onmousewheel", this.MouseScroll);
            }
        }
        }
    } 
    var init_1 = new Init(1, MouseScroll1);
    var init_2 = new Init(2, MouseScroll2);
    var init_3 = new Init(3, MouseScroll3);
    var init_4 = new Init(4, MouseScroll4);

    function initScroll() {// Fonction initialisant les scrolls bouton par l'objet Init
        inittab = [init_1, init_2, init_3, init_4];//Boucle initialisant les scrolls
        for ( i = 0 ; i<4 ; i++) {
            window.onload = inittab[i].init(i+1);
        }
    }
    function resize() {// Fonction permettant le changement de taille de la fenêtre pour Edge, Chrome, Firefox et Opera
        let scale = window.innerWidth/1900;
        document.body.style.zoom = scale;
        document.body.style.MozTransform = "scale("+ scale +")";// Pour Firefox
        
    }
    function MouseScroll1 (event) { // Fonction permettant de définir le scroll du bouton1
        mouseScroll1.scroller(event, cBo1);
    }
    function MouseScroll2 (event) { // Fonction permettant de définir le scroll du bouton2
        mouseScroll2.scroller(event, cBo2);
    }
    function MouseScroll3 (event) { // Fonction permettant de définir le scroll du bouton3
        mouseScroll3.scroller(event, cBo3);
    }
    function MouseScroll4 (event) { // Fonction permettant de définir le scroll du bouton4
        mouseScroll4.scroller(event, cBo4);
    }
    function selection1() { // Fonction permettant de definir la selection par click bouton du bouton1           
        selection_1.selectionner(cBo1, cBom1);   
    } 
    function selection2() { // Fonction permettant de definir la selection par click bouton du bouton2 
        selection_2.selectionner(cBo2, cBom2);       
    }
    function selection3() { // Fonction permettant de definir la selection par click bouton du bouton3  
        selection_3.selectionner(cBo3, cBom3);      
    }
    function selection4() { // Fonction permettant de definir la selection par click bouton du bouton4  
        selection_4.selectionner(cBo4, cBom4);      

    }
    function menu1() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 1
        cBo1=cBoG;  
        menu_1.menuf(cBo1, cBom1);
        cBom1=cBomG;
        }     
    function menu2() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 2
    cBo2=cBoG;  
    menu_2.menuf(cBo2, cBom2);
    cBom2=cBomG;
    }
    function menu3() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 3
    cBo3=cBoG;  
    menu_3.menuf(cBo3, cBom3);
    cBom3=cBomG;
    }
    function menu4() {//Fonction permettant l'affichage avec une rotation et un bruit en fonction de la position du bouton 4
    cBo4=cBoG;  
    menu_4.menuf(cBo4, cBom4);
    cBom4=cBomG;
    }    
    function power() {//Fonction permettant l'actionnement du bouton power et d'identifier son état
        if ( etatPower == 0 ) {//test pour la procédure "Allumage"
        text.scrollTo({
            top: bienvenue.offsetTop,
        });
        doc.scrollTo({
            top: angusguitare.offsetTop,
        });
        let bruitB = document.getElementById('angusPowerSon');
        bruitB.volume=0.1;
        console.log(bruitB.volume);//diminution du volume du Riff
        document.getElementById('boutonPower').style.transform = "rotate(180deg)";
        document.getElementById('boutonPower').style.opacity = 1;
        document.getElementById('haloPower').style.opacity = 1;
        fade();
        etatPower= 1;
            if ( etatAngus == 1 ) {//Bascule sur l'aide Bouton après l'allumage
            Opa.opacifier(2, "angusBouton");
            }
        }
        else {// Eteindre
        Opa.opacifier(0, "halo");
        document.getElementById('bruitBouton').play();
        document.getElementById('boutonPower').style.transform = "rotate(0deg)";
        document.getElementById('boutonPower').style.opacity = 0.6;
        document.getElementById('haloPower').style.opacity = 0;
        document.getElementById('angusExpress').style.opacity= 0;
        text.style.opacity= 0;
        doc.style.opacity= 0;
        for (i=0;i<shadow.length;i++) {
            shadow[i].style.textShadow = "0px 0px 0px transparent";
            }
        if ( etatAngus == 1 ) {//Conserve l'aide sur le bouton Power
            Opa.opacifier(1, "angusBouton");
            }		
        etatPower= 0;
        cBo1=cBo2=cBo3=cBo4=-10;
        helpb=0;
        opacite=0;
        }
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
    function demandeAide() {//Fonction de clic sur l'icone d'aide
        if ( etatAngus == 0 ) {//Test de l'état de l'aide et affichage des image d'aide en fonction de l'avancement de l'utilisation 
            etatAngus=1;
            document.getElementById('haloAngus').style.opacity= 1;
            if ( etatPower == 0 ) {
                Opa.opacifier(1, "angusBouton")
            }
            else {
                if (helpb == 1) {
                    Opa.opacifier(3, "angusBouton")   
                }
                else {
                    if (helpb == 2) {
                        Opa.opacifier(4, "angusBouton")
                    }
                    else {
                        Opa.opacifier(2, "angusBouton")  
                    }
    
                }	
            }
        }
        else {// Interruption de l'aide
        Opa.opacifier(0, "angusBouton")
            etatAngus= 0;
            document.getElementById('haloAngus').style.opacity= 0;
            }
    }  
    function showAngusExpress(event){//Fonction qui efface le menu déroulant pour tout autre click que le bouton angus Express
        if (event.target.className !== 'nav__angusExpress') {
            var menubtn=document.getElementsByClassName('nav__angusExpressMenu');
            for (i=0; i< menubtn.length; i++) {
                var OpenMenu= menubtn[i];
                if ( OpenMenu.classList.contains ('show')) {
                    OpenMenu.classList.remove('show');
    
                }
            }
        }
    } 
    function menuDeroulant() {// Fonction qui active/ désactive le menu déroulant
        helpb= helpb + 1;// incrémente l'état de l'aide à chaque click
        document.getElementById('angusExpressBtn').classList.toggle("show");
    }
    function False() { // Fonction qui permet de supprimer le menu droit pour les boutons de selection, qui permettra un deffilement bouton droit/gauche
        return false;
    }
    bouton1.oncontextmenu = bouton2.oncontextmenu = bouton3.oncontextmenu = bouton4.oncontextmenu = False;// Suppression du menu droit pour bouton, qui permettra un deffilement bouton droit/gauche
    initScroll();//initialisation des scrolls boutons de sélection
    resize(); //pour avoir la bonne dimension à l'ouverture du navigateur
    window.onresize = resize; // changement de taille de la fenêtre pour Edge, Chrome, Firefox et Opera
    document.onclick=showAngusExpress;//Referme le menu déroulant