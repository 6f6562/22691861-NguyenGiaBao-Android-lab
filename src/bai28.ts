export abstract class AnimalProtect {
  protected abstract makeSound(): string;
  public speak(): string {
    return this.makeSound();
  }
}
export class DogProt extends AnimalProtect {
  protected makeSound(): string {
    return "Woof (protected)!";
  }
}
export class CatProt extends AnimalProtect {
  protected makeSound(): string {
    return "Meow (protected)!";
  }
}
