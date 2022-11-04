import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase/firestore";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

const defaultAppConfig = {
  credential: cert(serviceAccount),
  databaseURL: "https://water-account-management.firebaseio.com",
};

if (getApps().length === 0) {
  initializeApp(defaultAppConfig);
} else {
  getApp();
}

const db = getFirestore();

export default db;
