export interface Shape {
  area(): number;
}

export class Square implements Shape {
  constructor(private _slide: number) {}

  area(): number {
    return this._slide * 4;
  }
}

export class Circle implements Shape {
  constructor(private _r: number) {}
  area(): number {
    return 2 * 3.14 * this._r;
  }
}
