import { takeEvery, call, put } from "redux-saga/effects";
import {
  ActionTypes,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
