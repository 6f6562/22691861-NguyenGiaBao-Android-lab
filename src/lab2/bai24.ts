export const postData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "test POST method",
      body: "Nguyen Gia Bao",
      userId: 22691861,
    }),
  });
  const result = await response.json();
  console.log("Bai 24:", result);
};
