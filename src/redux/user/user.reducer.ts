import { User, UserState } from "../../models";
import { ActionTypes } from "./user.actions";

const INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

interface SetUserAction {
  type: string;
  payload: User | null;
}

interface SetFailureStateAction {
  type: string;
  payload: string | null;
}

const userReducer = (state = INITIAL_STATE, action: SetUserAction | SetFailureStateAction) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: (action as SetUserAction).payload };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case ActionTypes.SIGN_OUT_FAILURE:
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_UP_FAILURE:
      return {...state, error: (action as SetFailureStateAction).payload}
    default:
      return state;
  }
};

export default userReducer;
