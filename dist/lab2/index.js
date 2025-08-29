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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //   console.log("Bai1: ");
        //   console.log(await promise1);
        //   console.log("Bai2: ");
        //   console.log(await promise2);
        //   console.log("Bai3: ");
        //   console.log(await promise3.catch((error) => error));
        //   console.log("Bai4: ");
        //   handleRandomNumber
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log(error));
        //   console.log("Bai5");
        //   simulateTask(1204).then((result) => console.log(result));
        //   console.log("Bai6");
        //   promiseAll().then((results) => {
        //     console.log("All tasks completed");
        //     results.forEach((result) => console.log(result));
        //   });
        //   console.log("Bai7");
        //   Promise.race([
        //     simulateTask(1000),
        //     simulateTask(2000),
        //     simulateTask(3000),
        //   ]).then((result) => {
        //     console.log("First task completed");
        //     console.log(result);
        //   });
        //   console.log("Bai8");
        //   Promise.resolve(2)
        //     .then((n) => n ** 2)
        //     .then((n) => n * 2)
        //     .then((n) => n + 5)
        //     .then((result) => console.log(result));
        //   console.log("Bai9");
        //   filterPromise([1, 2, 3, 4, 5]).then((result) => console.log(result));
        //   console.log("Bai10");
        //   Promise.resolve("Bai10").finally(() => console.log("Bai10 done"));
    });
}
main();
