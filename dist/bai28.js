"use strict";
class AnimalProtect {
    speak() {
        return this.makeSound();
    }
}
class DogProt extends AnimalProtect {
    makeSound() {
        return "Woof (protected)!";
    }
}
class CatProt extends AnimalProtect {
    makeSound() {
        return "Meow (protected)!";
    }
}
