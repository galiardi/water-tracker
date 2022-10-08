import { useState } from "react";
import { Chart } from "./Chart";
import { useGetData } from "../hooks/useGetData";

export const Selector = () => {
  const { months, recordsMonths, usersRecords, consumo, payments } =
    useGetData();

  const [state, setState] = useState("Lecturas mensuales");

  const onLecturas = () => {
    setState("Lecturas mensuales");
  };

  const onConsumo = () => {
    setState("Consumo mensual");
  };

  const onPagos = () => {
    setState("Pagos mensuales");
  };

  return (
    <>
      <div className="buttons-container">
        <button onClick={onLecturas}>lecturas</button>
        <button onClick={onConsumo}>consumo</button>
        <button onClick={onPagos}>pagos</button>
      </div>
      {(() => {
        switch (state) {
          case "Lecturas mensuales":
            return (
              <Chart
                title={state}
                datasetsData={usersRecords}
                labels={recordsMonths}
              />
            );
          case "Consumo mensual":
            return (
              <Chart title={state} datasetsData={consumo} labels={months} />
            );

          case "Pagos mensuales":
            return (
              <Chart title={state} datasetsData={payments} labels={months} />
            );

          default:
            return <></>;
        }
      })()}
      <style jsx>{`
        .button-container {
          display: flex;
        }
      `}</style>
    </>
  );
};
