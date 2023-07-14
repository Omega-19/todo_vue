`use strict`
//syntaxe ES5
// const notes = [17, 14, 12, 20];
// const nicole = notes[0];
// const erfero = notes[1];
// const oderic = notes[2];
// const maria = notes[3];

//Syntaxe ES6
const notes = [17, 14, 12, 20];
const [nicole,erfero,oderic, maria,rose] = notes; 
console.log("Elle a obtenu la note de " + nicole);
console.log("il a obtenu la note de " + erfero);
console.log("il a obtenu la note de " + oderic);
console.log("Elle a obtenu la note de " + maria);
console.log("Elle a obtenu la note de " + rose);


const letters = [0, 1, 3, 9];
const [a, b] = letters;
console.log(a);


const person = {
    firstname : "John",
    lastname : "DOE",
    age : 30,
    hobbies : "travel"
}

//ES5
// const firstname = person.firstname;
// const lastname = person.lastname;
// const age = person.age;

//ES6
const  {hobbies:h, lastname:ln} = person;//écris la variable : un autre nom ou un diminutif revient a dire change le nom de variable après avoir récupéré les valeurs.
console.log(h);
console.log(ln);


