import { multiplyBy3After1s } from "./bai14";

export const callMultiAsyncFuncByPromiseAll = async () => {
  const results = await Promise.all([
    multiplyBy3After1s(2),
    multiplyBy3After1s(3),
    multiplyBy3After1s(4),
  ]);
  console.log("Exercise 16:", results);
};
