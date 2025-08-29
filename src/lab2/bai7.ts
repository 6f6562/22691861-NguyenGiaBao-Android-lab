import { simulateTask } from "./bai5";

export const promiseRace = () => {
  return Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000),
  ]);
};
