import { ShopItem, ShoppingCartItem } from "../../models";

export enum ActionTypes {
  CART_TOGGLE_HIDDEN = "CART_TOGGLE_HIDDEN",
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_REDUCE_QUANTITY = "CART_REDUCE_QUANTITY",
  CART_CLEAR = "CART_CLEAR"
}

export const toggleCartHidden = () => ({
  type: ActionTypes.CART_TOGGLE_HIDDEN,
});

export const addItem = (item: ShopItem) => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload: item,
});

export const removeItem = (item: ShoppingCartItem) => ({
  type: ActionTypes.CART_REMOVE_ITEM,
  payload: item,
});

export const reduceQuantity = (item: ShoppingCartItem) => ({
  type: ActionTypes.CART_REDUCE_QUANTITY,
  payload: item,
});

export const clearCart = () => ({
  type: ActionTypes.CART_CLEAR
})