import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingCartItem } from "../../models";
import { removeItem } from "../../redux/cart/cart.actions";

import "./CheckoutItem.styles.scss";

interface Props {
  cartItem: ShoppingCartItem;
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
