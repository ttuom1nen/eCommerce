import React, { useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../models";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const ShopPage = ({ match }: RouteComponentProps) => {
  const dispatch = useDispatch();

  const loading = useSelector((state: StoreState) => state.shop.fetching);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    // Using fetch api (not recommended because of unnecessarily nested structure of response):
    // const dbId = "crwn-db"
    // fetch(`https://firestore.googleapis.com/v1/projects/${dbId}/databases/(default)/documents/collections`)
    // .then(response => response.json())
    // .then(collections => console.log(collections))

    // Using promise pattern:
    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
      })

    // Using the observer pattern:
    // const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(updateCollections(collectionsMap));
    // }, error => console.error(error));

    return () => {
      // unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="shop-page">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            path={`${match.path}/:collectionTitle`}
            component={CollectionPage}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(ShopPage);
