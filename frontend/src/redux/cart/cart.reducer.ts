import { ActionTypes } from "./cart.actions";
import { CartState, ShopItem, ShoppingCartItem } from "../../models";
import { addItemToCart, reduceItemQuantity } from "./cart.utils";

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

interface ToggleAction {
  type: string;
}

interface UpdateAction {
  type: string;
  payload: ShopItem | ShoppingCartItem;
}

export const toggleCart = (state: boolean, action: ToggleAction) => {
  switch (action.type) {
    case ActionTypes.CART_TOGGLE_HIDDEN:
      return !state;
    default:
      return state;
  }
};

const updateCart = (state: ShoppingCartItem[], action: UpdateAction) => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      return addItemToCart(state, action.payload as ShopItem);
    case ActionTypes.CART_REMOVE_ITEM:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    case ActionTypes.CART_REDUCE_QUANTITY:
      return reduceItemQuantity(state, action.payload as ShoppingCartItem);
    case ActionTypes.CART_CLEAR:
      return [];
    default:
      return state;
  }
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: ToggleAction | UpdateAction
) => {
  return {
    hidden: toggleCart(state.hidden, action),
    cartItems: updateCart(state.cartItems, action as UpdateAction),
  };
};
