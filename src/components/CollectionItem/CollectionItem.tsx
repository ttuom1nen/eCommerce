import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { ShopItem } from "../../models";
import "./CollectionItem.styles.scss";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./CollectionItem.styles";

interface Props {
  item: ShopItem;
}

const CollectionItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={handleAddItem} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
