import { promise1 } from "./bai1";
import { promise2 } from "./bai2";
import { promise3 } from "./bai3";
import { handleRandomNumber } from "./bai4";
import { simulateTask } from "./bai5";
import { promiseAll } from "./bai6";
import { filterPromise } from "./bai9";

async function main() {
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
}

main();
