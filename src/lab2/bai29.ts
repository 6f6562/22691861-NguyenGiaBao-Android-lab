import { simulateTask } from "./bai5";

export const queueProcess = async () => {
  const tasks = [
    () => simulateTask(1000),
    () => simulateTask(2000),
    () => simulateTask(3000),
  ];

  for (const task of tasks) {
    const result = await task();
    console.log("Exercise 29:", result);
  }
};
