import { useState } from "react";
import { Chart } from "./Chart";
import { useData } from "../context/data";

export const Selector = () => {
  const { months, recordsMonths, usersRecords, consumo, payments } = useData();

  const [state, setState] = useState("Consumo mensual");

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
      <main>
        <div className="buttons-container">
          <button onClick={onLecturas} id="left-button">
            lecturas
          </button>
          <button onClick={onConsumo} id="middle-button">
            consumo
          </button>
          <button onClick={onPagos} id="right-button">
            pagos
          </button>
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
      </main>
      <style jsx>{`
        main {
          margin: 2rem 0.5rem;
          padding: 1px;
          border-radius: 0.25rem;
          background-color: rgb(210 212 216);
        }

        .buttons-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 1px;
          font-size: 0.75rem;
        }
        button {
          padding: 0.25rem 0rem;
          background-color: rgb(229 231 235);
        }
        #left-button {
          border-radius: 0.25rem 0 0 0;
          ${state === "Lecturas mensuales" && "background-color: #f9f9f9;"}
        }
        #middle-button {
          ${state === "Consumo mensual" && "background-color: #f9f9f9;"}
        }
        #right-button {
          border-radius: 0 0.25rem 0 0;
          ${state === "Pagos mensuales" && "background-color: #f9f9f9;"}
        }
      `}</style>
    </>
  );
};
