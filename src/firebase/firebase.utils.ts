import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { ShopItem } from "../models";

// This is safe for public
const config = {
  apiKey: "AIzaSyBUVHOD6DvnujiDWbDyRwXapoDYjXBApeU",
  authDomain: "crwn-db-983c0.firebaseapp.com",
  databaseURL: "https://crwn-db-983c0.firebaseio.com",
  projectId: "crwn-db-983c0",
  storageBucket: "crwn-db-983c0.appspot.com",
  messagingSenderId: "44793180758",
  appId: "1:44793180758:web:9dd079c448b88da82f41f7",
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData: {}
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("Error creating user! ", error.message);
    }
  }

  return userRef;
};

// This function was used to enter the shop data into firebase
export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: {title: string, items: ShopItem[]}[]) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  batch.commit()
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
