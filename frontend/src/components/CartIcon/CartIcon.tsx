import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ShoppingCartItem, StoreState } from "../../models";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIcon.styled";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>
        {cartItems.reduce(
          (accumulatedQuantity: number, cartItem: ShoppingCartItem): number =>
            accumulatedQuantity + cartItem.quantity,
          0
        )}
      </ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
