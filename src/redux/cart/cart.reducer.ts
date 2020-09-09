import { ActionTypes } from "./cart.actions";
import { CartState } from "../../models";

const INITIAL_STATE: CartState = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
