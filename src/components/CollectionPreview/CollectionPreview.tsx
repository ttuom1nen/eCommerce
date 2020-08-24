import React from "react";
import { ShopCollection, ShopItem } from "../../models";
import "./CollectionPreview.scss";

const PreviewCollection = ({ id, title, items, routeName }: ShopCollection) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item: ShopItem) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
