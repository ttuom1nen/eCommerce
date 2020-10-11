import React, { useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const ShopPage = ({ match }: RouteComponentProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap))
    });
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionTitle`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
