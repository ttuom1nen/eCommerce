import React from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";

import { StoreState, ShopCollection } from "../../models";

import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

const convertMapToArray = (collections: any) => {
  if(collections){
    return Object.keys(collections).map((key) => {
      return collections[key];
    })
  }

  return []
}

const CollectionsOverview = () => {
  const collections: ShopCollection[] | [] = useSelector((state: StoreState) => convertMapToArray(state.shop.collections));

  return (
    <CollectionsOverviewContainer>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default React.memo(CollectionsOverview);
