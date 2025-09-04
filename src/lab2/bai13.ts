import { simulateTask } from "./bai5";

export async function handleError() {
  try {
    const result = await simulateTask(1000);
    console.log("Bai 13:", result);
  } catch (error) {
    console.error("Bai 13 Error:", error);
  }
}
