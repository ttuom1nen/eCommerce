import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useSelector } from "react-redux";
import { ShoppingCartItem, StoreState } from "../../models";
import axios from "axios";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  const price = cartItems.reduce(
    (accumulatedQuantity: number, cartItem: ShoppingCartItem): number =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  const handlePay = () => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: price,
        token: { id: "d7ca46bd-f016-5191-b298-6da3852185d0" }, // This is just for testing
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.error("Payment error", error);
        alert("There was an issue with the payment");
      });
  };

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
        <span>TOTAL: {price}$</span>
      </TotalContainer>
      <button onClick={handlePay}>Buy Now</button>
    </CheckoutPageContainer>
  );
};

export default React.memo(CheckoutPage);
