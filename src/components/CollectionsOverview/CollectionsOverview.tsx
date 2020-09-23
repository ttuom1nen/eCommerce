import React from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";

import { StoreState } from "../../models";

const CollectionsOverview = () => {
  const collections = useSelector(
    (state: StoreState) => state.shop.collections
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
