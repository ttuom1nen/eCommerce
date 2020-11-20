import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useSelector } from "react-redux";
import { StoreState, ShopCollection } from "../../models";
import { RouteComponentProps, useParams } from "react-router-dom";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';

interface Params {
  collectionTitle: string;
}

const CollectionPage = ({ match }: RouteComponentProps) => {
  const { collectionTitle } = useParams<Params>();

  const collection: ShopCollection | null = useSelector(
    (state: StoreState) => state.shop.collections ? state.shop.collections[collectionTitle] : null
  );

  return (
    <CollectionPageContainer>
      <CollectionTitle className="title">{collection?.title}</CollectionTitle>
      <CollectionItemsContainer className="items">
        {collection ? (
          collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        ) : (
          <p>Collection not found!</p>
        )}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
