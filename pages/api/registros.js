import firebase from "../../firebase/client";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) return res.status(403).end();

  try {
    const documents = [];

    const db = firebase.firestore();

    const querySnapshot = await db
      .collection("lecturas")
      .orderBy("date", "desc")
      .limit(13)
      .get();

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      documents.push(data);
    });

    documents.reverse();
    res.status(200).json(documents);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error getting documents" });
  }
}
