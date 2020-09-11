import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { ShopItem } from "../../models";
import "./CollectionItem.styles.scss";

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
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={handleAddItem} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
