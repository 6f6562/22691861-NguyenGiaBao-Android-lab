export interface Flyable {
  readonly name: string;
  fly(): void;
}

export interface Swimmable {
  readonly name: string;
  swim(): void;
}

export class Birds implements Flyable {
  constructor(readonly name: string) {}
  fly(): void {
    console.log("flying");
  }
}

export class Fish implements Swimmable {
  constructor(readonly name: string) {}
  swim(): void {
    console.log("swimming");
  }
}
