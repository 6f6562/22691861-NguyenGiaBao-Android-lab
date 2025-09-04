export const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
