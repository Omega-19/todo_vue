import Employee from "./Employee.js";

`use strict`
class Programmer extends Employee{
    #langage;
    constructor(name, age, wage, langage){
        super(name, age, wage);
        this.#langage = langage;
    }
get langage(){
    console.log("appelle du langage");
    return this.#langage;
}
set langage (mylangage){
    this.#langage = mylangage;
}

}

export default Programmer;