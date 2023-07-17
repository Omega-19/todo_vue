'use strict';


document.addEventListener('DOMContentLoaded', function () {
    let canvasDom = document.querySelector("#canvas");
    let ctx = canvasDom.getContext('2d');
    // let img = new Image();
    // img.src = "../../../js-dev-main/JS2.2.4-Rocket/images/cancel-button.png";
    // img.onload = function () {
    //     //On place l'image
    //     ctx.drawImage(img, 10, 10);
    // };


/** Ajoute une image à un context2D
 * @param {string} src source de l'image
 * @param {integer} posX position X de l'image dans le Canvas
 * @param {integer} posY position Y de l'image dans le Canvas
 * @param {CanvasRenderingContext2D} ctx le context lié à notre Canvas
 */

    function addImage(src, posX, posY, ctx) {
        let myImg = new Image();
        myImg.src = src;

        myImg.onload = () =>{
            ctx.drawImage(myImg, posX, posY);
        };
    }
    addImage("bride-301814.jpg", 10, 10,ctx);
});