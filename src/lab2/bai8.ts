export const promiseChain = () => {
  return Promise.resolve(2)
    .then((n) => n ** 2)
    .then((n) => n * 2)
    .then((n) => n + 5);
};
