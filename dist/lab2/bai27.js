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
exports.runTestFailure = exports.runTestSuccess = exports.fetchWithRetry = void 0;
const fetchWithRetry = (url, retries) => __awaiter(void 0, void 0, void 0, function* () {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = yield fetch(url);
            if (!response.ok)
                throw new Error(`error with status: ${response.status}`);
            return yield response.json();
        }
        catch (err) {
            console.error(`attempt ${attempt} failed:`, err);
            if (attempt === retries)
                throw err;
        }
    }
});
exports.fetchWithRetry = fetchWithRetry;
const runTestSuccess = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, exports.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Success:", data);
    }
    catch (err) {
        console.error("Error:", err);
    }
});
exports.runTestSuccess = runTestSuccess;
const runTestFailure = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, exports.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/aaa", 3);
        console.log("Success:", data);
    }
    catch (err) {
        console.error("Error:", err);
    }
});
exports.runTestFailure = runTestFailure;
