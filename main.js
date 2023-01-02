/*  @author: Akou jean vivien
 */



/**exercice play with game*/
/*
*  @author: Akou jean vivien
   @description : le jeu consiste a demander a l'utilisateur le nombre exacte choisit aleatoirement par l'ordinateur
  
 */
 /* 
   @param : verification du nombre entrer par l'utilisateur
   @param : choix du nombre par l'ordinateur
   @returns : la valeur choisi par l'ordianateur
   @param : comparaison des differentes valeurs
   @returns: retourne un message en fonction du choix de l'utilisateur
   */
  

// part 1 la fonction principale qui permet l'execution du jeu
function playTheGame() {
     
    let Utilisator = confirm( "Souhaitez vous jouer au jeu" )
    if ( Utilisator)
    {// fonction confirm qui retourne oui ou annuler selon le choix de l'utilisateur
            let userNumber= prompt("entrez un nombre entre 0 et 10 ")//
         if (isNaN(userNumber) ) 
         {//si le numero n'est pas un nombre
            alert("Désolé, pas un numéro, au revoir")
         }else if (userNumber  >= 0 && userNumber <= 10 ) //pour tout nombre superieur ou egal a 0 et inferieur ou egal a 10
         {//si le numero est plus petit
            let computerNumber= Math.round(Math.random() *10)// le nombre aleatoire choisit par l'ordinateur
            console.log(computerNumber) // affiche dans la console de nombre aleatoire
            compareNumbers(userNumber,computerNumber)     // appel de la seconde fonction       
        } else  
        {  
            alert("Désolé, ce n'est pas un bon chiffre, au revoir")//lorque l'utilisateur n'entre pas un bon chiffre
        } 
                
    } else { alert("pas de probleme, au revoir")}// lorsque l'utilisateur clique sur le bouton annuler 

}

playTheGame()
//part 2 comparaison ds valeurs 
// @param: cette fonction compare la valeur entrer par l'utilisateur a celle choisit par l'ordinateur
function compareNumbers(userNumber,computerNumber) {
let guessed = 2 // determine le nombre de fois que l'utisateur peut tenter sa chance
let i=0 // initialisation a O du compteur
    do {

        if (userNumber == computerNumber) { //lorque egalité 
            alert("winner")// affiche winner lorsque le nombre entrer correspond a la valeur choisit par l'ordinateur 
            break;// sort de la boucle
        } else if (userNumber >computerNumber){// lorsque le nombre correspondant est plus grand il affiche l'alerte suivante
            alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
            userNumber= prompt("entrez un nombre entre 0 et 10 ")// entre de nouveau une nouvelle valeur
            i++ 
           
        } else {alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau")// lorsque le nombre correspondant est plus petit il affiche l'alerte suivante
             userNumber= prompt("entrez un nombre entre 0 et 10 ")
             i++
            }
    } while (i < guessed );// s'execute tant que le competeur i est inferieur a 3
    alert("hors de chances")
    
}