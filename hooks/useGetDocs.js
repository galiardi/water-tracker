import { useEffect, useState } from "react";
import firebase from "../utils/firebase/client";

export const useGetDocs = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("lecturas")
      .orderBy("date", "desc")
      .limit(13)
      .get()
      .then((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          documents.unshift(data);
        });
        setDocs(documents);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  console.log(docs);
  return docs;
};
