import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ShoppingCartItem, StoreState } from "../../models";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

import {
  ShoppingCartDropdown,
  CartItems,
  EmptyMessage,
  CheckoutButtonContainer,
} from "./CartDropdown.styles";

const CartDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  return (
    <ShoppingCartDropdown>
      {cartItems.length ? (
        <>
          <CartItems>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))}
          </CartItems>
          <CheckoutButtonContainer>
            <Link to="/checkout">
              <CustomButton onClick={() => dispatch(toggleCartHidden())}>
                GO TO CHECKOUT
              </CustomButton>
            </Link>
          </CheckoutButtonContainer>
        </>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </ShoppingCartDropdown>
  );
};

export default React.memo(CartDropdown);
