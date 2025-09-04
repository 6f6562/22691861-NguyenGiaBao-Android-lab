"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = void 0;
const bai5_1 = require("./bai5");
const batchProcess = () => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = [(0, bai5_1.simulateTask)(1000), (0, bai5_1.simulateTask)(2000), (0, bai5_1.simulateTask)(3000)];
    const results = yield Promise.all(tasks);
    console.log("Bai 28:", results);
});
exports.batchProcess = batchProcess;
