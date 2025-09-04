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
const bai30_1 = require("./bai30");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // promise1
        //   .then((result) => {
        //     console.log(result);
        //   })
        //   .finally(() => {
        //     console.log("Bai1 done");
        //   });
        // promise2
        //   .then((result) => {
        //     console.log(result);
        //   })
        //   .finally(() => {
        //     console.log("Bai2 done");
        //   });
        // promise3
        //   .catch((error) => {
        //     console.log(error);
        //   })
        //   .finally(() => {
        //     console.log("Bai3 done");
        //   });
        // handleRandomNumber
        //   .then((result) => console.log(result))
        //   .catch((error) => console.log(error))
        //   .finally(() => console.log("Bai4 done"));
        // simulateTask(1204)
        //   .then((result) => console.log(result))
        //   .finally(() => console.log("Bai5 done"));
        // promiseAll()
        //   .then((results) => {
        //     console.log("All tasks completed");
        //     results.forEach((result) => console.log(result));
        //   })
        //   .finally(() => console.log("Bai6 done"));
        // promiseRace()
        //   .then((result) => {
        //     console.log("First task completed");
        //     console.log(result);
        //   })
        //   .finally(() => console.log("Bai7 done"));
        // promiseChain()
        //   .then((result) => console.log(result))
        //   .finally(() => console.log("Bai8 done"));
        // filterPromise([1, 2, 3, 4, 5])
        //   .then((result) => console.log(result))
        //   .finally(() => console.log("Bai9 done"));
        // Promise.resolve("Bai10").finally(() => console.log("Bai10 done"));
        // await runConvert();
        // asyncCallSimulateTask(2000);
        // handleError();
        // const result = await multiplyBy3After1s(5);
        // console.log("Bai 14:", result);
        // await callMultiAsyncFunc();
        // await callMultiAsyncFuncByPromiseAll();
        // await callMultiAsyncFuncThenUseForAwait();
        // await fetchUser(22691861).then((user) => console.log("Bai 18:", user));
        // await fetchUsers([1, 2, 3, 4, 5]).then((users) =>
        //   console.log("Bai 19:", users)
        // );
        // await fetchUserWithTimeout(22691861)
        //   .then((user) => console.log("Bai 20:", user))
        //   .catch((error) => console.error("Bai 20 Error:", error.message));
        // await fetchTodo();
        // await fetchMultipleTodos();
        // await fetchCompletedTodos();
        // await postData();
        // await downloadFile();
        // await waitFiveSeconds();
        // await runTestSuccess();
        // await runTestFailure();
        // await batchProcess();
        // await queueProcess();
        yield (0, bai30_1.handleApiAllSettled)();
    });
}
main();
