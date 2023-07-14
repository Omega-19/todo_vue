`use strict`

class Person {
    #name;
    #age;
    constructor(name, age){
        // propriétés privées ("name")
        this.#name = name;
        // propriétés privées ("age")
        this.#age = age;
        // console.log(age);
    }
        //  accesseur ou getter(réduire l'accès a des données d'un programme)et oour avoir un mot de passe ou donnée chiffrée, on utilise #avant les variables name et autres.
        get name(){
            console.log("appelle getteur");
            return this.#name;
            // permet de récupérer des données privées
        }
      
        get age(){
            console.log("appelle getteur de l'âge");
            return this.#age;
            // permet de récupérer des données privées
        }

      
    present(){
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans`);
    }
    
    // mutateur | setteur

    set name(newValue){
        this.#name = newValue;
    }
}
// let cr7 = new Person ("cristiano", "att")
// cr7.name = "defeseur";
// console.log(cr7.name);
export default Person;