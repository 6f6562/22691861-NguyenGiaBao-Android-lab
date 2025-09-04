export const fetchCompletedTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: { id: number; title: string; completed: boolean }[] =
    await response.json();
  const completed = todos.filter((todo) => todo.completed);
  console.log("Bai 23 (completed):", completed);
};
