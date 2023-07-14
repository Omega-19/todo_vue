`use strict`
import  Car from "./Car.js";
import Engine from "./Engine.js";

const mv540  = new Engine();
const tesla  = new Car("Tesla", "white", mv540);
tesla.engine.start();
tesla.engine.stop();