"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeVehicle = exports.CarVehicle = void 0;
class CarVehicle {
    constructor(brand, year, cc) {
        this.brand = brand;
        this.year = year;
        this.cc = cc;
    }
    getInfo() {
        return `Car - Brand: ${this.brand}, Year: ${this.year}, CC: ${this.cc}`;
    }
}
exports.CarVehicle = CarVehicle;
class BikeVehicle {
    constructor(brand, year, type) {
        this.brand = brand;
        this.year = year;
        this.type = type;
    }
    getInfo() {
        return `Bike - Brand: ${this.brand}, Year: ${this.year}, Type: ${this.type}`;
    }
}
exports.BikeVehicle = BikeVehicle;
