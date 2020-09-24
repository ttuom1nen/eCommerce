import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useSelector } from "react-redux";
import { StoreState, ShopCollection } from "../../models";
import { RouteComponentProps, useParams } from "react-router-dom";

import "./CollectionPage.styles.scss";

interface Params {
  collectionId: string;
}

interface IdMap {
  [key: string]: string;
}

/* Map product section name to collection Id */
export const COLLECTION_ID_MAP: IdMap = {
  hats: "c3ff044b-0bb5-5d82-a4d1-33b6d87baa9f",
  sneakers: "0fe369aa-8c6f-5359-8109-14a7a4cbf877",
  jackets: "5016a8e0-3b91-573d-a2e2-0bdb166cf435",
  womens: "8e0622a3-c13d-5e0e-8a6e-fe3b93e70fcb",
  mens: "9fee7795-56b4-56f4-8556-0cb6630c6d69",
};

const CollectionPage = ({ match }: RouteComponentProps) => {
  const { collectionId } = useParams<Params>();

  const collection:
    | ShopCollection
    | undefined = useSelector((state: StoreState) =>
    state.shop.collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    )
  );

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection ? (
          collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        ) : (
          <p>Collection not found!</p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
