import { Person } from "./bai1";

export class Teacher extends Person {
  constructor(name: string, age: number, private subject: string) {
    super(name, age);
  }

  introduce(): string {
    return `I'm ${this.name}, ${this.age}, and I teach ${this.subject}.`;
  }
}
