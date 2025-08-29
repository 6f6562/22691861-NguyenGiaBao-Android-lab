import { simulateTask } from "./bai5";

export const promiseAll = () => {
  return Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
  ]);
};
