`use strict`
// 3e méthode
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#button");

    // log pour vérifier si l'élément est bien récupérer
    console.log(button);

    // créons la class request

    class Request {
        constructor() {
            this.inputValue;
        }
        getInputs(elements) {
            this.inputValue = elements;
            for (let i = 0; i < this.inputValue.length; i++) {
                console.log(this.inputValue[i].value);

            }
        }
    }

    // mettre un écouteur d'événement dessus

    button.addEventListener("click", function (event) {
        event.preventDefault();
        let firstname = document.querySelector("#fname");
        let couleur = document.querySelector("#color");
        let inputs = [];
        inputs.push(firstname, couleur);
        // ...
        let request = new Request();
        // ...
        request.getInputs(inputs)
    });
});