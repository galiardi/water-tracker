import firebase from "firebase/compat/app";
// import 'firebase/compat/storage'
// import 'firebase/compat/auth'
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCLNiNLQtNkKaDyj4RZi8MBuhyTvIetD8",
  authDomain: "water-account-management.firebaseapp.com",
  projectId: "water-account-management",
  storageBucket: "water-account-management.appspot.com",
  messagingSenderId: "481555157313",
  appId: "1:481555157313:web:725c7f3c2af8cefc3411c0",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
