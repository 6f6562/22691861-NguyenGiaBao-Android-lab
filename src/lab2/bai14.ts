export const multiplyBy3After1s = async (n: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 3), 1000);
  });
};
