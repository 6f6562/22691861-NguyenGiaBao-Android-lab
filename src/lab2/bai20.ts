export const fetchUserWithTimeout = (id: number) => {
  const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
    setTimeout(() => resolve({ id, name: `User${id}` }), 3000);
  });

  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Timeout: API took too long")), 2000)
  );

  return Promise.race([apiCall, timeout]);
};
