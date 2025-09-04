export const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 1000);
  });
};
