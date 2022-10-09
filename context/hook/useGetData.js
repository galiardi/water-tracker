import { useEffect, useState } from "react";
import firebase from "./firebase/client";
import getLastMonth from "./functions/getLastMonth";
import getConsumo from "./functions/getConsumo";
import getPayments from "./functions/getPayments";

export const useGetData = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("lecturas")
      .orderBy("date", "desc")
      .limit(13)
      .get()
      .then((querySnapshot) => {
        const tempDocuments = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          tempDocuments.unshift(data);
        });
        setDocuments(tempDocuments);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const data = {
    Andrea: [],
    Pablo: [],
    Rodrigo: [],
    cargoFijo: [],
    valorUnitarioM3: [],
    date: [],
    sobreconsumoVolumen: [],
    sobreconsumoValorUnitario: [],
  };

  const users = ["Andrea", "Pablo", "Rodrigo"];

  // Desde el primer documento solo extrae las lecturas,
  // necesarias para calcular el consumo del mes siguiente
  documents.forEach((doc, i) => {
    if (i === 0) {
      users.forEach((user) => data[user].push(doc[user]));
    } else {
      Object.keys(doc).forEach((key) => {
        data[key].push(doc[key]);
      });
    }
  });

  const months = data.date.map((dateInMs) => getLastMonth(dateInMs));

  const recordsMonths = documents.length && [
    getLastMonth(documents[0].date),
    ...months,
  ]; // includes the first document data

  const usersRecords = {
    Andrea: data.Andrea,
    Pablo: data.Pablo,
    Rodrigo: data.Rodrigo,
  };

  const consumo = getConsumo(usersRecords);

  const payments = getPayments(data, consumo);

  return {
    months,
    recordsMonths,
    usersRecords,
    consumo,
    payments,
  };
};
