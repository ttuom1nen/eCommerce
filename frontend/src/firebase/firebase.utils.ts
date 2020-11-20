import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { ShopItem, ShopCollection } from "../models";

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
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: { title: string; items: ShopItem[] }[]
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  batch.commit();
};

firebase.initializeApp(config);

// TODO: Find a way to remove any
export const convertCollectionsSnapshotToMap = (collections: any) => {

  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator: any, collection: ShopCollection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
  
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
