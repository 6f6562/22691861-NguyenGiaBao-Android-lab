"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = void 0;
const fetchUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id });
        }, 1000);
    });
};
exports.fetchUser = fetchUser;
