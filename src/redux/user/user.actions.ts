import { User } from "../../models";
import { ActionTypes } from "../actionTypes";

export const setCurrentUser = (user: User | null) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
