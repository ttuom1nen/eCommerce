export enum ActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
}

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});
