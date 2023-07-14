`use strict`

const students = [
    "Oswald",
    "Erfero",
    "Emile",
    "Sam",
    "Martin",
    "cred",
    "Oderic",
    "Théo",
    "Joyanes",
    "Possid",
    "Faris",
    "Gabriel",
    "LeROux",
    "Waris",
    "Euloge",
    "Nicole",
    "Alid",
    "Délanno",
    "Régis",
    "Axel",
    "Wilgas"
]
//1ère méthode
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

//2e méthode
// students.forEach(student => {
//     console.log(student);
// });

//3e méthode
//for...in 
// for (let i in students) {
//     console.log(students[i]);
// }

//parcours des valeurs du tableau "students"


let obj = {
    fname : "john",
    lname : "Doe",
    age : 98
}
for (let prop in obj) {
 console.log(obj[prop]);
}