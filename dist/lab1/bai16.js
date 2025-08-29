"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
exports.Box = Box;
