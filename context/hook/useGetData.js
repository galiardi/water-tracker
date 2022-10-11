import { useEffect, useState } from "react";
import getLastMonth from "./functions/getLastMonth";
import getConsumo from "./functions/getConsumo";
import getPayments from "./functions/getPayments";
import isItAllowedToSubmit from "./functions/isItAllowedToSubmit";
import getCurrentPeriod from "./functions/getCurrentPeriod";

const useGetData = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    fetch("/api/registros")
      .then((response) => response.json())
      .then((data) => setDocuments(data));
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

  const lastIndex = months.length - 1;

  const lastMonth = months[lastIndex];

  const lastMonthData = {
    name: lastMonth,
    valorUnitarioM3: data.valorUnitarioM3[lastIndex],
    cargoFijo: data.cargoFijo[lastIndex],
    multa:
      Number(data.sobreconsumoVolumen[lastIndex]) *
      (Number(data.sobreconsumoValorUnitario[lastIndex]) -
        Number(data.valorUnitarioM3[lastIndex])),
  };

  const lastMonthUserData = {
    Andrea: {
      consumo: consumo.Andrea[lastIndex],
      pago: payments.Andrea[lastIndex],
    },
    Pablo: {
      consumo: consumo.Pablo[lastIndex],
      pago: payments.Pablo[lastIndex],
    },
    Rodrigo: {
      consumo: consumo.Rodrigo[lastIndex],
      pago: payments.Rodrigo[lastIndex],
    },
  };

  const currentPeriod = getCurrentPeriod(data.date[lastIndex]);
  const dateAllowedToSubmit = isItAllowedToSubmit(currentPeriod);

  return {
    months,
    recordsMonths,
    usersRecords,
    consumo,
    payments,
    lastMonthUserData,
    lastMonthData,
    currentPeriod,
    dateAllowedToSubmit,
  };
};

module.exports = {
  useGetData,
};
