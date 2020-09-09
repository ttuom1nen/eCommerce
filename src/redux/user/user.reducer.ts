import { User, UserState } from "../../models";
import { ActionTypes } from "./user.actions";

const INITIAL_STATE: UserState = {
  currentUser: null,
};

interface Action {
  type: string;
  payload: User | null;
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
