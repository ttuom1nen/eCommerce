import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useSelector } from "react-redux";
import { ShoppingCartItem, StoreState } from "../../models";
import "./CheckoutPage.styles.scss";

const CheckoutPage = () => {
  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}

      <div className="total">
        <span>
          TOTAL: $
          {cartItems.reduce(
            (accumulatedQuantity: number, cartItem: ShoppingCartItem): number =>
              accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
          )}
        </span>
      </div>
    </div>
  );
};

export default CheckoutPage;
