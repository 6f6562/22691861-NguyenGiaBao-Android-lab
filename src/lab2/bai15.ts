import { multiplyBy3After1s } from "./bai14";

export const callMultiAsyncFunc = async () => {
  const a = await multiplyBy3After1s(2);
  console.log("Step 1:", a);

  const b = await multiplyBy3After1s(a);
  console.log("Step 2:", b);

  const c = await multiplyBy3After1s(b);
  console.log("Step 3:", c);
};
