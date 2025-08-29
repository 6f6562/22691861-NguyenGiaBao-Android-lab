"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise1 = void 0;
exports.promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});
