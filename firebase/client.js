import firebase from "firebase/compat/app";
// import 'firebase/compat/storage'
// import 'firebase/compat/auth'
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "water-account-management.firebaseapp.com",
  projectId: "water-account-management",
  storageBucket: "water-account-management.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
