import {
  initializeApp,
  applicationDefault,
  getApps,
  getApp,
} from "firebase-admin/app";
import { getFirestore } from "firebase/firestore";

const defaultAppConfig = {
  credential: applicationDefault(),
  databaseURL: "https://water-account-management.firebaseio.com",
};

if (getApps().length === 0) {
  initializeApp(defaultAppConfig);
} else {
  getApp();
}

const db = getFirestore();

export default db;
