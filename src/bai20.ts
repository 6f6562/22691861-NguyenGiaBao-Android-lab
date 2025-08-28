export interface Vehicle {
  brand: string;
  year: number;
  getInfo(): string;
}

export class CarVehicle implements Vehicle {
  constructor(public brand: string, public year: number, private cc: number) {}

  getInfo(): string {
    return `Car - Brand: ${this.brand}, Year: ${this.year}, CC: ${this.cc}`;
  }
}

export class BikeVehicle implements Vehicle {
  constructor(
    public brand: string,
    public year: number,
    private type: string
  ) {}

  getInfo(): string {
    return `Bike - Brand: ${this.brand}, Year: ${this.year}, Type: ${this.type}`;
  }
}
