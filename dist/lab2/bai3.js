"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise3 = void 0;
const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
};
exports.promise3 = promise3;
