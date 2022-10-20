import { useEffect, useState } from "react";
import {
  getLastMonth,
  getConsumo,
  getPayments,
  isItAllowedToSubmit,
  getCurrentPeriod,
} from "../../functions";
import { useSession } from "next-auth/react";

const useGetData = () => {
  const { data: session } = useSession();

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!session) return;
    fetch("/api/registros")
      .then((response) => response.json())
      .then((data) => setDocuments(data))
      .catch(console.log);
  }, [session]);

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

  const lastDocument = documents[documents.length - 1];

  const lastMonthData = {
    name: lastMonth,
    valorUnitarioM3: lastDocument?.valorUnitarioM3,
    cargoFijo: lastDocument?.cargoFijo,
    multa:
      Number(lastDocument?.sobreconsumoVolumen) *
      (Number(lastDocument?.sobreconsumoValorUnitario) -
        Number(lastDocument?.valorUnitarioM3)),
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
    lastDocument,
    lastMonthUserData,
    lastMonthData,
    currentPeriod,
    dateAllowedToSubmit,
  };
};

module.exports = {
  useGetData,
};
