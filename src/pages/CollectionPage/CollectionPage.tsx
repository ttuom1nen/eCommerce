import React from "react";
// import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { useSelector } from "react-redux";
import { StoreState } from "../../models";
import { RouteComponentProps, useParams } from "react-router-dom";

interface Params {
  collectionId: string;
}

interface IdMap {
  [key: string]: string;
}

export const COLLECTION_ID_MAP: IdMap = {
  hats: "074b4c9e-cda4-527b-a224-e03bca32426b",
  sneakers: "b1c0174c-026c-5cc4-9de9-9922aa0110ab",
  jackets: "552e3422-43ea-52f8-b5d0-360c3818fa10",
  womens: "2efeded0-1780-59ba-98b9-b5d19e38a712",
  mens: "990f91a6-933d-5db1-84ed-5d2ddcb62c11",
};

const CollectionPage = ({ match }: RouteComponentProps) => {
  const { collectionId } = useParams<Params>();
  const collection = useSelector((state: StoreState) =>
    state.directory.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    )
  );

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
    </div>
  );
};

export default CollectionPage;
