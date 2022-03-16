// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

// firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig);

// export const db = firebase.firestore();
export const db = getFirestore(firebaseApp);