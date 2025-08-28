"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bike = exports.Car = void 0;
class Car {
    constructor(brand, year, cc) {
        this.brand = brand;
        this.year = year;
        this.cc = cc;
    }
    getInfo() {
        return `Car - Brand: ${this.brand}, Year: ${this.year}, CC: ${this.cc}`;
    }
}
exports.Car = Car;
class bike {
    constructor(brand, year, type) {
        this.brand = brand;
        this.year = year;
        this.type = type;
    }
    getInfo() {
        return `Bike - Brand: ${this.brand}, Year: ${this.year}, Type: ${this.type}`;
    }
}
exports.bike = bike;
