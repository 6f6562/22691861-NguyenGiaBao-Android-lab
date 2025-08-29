import { Animal } from "./bai9";

export class AnimalBase implements Animal {
  constructor(readonly name: string) {}
  sound(): void {
    console.log("Animal sound");
  }
}

export class Dog extends AnimalBase {
  sound(): void {
    console.log("Gau gau");
  }
}

export class Cat extends AnimalBase {
  sound(): void {
    console.log("Meow moe");
  }
}
