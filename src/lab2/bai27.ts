export const fetchWithRetry = async (
  url: string,
  retries: number
): Promise<any> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`error with status: ${response.status}`);
      return await response.json();
    } catch (err) {
      console.error(`attempt ${attempt} failed:`, err);
      if (attempt === retries) throw err;
    }
  }
};

export const runTestSuccess = async () => {
  try {
    const data = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/todos/1",
      3
    );
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
};

export const runTestFailure = async () => {
  try {
    const data = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/todos/aaa",
      3
    );
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
};
