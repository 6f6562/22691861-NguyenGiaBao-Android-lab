import { fetchWithRetry } from "./bai27";

export const handleApiAllSettled = async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2â",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  const results = await Promise.allSettled(
    urls.map((url) => fetchWithRetry(url, 3))
  );

  results.forEach((res, i) => {
    console.log(`Exercise 30: Request ${i + 1} -`, res);
  });
};
