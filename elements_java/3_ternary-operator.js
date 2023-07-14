`use strict`


/**
 * Fonction qui vérifie si un nombre est positif ou négatif
 * @param {number} num 
 * return true | false
 */

//ES5
// function isPositive (num){
//     if (num >= 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

//ES6

//(condition) ? "valeur à retourner si vrai" : "valeur si faux"
function isPositive (num){
    return num >= 0? `${num} est positif ` : `${num} est negative`;
}
console.log(isPositive(50));
console.log(isPositive(-850));
isPositive();