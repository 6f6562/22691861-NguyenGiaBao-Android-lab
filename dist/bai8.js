"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    get price() {
        return this._price;
    }
    get name() {
        return this._name;
    }
}
exports.Product = Product;
