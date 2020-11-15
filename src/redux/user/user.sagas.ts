import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  ActionTypes,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./user.actions";

// TODO: Find a way to get rid of any
export function* getSnapshotFromUserAuth(userAuth: any, additionalData = {}) {
  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);

    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error));
  }
}

interface EmailSignIn {
  payload: { 
    email: string;
    password: string;
  }
}

export function* signInWithEmail({payload: { email, password }}: EmailSignIn) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

interface SignUp {
  payload: {
    email: string,
    password: string,
    displayName: string,
  }
}

interface SignInAfter {
  payload: {
    user: string,
    additionalData: any,
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUp) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: SignInAfter) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(ActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest<any>(ActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(ActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(ActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest<any>(ActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest<any>(ActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
