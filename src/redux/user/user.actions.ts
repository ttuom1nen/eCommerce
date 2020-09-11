import { User } from "../../models";

export enum ActionTypes {
  USER_SET_CURRENT = "USER_SET_CURRENT",
}

export const setCurrentUser = (user: User | null) => ({
  type: ActionTypes.USER_SET_CURRENT,
  payload: user,
});
