import { simulateTask } from "./bai5";

export const batchProcess = async () => {
  const tasks = [simulateTask(1000), simulateTask(2000), simulateTask(3000)];
  const results = await Promise.all(tasks);
  console.log("Bai 28:", results);
};
