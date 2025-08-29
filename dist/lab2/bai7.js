"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseRace = void 0;
const bai5_1 = require("./bai5");
const promiseRace = () => {
    return Promise.race([
        (0, bai5_1.simulateTask)(1000),
        (0, bai5_1.simulateTask)(2000),
        (0, bai5_1.simulateTask)(3000),
    ]);
};
exports.promiseRace = promiseRace;
