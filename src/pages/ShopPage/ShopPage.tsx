import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { SHOP_DATA } from "../../mockData";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
