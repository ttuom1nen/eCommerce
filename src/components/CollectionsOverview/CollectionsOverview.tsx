import React from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";

import { StoreState, ShopCollection } from "../../models";

import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

const CollectionsOverview = () => {
  const collections: ShopCollection[] = useSelector((state: StoreState) =>
    Object.keys(state.shop.collections).map((key) => {
      return state.shop.collections[key];
    })
  );

  return (
    <CollectionsOverviewContainer>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
