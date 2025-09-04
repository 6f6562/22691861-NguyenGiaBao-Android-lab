export const downloadFile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Bai 25: File downloaded");
};
