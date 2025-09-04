import { simulateTask } from "./bai5";

export const asyncCallSimulateTask = async (time: number) => {
  const result = await simulateTask(time);
  console.log("bai 12 await done", result);
};
