`use strict`

// 1ère méthode
// document.addEventListener("DOMContentLoaded", 
// function () {
//     const button = document.querySelector("#button");
//     class Request{
//         getInputs(tabInput){
//             for (let i = 0; i < tabInput.length; i++) {
//                console.log(tabInput[i].value);

//             }
//         }
//     }

// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     const inputA = document.querySelector("#fname");
//     const inputB = document.querySelector("#color");
//     let tabInput = [];
//     tabInput.push(inputA, inputB);

//     // ...
//     let request = new Request();
//     // ...
//     request.getInputs(tabInput);
// });
// });

// 2e méthode

// Importation de la classe coupée

import { dealWith } from "./utile.js";

document.addEventListener("DOMContentLoaded", dealWith);




