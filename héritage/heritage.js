`use strict`

import Person from "./person.js";
import Employee from "./Employee.js";
import Programmer from "./programmer.js";

let p1 = new Person ("Thierry", 23);
p1.name = "defense";
p1.name = 'Sam'
console.log(p1.name)
console.log(p1);
p1.present();

let e1 = new Employee ("Jacques", 54, 500000);
console.log(e1);
console.log(e1.wage);
e1.present();

let codeurJS = new Programmer ("Warris", 52, 5000000,["HTML", "CSS", "JS"] );
codeurJS.langage = "java";
console.log(codeurJS);
console.log(codeurJS.langage);
codeurJS.present();


