export class User {
  constructor(private _name: string) {}
  public get name(): string {
    return this.name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public display(): void {
    console.log(`User: ${this._name}`);
  }
}
