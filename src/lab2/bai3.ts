export const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong");
    }, 1000);
  });
};
