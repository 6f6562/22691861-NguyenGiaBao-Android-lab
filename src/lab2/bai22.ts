export const fetchMultipleTodos = async () => {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const todo = await response.json();
    console.log(`Bai 22 (todo ${id}):`, todo);
  }
};
