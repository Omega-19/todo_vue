`use strict`

class Car {
    
    #brand ;
    #color ;
    #engine ;//objet Engine
    constructor(brand, color, engine){
        this.#brand = brand;
        this.#color = color;
        this.#engine = engine;

    }
    get brand(){
        return this.#brand;
    }
    set brand(value){
        this.#brand = value;
    }
}