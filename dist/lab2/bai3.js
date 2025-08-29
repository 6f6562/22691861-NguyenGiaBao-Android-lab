"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise3 = void 0;
exports.promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");
    }, 1000);
});
