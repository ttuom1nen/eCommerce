import { User } from "../../models";

const INITIAL_STATE = {
  currentUser: null,
};

interface Action {
  type: string;
  payload: User | null;
}

const userReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
