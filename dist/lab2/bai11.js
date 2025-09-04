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
exports.convertEx1 = convertEx1;
exports.convertEx2 = convertEx2;
exports.convertEx3 = convertEx3;
exports.convertEx4 = convertEx4;
exports.convertEx5 = convertEx5;
exports.convertEx6 = convertEx6;
exports.convertEx7 = convertEx7;
exports.convertEx8 = convertEx8;
exports.convertEx9 = convertEx9;
exports.convertEx10 = convertEx10;
exports.runConvert = runConvert;
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
function convertEx1() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai1_1.promise1)();
        console.log(result);
        console.log("bai 1 await done");
    });
}
function convertEx2() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai2_1.promise2)();
        console.log(result);
        console.log("bai 2 await done");
    });
}
function convertEx3() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, bai3_1.promise3)();
        }
        catch (error) {
            console.log("Error:", error);
        }
        finally {
            console.log("bai 3 await done");
        }
    });
}
function convertEx4() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, bai4_1.handleRandomNumber)();
            console.log("Success:", result);
        }
        catch (error) {
            console.log("Error:", error);
        }
        finally {
            console.log("bai 4 await done");
        }
    });
}
function convertEx5() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai5_1.simulateTask)(1204);
        console.log(result);
        console.log("bai 5 await done");
    });
}
function convertEx6() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai6_1.promiseAll)();
        result.forEach((res) => console.log(res));
        console.log("bai 6 await done");
    });
}
function convertEx7() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai7_1.promiseRace)();
        console.log("First task completed");
        console.log(result);
        console.log("bai 7 await done");
    });
}
function convertEx8() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai8_1.promiseChain)();
        console.log(result);
        console.log("bai 8 await done");
    });
}
function convertEx9() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, bai9_1.filterPromise)([1, 2, 3, 4, 5]);
        console.log(result);
        console.log("bai 9 await done");
    });
}
function convertEx10() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, bai5_1.simulateTask)(1024);
            console.log("Success:", result);
        }
        catch (error) {
            console.log("Error:", error);
        }
        finally {
            console.log("bai 10 await done");
        }
    });
}
function runConvert() {
    return __awaiter(this, void 0, void 0, function* () {
        yield convertEx1();
        yield convertEx2();
        yield convertEx3();
        yield convertEx4();
        yield convertEx5();
        yield convertEx6();
        yield convertEx7();
        yield convertEx8();
        yield convertEx9();
        yield convertEx10();
    });
}
