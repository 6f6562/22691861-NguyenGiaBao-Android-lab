"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPromise = void 0;
const filterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered = arr.filter((n) => n > 2);
            resolve(filtered);
        }, 1000);
    });
};
exports.filterPromise = filterPromise;
