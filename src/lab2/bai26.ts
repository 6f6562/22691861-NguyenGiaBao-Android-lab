export const waitFiveSeconds = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Bai 26: Waited 5 seconds");
};
