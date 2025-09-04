import { multiplyBy3After1s } from "./bai14";

export const callMultiAsyncFuncThenUseForAwait = async () => {
  const promises = [
    multiplyBy3After1s(2),
    multiplyBy3After1s(3),
    multiplyBy3After1s(4),
  ];

  for await (const result of promises) {
    console.log("Bai 17:", result);
  }
};
