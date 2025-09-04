export const fetchTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log("Bai 21:", data);
};
