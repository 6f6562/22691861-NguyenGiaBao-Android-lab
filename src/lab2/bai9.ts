export function filterPromise(arr: number[]): Promise<number[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filtered = arr.filter((n) => n > 2);
      resolve(filtered);
    }, 1000);
  });
}
