import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCEkWki0wNwdRYpVqCqopXizDJM-ov7EWY",
  authDomain: "crown-db-aaa83.firebaseapp.com",
  databaseURL: "https://crown-db-aaa83.firebaseio.com",
  projectId: "crown-db-aaa83",
  storageBucket: "crown-db-aaa83.appspot.com",
  messagingSenderId: "734779683693",
  appId: "1:734779683693:web:00af7634cf90ca0af8e064",
  measurementId: "G-VQ8NZK6F2C"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error adding user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
