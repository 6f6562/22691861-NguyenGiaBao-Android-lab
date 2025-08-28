export class Person {
  constructor(protected name: string, protected age: number) {}

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
