import admin from "firebase-admin";
import serviceAccount from "./key/water-account-management-firebase-adminsdk-3gquq-508ef71039.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
export { admin };
