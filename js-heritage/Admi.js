`use strict`
let age;
class User {
#age;
constructor(age, firstName, name){
    this.firstName = firstName;
    this.name = name;
    this.#age = age;
}
    fullName(name, firstName) {

        return (`Je m'appelle en ce jour ${name} et mon nom de famille est ${firstName} en plus suis ravi d'être présent parmi vous et j'ai ${age}`);
    }
    get age(){
        return this.#age.getAge();
    }
    set age(newAge){
        this.#age = newAge;
    }

}
class Age{
    #age;
    constructor(age){
this.#age = age;
    }
    get age(){
        return this.#age;
    }
    set age(newAge){
        this.#age = newAge;
    }
    getAge(age){
        
            if (typeof this.#age === "number" &&this.#age >= 10 && this.#age <= 150) {
                this.#age = this.#age;
            }else {
                this.#age = null;
            }
            return this.#age;
        }
    
    }
let h1 = new User(new Age("45"), "PATCHOUKA", "erfero")
console.log(h1.age);

class Admin{
    canEditArticles() {
        return true;
    }
}
let a1 = new Admin()
console.log(a1.canEditArticles());