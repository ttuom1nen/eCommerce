import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingCartItem } from "../../models";
import {
  addItem,
  reduceQuantity,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItem.styles";

interface Props {
  cartItem: ShoppingCartItem;
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(reduceQuantity(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(removeItem(cartItem))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
