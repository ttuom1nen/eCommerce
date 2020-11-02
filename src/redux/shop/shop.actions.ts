import { Dispatch } from "redux";
import { ShopData } from "../../models";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export enum ActionTypes {
  FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE",
}

export const fetchCollectionsStart = () => ({
  type: ActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: ShopData) => ({
  type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCollectionsStart());

    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error)));
  };
};
