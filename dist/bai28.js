"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatProt = exports.DogProt = exports.AnimalProtect = void 0;
class AnimalProtect {
    speak() {
        return this.makeSound();
    }
}
exports.AnimalProtect = AnimalProtect;
class DogProt extends AnimalProtect {
    makeSound() {
        return "Woof (protected)!";
    }
}
exports.DogProt = DogProt;
class CatProt extends AnimalProtect {
    makeSound() {
        return "Meow (protected)!";
    }
}
exports.CatProt = CatProt;
