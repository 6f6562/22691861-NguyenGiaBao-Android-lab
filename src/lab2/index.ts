import { promise1 } from "./bai1";
import { runConvert } from "./bai11";
import { asyncCallSimulateTask } from "./bai12";
import { handleError } from "./bai13";
import { multiplyBy3After1s } from "./bai14";
import { callMultiAsyncFunc } from "./bai15";
import { callMultiAsyncFuncByPromiseAll } from "./bai16";
import { callMultiAsyncFuncThenUseForAwait } from "./bai17";
import { fetchUser } from "./bai18";
import { fetchUsers } from "./bai19";
import { promise2 } from "./bai2";
import { fetchUserWithTimeout } from "./bai20";
import { fetchTodo } from "./bai21";
import { fetchMultipleTodos } from "./bai22";
import { promise3 } from "./bai3";
import { handleRandomNumber } from "./bai4";
import { simulateTask } from "./bai5";
import { promiseAll } from "./bai6";
import { promiseRace } from "./bai7";
import { promiseChain } from "./bai8";
import { filterPromise } from "./bai9";

async function main() {
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
  // fetchTodo();
  fetchMultipleTodos();
}

main();
