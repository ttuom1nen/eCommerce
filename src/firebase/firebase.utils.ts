import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUVHOD6DvnujiDWbDyRwXapoDYjXBApeU",
  authDomain: "crwn-db-983c0.firebaseapp.com",
  databaseURL: "https://crwn-db-983c0.firebaseio.com",
  projectId: "crwn-db-983c0",
  storageBucket: "crwn-db-983c0.appspot.com",
  messagingSenderId: "44793180758",
  appId: "1:44793180758:web:9dd079c448b88da82f41f7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
