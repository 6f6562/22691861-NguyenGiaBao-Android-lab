export class Account {
  constructor(
    readonly _id: number,
    private _balance: number,
    public _name: string
  ) {}
}
