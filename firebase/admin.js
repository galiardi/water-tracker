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

// import { initializeApp, getApps } from "firebase-admin/app";
// import serviceAccount from "./key/water-account-management-firebase-adminsdk-3gquq-461fca301c.json";

// function createFirebaseAdminApp() {
//   if (getApps().length === 0) {
//     try {
//       initializeApp({
//         credential: admin.credential.cert(serviceAccount),
//         // credential: applicationDefault(),
//         databaseURL: "https://water-account-management.firebaseio.com",
//       });
//     } catch (error) {
//       console.log("Firebase admin initialization error", error.stack);
//     }
//   }
// }
// export default admin.firestore();
// // export { admin };

// import {
//   AppOptions,
//   cert,
//   getApp,
//   getApps,
//   initializeApp,
//   ServiceAccount,
// } from "firebase-admin/app";
// // import { getAuth } from "firebase-admin/auth";

// const credentials: ServiceAccount = {
//   projectId: process.env.projectID,
//   privateKey: process.env.privateKey.replace(/\\n/g, "\n"),
//   clientEmail: process.env.clientEmail,
// };

// const options: AppOptions = {
//   credential: cert(credentials),
//   databaseURL: process.env.databaseURL,
// };

// function createFirebaseAdminApp(config: AppOptions) {
//   if (getApps().length === 0) {
//     return initializeApp(config);
//   } else {
//     return getApp();
//   }
// }

// const firebaseAdmin = createFirebaseAdminApp(options);
// // export const adminAuth = getAuth(firebaseAdmin);
