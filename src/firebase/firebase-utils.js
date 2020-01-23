import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOqbtUnXQx0dP7jQTYwBNskXtub2Sdm4w",
    authDomain: "metro-db-95134.firebaseapp.com",
    databaseURL: "https://metro-db-95134.firebaseio.com",
    projectId: "metro-db-95134",
    storageBucket: "metro-db-95134.appspot.com",
    messagingSenderId: "1098444797762",
    appId: "1:1098444797762:web:bb19dfd70d619cef46fadb"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;