import React from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";

import { StoreState, ShopCollection } from "../../models";

const CollectionsOverview = () => {
  const collections: ShopCollection[] = useSelector((state: StoreState) =>
    Object.keys(state.shop.collections).map((key) => {
      console.log(key);
      return state.shop.collections[key];
    })
  );

  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
