import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import { ShopCollection } from "../../models";
import "./CollectionPreview.styles.scss";

const PreviewCollection = ({ title, items }: ShopCollection) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} id={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
