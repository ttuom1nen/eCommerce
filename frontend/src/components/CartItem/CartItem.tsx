import React from "react";
import { ShoppingCartItem } from "../../models";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./CartItem.styles";

interface Props {
  item: ShoppingCartItem;
}

const CartItem: React.FC<Props> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
