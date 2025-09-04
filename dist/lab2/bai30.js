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
exports.handleApiAllSettled = void 0;
const bai27_1 = require("./bai27");
const handleApiAllSettled = () => __awaiter(void 0, void 0, void 0, function* () {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2â",
        "https://jsonplaceholder.typicode.com/todos/3",
    ];
    const results = yield Promise.allSettled(urls.map((url) => (0, bai27_1.fetchWithRetry)(url, 3)));
    results.forEach((res, i) => {
        console.log(`Exercise 30: Request ${i + 1} -`, res);
    });
});
exports.handleApiAllSettled = handleApiAllSettled;
