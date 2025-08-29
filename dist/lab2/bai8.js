"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseChain = void 0;
const promiseChain = () => {
    return Promise.resolve(2)
        .then((n) => Math.pow(n, 2))
        .then((n) => n * 2)
        .then((n) => n + 5);
};
exports.promiseChain = promiseChain;
