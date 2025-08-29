"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.AnimalBase = void 0;
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Animal sound");
    }
}
exports.AnimalBase = AnimalBase;
class Dog extends AnimalBase {
    sound() {
        console.log("Gau gau");
    }
}
exports.Dog = Dog;
class Cat extends AnimalBase {
    sound() {
        console.log("Meow moe");
    }
}
exports.Cat = Cat;
