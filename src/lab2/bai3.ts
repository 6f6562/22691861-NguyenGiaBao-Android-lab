export const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});
