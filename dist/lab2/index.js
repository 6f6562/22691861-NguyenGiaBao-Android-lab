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
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        bai1_1.promise1
            .then((result) => {
            console.log(result);
        })
            .finally(() => {
            console.log("Bai1 done");
        });
        bai2_1.promise2
            .then((result) => {
            console.log(result);
        })
            .finally(() => {
            console.log("Bai2 done");
        });
        bai3_1.promise3
            .catch((error) => {
            console.log(error);
        })
            .finally(() => {
            console.log("Bai3 done");
        });
        bai4_1.handleRandomNumber
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
            .finally(() => console.log("Bai4 done"));
        (0, bai5_1.simulateTask)(1204)
            .then((result) => console.log(result))
            .finally(() => console.log("Bai5 done"));
        (0, bai6_1.promiseAll)()
            .then((results) => {
            console.log("All tasks completed");
            results.forEach((result) => console.log(result));
        })
            .finally(() => console.log("Bai6 done"));
        (0, bai7_1.promiseRace)()
            .then((result) => {
            console.log("First task completed");
            console.log(result);
        })
            .finally(() => console.log("Bai7 done"));
        (0, bai8_1.promiseChain)()
            .then((result) => console.log(result))
            .finally(() => console.log("Bai8 done"));
        (0, bai9_1.filterPromise)([1, 2, 3, 4, 5])
            .then((result) => console.log(result))
            .finally(() => console.log("Bai9 done"));
        Promise.resolve("Bai10").finally(() => console.log("Bai10 done"));
    });
}
main();
