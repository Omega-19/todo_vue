`use strict`
// importation de l'élément par défaut du fichier Request.js
import  Request  from "./request.js";

function dealWith() {

    const button = document.querySelector("#button");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        const inputs = document.querySelectorAll("input");
        console.log(inputs);

        // ...
        let request = new Request();
        // ...
        request.getInputs(inputs);
    });
}
export { dealWith };