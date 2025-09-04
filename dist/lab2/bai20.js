"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserWithTimeout = void 0;
const fetchUserWithTimeout = (id) => {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: `User${id}` }), 3000);
    });
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout: API took too long")), 2000));
    return Promise.race([apiCall, timeout]);
};
exports.fetchUserWithTimeout = fetchUserWithTimeout;
