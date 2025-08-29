"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(_name) {
        this._name = _name;
    }
    displayInfo() {
        console.log(this._name);
    }
}
class Manager extends Employee {
    constructor(_name, _role) {
        super(_name);
        this._name = _name;
        this._role = _role;
        this._role = _role;
    }
    manageTask() {
        console.log("Managing tasks" + this._role);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(_name, _tool) {
        super(_name);
        this._name = _name;
        this._tool = _tool;
        this._tool = _tool;
    }
    code() {
        console.log(this._tool);
    }
}
exports.Developer = Developer;
