class Employee {
  constructor(protected _name: string) {}
  displayInfo() {
    console.log(this._name);
  }
}

export class Manager extends Employee {
  constructor(protected _name: string, private _role: string) {
    super(_name);
    this._role = _role;
  }

  manageTask() {
    console.log("Managing tasks" + this._role);
  }
}

export class Developer extends Employee {
  constructor(protected _name: string, private _tool: string) {
    super(_name);
    this._tool = _tool;
  }

  code() {
    console.log(this._tool);
  }
}
