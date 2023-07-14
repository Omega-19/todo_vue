import Person from "./person.js";

`use strict`
// Employee étant une personne hérite des propriétés et méthode de person
/**
 * Désormais Employee hérite de Person
 * Aussi Employee est un enfant de Person
 * Enfin que Person est un Parent(ou superclass)de Employee(enfant ou sousclass)
 */
class Employee extends Person {
    #wage;
    constructor(name, age, wage) {
        // appelle du constructor du parent avec deux arguments
        super(name, age);
        this.#wage = wage;//salarié
 
    }

    get wage(){
        console.log("appelle getteur du wage");
        return this.#wage;
        // permet de récupérer des données privées
    }
}
export default Employee;