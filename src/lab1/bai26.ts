export class Productt {
  constructor(private _name: string, private _price: number) {}
  get price(): number {
    return this._price;
  }
}

export class Order {
  constructor(public products: Productt[]) {}

  calculateTotalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
