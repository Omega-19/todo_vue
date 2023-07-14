`use strict`
// import User from "../js-heritage/heritage.js";
// import Admin from "../js-heritage/Admin.js";



// let a1 = new Admin("Sam", "Ziguinlo")
// console.log(a1);
// a1.fullName();
// let h1 = new User("Erféro", "PATCHOUKA")
// h1.name = "Bravour";
// h1.poste = "workers";
// console.log(h1.name);
// console.log(h1);
// h1.fullName();


// =============================correctionn===================
// correction de la consigne accessors
// `use strict`
import User from "../les accesseurs/optionne.js";
import Admin from "../js-heritage/Admin.js";



// let a1 = new Admin("Sam", "Ziguinlo")
// console.log(a1);
// a1.fullName();
let h1 = new User("Erféro", "PATCHOUKA", "codeur")
h1.job = "programmeur"
console.log(h1.job);
console.log(h1);
h1.fullName();
