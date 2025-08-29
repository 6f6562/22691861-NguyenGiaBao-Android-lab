export class Box<T> {
  constructor(protected _value: T) {}

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}
