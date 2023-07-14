`use strict`
class User {
    name;
    fullName(name, firstName) {

        return (`Je m'appelle en ce jour ${name} et mon nom de famille est ${firstName} en plus suis ravi d'être présent parmi vous`);
    }
    get name (newValue){

    }
}

let h1 = new User()
console.log(h1.fullName("Erféro", "PATCHOUKA"));

class Admin{
    canEditArticles() {
        return true;
    }
}
let a1 = new Admin()
console.log(a1.canEditArticles());