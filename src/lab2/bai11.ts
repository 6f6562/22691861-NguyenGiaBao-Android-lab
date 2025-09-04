import { promise1 } from "./bai1";
import { promise2 } from "./bai2";
import { promise3 } from "./bai3";

export async function convertEx1() {
  const result = await promise1;
  console.log(result);
  console.log("bai 1 await done");
}

export async function convertEx2() {
  const result = await promise2;
  console.log(result);
  console.log("bai 2 await done");
}

export async function convertEx3() {
  try {
    await promise3;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("bai 3 await done");
  }
}

export async function convertEx4() {
  const result = await promise1;
  console.log(result);
  console.log("bai 4 await done");
}

export async function convertEx5() {
  const result = await promise1;
  console.log(result);
  console.log("bai 5 await done");
}

export async function convertEx6() {
  const result = await promise1;
  console.log(result);
  console.log("bai 6 await done");
}

export async function convertEx7() {
  const result = await promise1;
  console.log(result);
  console.log("bai 7 await done");
}

export async function convertEx8() {
  const result = await promise1;
  console.log(result);
  console.log("bai 8 await done");
}

export async function convertEx9() {
  const result = await promise1;
  console.log(result);
  console.log("bai 9 await done");
}

export async function convertEx10() {
  const result = await promise1;
  console.log(result);
  console.log("bai 10 await done");
}
