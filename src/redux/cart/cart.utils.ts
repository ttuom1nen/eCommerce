import { ShopItem, ShoppingCartItem } from "../../models";

export const addItemToCart = (
  cartItems: ShoppingCartItem[],
  itemToAdd: ShopItem
): ShoppingCartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
