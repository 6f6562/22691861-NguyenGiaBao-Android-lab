"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Square {
    constructor(_slide) {
        this._slide = _slide;
    }
    area() {
        return this._slide * 4;
    }
}
exports.Square = Square;
class Circle {
    constructor(_r) {
        this._r = _r;
    }
    area() {
        return 2 * 3.14 * this._r;
    }
}
exports.Circle = Circle;
