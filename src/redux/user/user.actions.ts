import { User } from "../../models";

export const setCurrentUser = (user: User | null) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
