"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise2 = void 0;
exports.promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
