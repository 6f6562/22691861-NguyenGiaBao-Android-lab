"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise2 = void 0;
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
exports.promise2 = promise2;
