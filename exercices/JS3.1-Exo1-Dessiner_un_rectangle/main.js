'use strict';

document.addEventListener('DOMContentLoaded',function(){
// l'objet du DOM Canvas
    let canvasDom = document.querySelector("#canvas");
// le context utilisé pour avoir accès aux librairies
let ctx = canvasDom.getContext('2d');

// On trace le contour d'un rectangle
ctx.strokeRect(50, 50, 200, 150);

// la couleur de contour du prochain rectangle
ctx.strokeStyle = "green"

// un nouveau rectangle dans le canvas
ctx.strokeRect(300, 50, 200, 150);

// la couleur de contour du precedent rectangle
ctx.fillStyle = "red"

// le nouveau rectangle
ctx.fillRect(550, 50, 200, 150);

   
});