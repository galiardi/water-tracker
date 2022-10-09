import admin from 'firebase-admin'
import serviceAccount from './yoga-47f09-firebase-adminsdk-v4j59-c02d1ddeed.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL: 'https://imagenes-abb74.firebaseio.com',
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}
export default admin.firestore()
export { admin }
