import { ActionTypes } from "./cart.actions";
import { CartState, ShopItem, CartItem } from "../../models";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

interface ToggleAction {
  type: string;
}

interface AddAction {
  type: string;
  payload: ShopItem;
}

const toggleCart = (state: boolean, action: ToggleAction) => {
  switch (action.type) {
    case ActionTypes.CART_TOGGLE_HIDDEN:
      return !state;
    default:
      return state;
  }
};

const addToCart = (state: CartItem[], action: AddAction) => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      return addItemToCart(state, action.payload);
    default:
      return state;
  }
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: ToggleAction | AddAction
) => {
  return {
    hidden: toggleCart(state.hidden, action),
    cartItems: addToCart(state.cartItems, action as AddAction),
  };
};
