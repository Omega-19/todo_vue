`use strict`
// class User {

//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this.name;
//     }
//     set name(name) {
//         this.name = name;
//     }
// }//ceci donne une boucle infinie

// const user = new User("Alice");
// console.log(user.name);

// class Dough { 
//     constructor () {
//          this.flour = null;
//           this.water = null; this.salt = null; 
//         } 
//     } 
//     const dough = new Dough(); dough.flour = 250; 
//     dough.water = 150; 
//     dough.salt = 6; 
//     console.log(dough.water);

    class User {
        constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        }
        //il ne s'agit pas de valeur clé
        //le getter peut changer de nom
        get fullName () {
        return `${this.firstName} ${this.lastName}`;
        }
        }
        console.log("nic","vig");