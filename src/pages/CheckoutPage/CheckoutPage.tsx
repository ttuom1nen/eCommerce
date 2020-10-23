import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useSelector } from "react-redux";
import { ShoppingCartItem, StoreState } from "../../models";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './CheckoutPage.styles';

const CheckoutPage = () => {
  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}

      <TotalContainer>
        <span>
          TOTAL: $
          {cartItems.reduce(
            (accumulatedQuantity: number, cartItem: ShoppingCartItem): number =>
              accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
          )}
        </span>
      </TotalContainer>
    </CheckoutPageContainer>
  );
};

export default React.memo(CheckoutPage);
