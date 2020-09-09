import { User } from "../../models";

export enum ActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export const setCurrentUser = (user: User | null) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
