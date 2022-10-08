import { useEffect, useState } from "react";
import { Chart } from "./Chart";
import { useGetData } from "../hooks/useGetData";

export const Selector = () => {
  const { months, recordsMonths, usersRecords, consumo, payments } =
    useGetData();

  // const options = {
  //   records: {
  //     title: "Lecturas mensuales",
  //     datasetsData: usersRecords,
  //     labels: recordsMonths,
  //   },
  //   consumo: {
  //     title: "Consumo mensual",
  //     datasetsData: consumo,
  //     labels: months,
  //   },
  //   payments: {
  //     title: "Pagos mensuales",
  //     datasetsData: payments,
  //     labels: months,
  //   },
  // };
  const [state, setState] = useState(null);
  useEffect(() => {
    setState({
      title: "Consumo mensual",
      datasetsData: consumo,
      labels: months,
    });
  }, [consumo, months]);
  if (!state) return <></>;
  const { title, datasetsData, labels } = state;

  return <Chart title={title} datasetsData={datasetsData} labels={labels} />;
};
