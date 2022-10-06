import { useState, useEffect } from "react";
import { Chart } from "./Chart";
import firebase from "../utils/firebase/client";

export const WaterConsumption = () => {
  const [lecturas, setLecturas] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("lecturas")
      .orderBy("date", "desc")
      .limit(12)
      .get()
      .then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          docs.push(data);
        });
        setLecturas(docs);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return <Chart lecturas={lecturas} />;
};
