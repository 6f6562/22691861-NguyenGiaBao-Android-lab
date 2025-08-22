"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this._name = value;
    }
    display() {
        console.log(`User: ${this._name}`);
    }
}
exports.User = User;
