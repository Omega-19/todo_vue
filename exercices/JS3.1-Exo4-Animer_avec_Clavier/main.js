'use strict';
// // Function propre au carré
// // On défini le propriété de notre carré que l'on va dessiner dans un objet
// let square = {
//     color: "#FF0000",
//     length: 20,
//     x: 10,
//     y: 10
// };

// // Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
// let canvasDom;
// let ctx;


// // Dès que le DOM est chargé on commence
// document.addEventListener('DOMContentLoaded', function () {
//     // L'objet du DOM Canvas
//     canvasDom = document.querySelector('#canvas');

//     // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
//     ctx = canvasDom.getContext('2d');

//     displaySquare();
//     // On dessine notre carré la première fois


//     //Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
//     document.addEventListener("keydown", moveSquare);
// });
// /** Gestionnaire dévènement clavier
//  * @param {event} e l'évènement keydow
//  */
// // on détecte la touche et la direction puis on change les coordonnées
// function moveSquare(e) {
//     // on détecte la touche et la direction puis on change les coordonnées
//     switch (e.key) {
//         case 'ArrowRight':
//             if (square.x + square.length < canvasDom.width) square.x++;
//             break;
//         case 'ArrowLeft':
//             if (square.x > 0) square.x--;
//             break;
//         case 'ArrowUp':
//             if (square.y > 0) square.y--;
//             break;
//         case 'ArrowDown':
//             if (square.y + square.length < canvasDom.height) square.y++;
//             break;
//     }

//     // On dessine notre carré 
//     displaySquare();
// }
// /** Fonction qui affiche le carré avec ces coordonnées et la couleur défini dans le contexte
//  * 
//  */
// function displaySquare() {

//     // On vide le Canvas avant de redessiner
//     ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

//     // On definit la couleur de remplissage
//     ctx.fillStyle = "#ccc";
//     // on rempli le canvas de blue
//     ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
//     // on dit au context que la couleur de remplissage est rouge
//     ctx.fillStyle = square.color

//     // On trace un nouveau carré rempli (fill) avec cette couleur
//     ctx.fillRect(square.x, square.y, square.length, square.length);
// };



// FUNCTION SPECIFIQUE AU CIRCLE
// On défini le propriété de notre carré que l'on va dessiner dans un objet
let Circle = {
    color: "blue",
    radius: 30,
    x: 90,
    y: 90
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    // L'objet du DOM Canvas
    canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    ctx = canvasDom.getContext('2d');

    displayCircle();
    // On dessine notre carré la première fois


    //Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
    document.addEventListener("keydown", moveCircle);
});
/** Gestionnaire dévènement clavier
 * @param {event} e l'évènement keydow
 */
// on détecte la touche et la direction puis on change les coordonnées
function moveCircle(e) {
    // on détecte la touche et la direction puis on change les coordonnées
    switch (e.key) {
        case 'ArrowRight':
            if (Circle.x + Circle.radius < canvasDom.width) Circle.x++;
            break;
        case 'ArrowLeft':
            if (Circle.x - Circle.radius > 0) Circle.x--;
            break;
        case 'ArrowUp':
            if (Circle.y - Circle.radius > 0) Circle.y--;
            break;
        case 'ArrowDown':
            if (Circle.y + Circle.radius < canvasDom.height) Circle.y++;
            break;
    }

    // On dessine notre carré 
    displayCircle();
}
/** Fonction qui affiche le carré avec ces coordonnées et la couleur défini dans le contexte
 * 
 */
function displayCircle() {

    // On vide le Canvas avant de redessiner
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On definit la couleur de remplissage
    ctx.fillStyle = "pink";
    // on rempli le canvas de blue
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    // on dit au context que la couleur de remplissage est rouge
    ctx.fillStyle = Circle.color;

    // On trace un nouveau cercle rempli (fill) avec cette couleur
    ctx.beginPath();
   
    // On trace un arc fermé (un cercle)
    ctx.arc(Circle.x, Circle.y, Circle.radius, 0,2 * Math.PI);
    ctx.arc(20, 50, 20, 0,2 * Math.PI);


    // On dessine sur le canvas en remplissant le tracé 
    ctx.fill();

};
