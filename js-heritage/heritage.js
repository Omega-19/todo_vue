`use strict`
// // créons une classe User

// class User {
//     constructor(firstName,name){
//         this.firstName = firstName;
//         this.name = name;
//     }
//     fullName(name, firstName){
//         console.log(`Je m'appelle ${this.name} ${this.firstName}`);

//         return (`la concaténation donne ${this.name} ${this.firstName}`);
//     }
// }

// export default User;

// 2em méthode

// import Admin from "./Admin.js";
class User {
    #name;
    #poste;
    #firstName;
    constructor(name, firstName, poste) {
        this.#name = name;
        this.#firstName = firstName;
        this.#poste = "Tronqueur";
    }
    get name() {
        console.log("ici mon getter");
        return this.#name;
    }
    set name(newValue) {
        this.#name = newValue;
    }
    set poste(newValue) {
        this.#poste = newValue;
    }
    fullName(name, firstName) {
        return (`Je m'appelle en ce jour ${name} et mon nom de famille est ${firstName} en plus suis ravi d'être présent parmi vous`);
    }
}

let h1 = new User()
console.log(h1.fullName("Erféro", "PATCHOUKA"));

export default User;