export const fetchUser = (id: number): Promise<{ id: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id });
    }, 1000);
  });
};
