export function handleRandomNumber(): Promise<string> {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5 && randomNumber < 0.8) {
      resolve("Random number is greater than 0.5 and lesser than 0.8");
    } else {
      reject("Random number is less than or equal to 0.5");
    }
  });
}
