import { fetchUser } from "./bai18";

export const fetchUsers = async (ids: number[]) => {
  const users = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
};
