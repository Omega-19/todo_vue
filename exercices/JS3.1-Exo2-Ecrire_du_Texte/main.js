'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded',function(){
let canvasDom = document.querySelector("#canvas");

// le context d'utilisation
let ctx = canvasDom.getContext('2d');


// la police qui sera utilisé
ctx.font = 'bold 20px time new roman';

// définissns la couleur du texte
ctx.fillStyle = "#D125E6";

// on écrit a présent le texte
ctx.fillText('Hello', 70, 150);

// définissns la couleur du texte
ctx.fillStyle = "blue";

ctx.fillText('world 😎', 70+ctx.measureText('Hello').width+10, 150);
console.log(70+ctx.measureText('Hello').width+10);

// définissns la couleur du texte
ctx.fillStyle = "purple";

ctx.fillText('!', 150+ctx.measureText('Hello').width+15, 150);
console.log(150+ctx.measureText('Hello').width+15);
});