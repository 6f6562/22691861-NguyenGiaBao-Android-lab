import { promise1 } from "./bai1";
import { promise2 } from "./bai2";
import { promise3 } from "./bai3";
import { handleRandomNumber } from "./bai4";
import { simulateTask } from "./bai5";
import { promiseAll } from "./bai6";
import { promiseRace } from "./bai7";
import { promiseChain } from "./bai8";
import { filterPromise } from "./bai9";

export async function convertEx1() {
  const result = await promise1();
  console.log(result);
  console.log("bai 1 await done");
}

export async function convertEx2() {
  const result = await promise2();
  console.log(result);
  console.log("bai 2 await done");
}

export async function convertEx3() {
  try {
    const result = await promise3();
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("bai 3 await done");
  }
}

export async function convertEx4() {
  try {
    const result = await handleRandomNumber();
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("bai 4 await done");
  }
}

export async function convertEx5() {
  const result = await simulateTask(1204);
  console.log(result);
  console.log("bai 5 await done");
}

export async function convertEx6() {
  const result = await promiseAll();
  result.forEach((res) => console.log(res));
  console.log("bai 6 await done");
}

export async function convertEx7() {
  const result = await promiseRace();
  console.log("First task completed");
  console.log(result);
  console.log("bai 7 await done");
}

export async function convertEx8() {
  const result = await promiseChain();
  console.log(result);
  console.log("bai 8 await done");
}

export async function convertEx9() {
  const result = await filterPromise([1, 2, 3, 4, 5]);
  console.log(result);
  console.log("bai 9 await done");
}

export async function convertEx10() {
  try {
    const result = await simulateTask(1024);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("bai 10 await done");
  }
}

export async function runConvert() {
  await convertEx1();
  await convertEx2();
  await convertEx3();
  await convertEx4();
  await convertEx5();
  await convertEx6();
  await convertEx7();
  await convertEx8();
  await convertEx9();
  await convertEx10();
}
