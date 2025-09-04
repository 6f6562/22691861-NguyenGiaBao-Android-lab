import { promise1 } from "./bai1";
import {
  convertEx1,
  convertEx2,
  convertEx3,
  convertEx4,
  convertEx5,
  convertEx6,
} from "./bai11";
import { promise2 } from "./bai2";
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

  await convertEx1();
  await convertEx2();
  await convertEx3();
  await convertEx4();
  await convertEx5();
  await convertEx6();
}

main();
