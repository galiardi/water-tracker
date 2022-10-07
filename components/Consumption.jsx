import { Chart } from "./Chart";

export const Consumption = ({ consumo, months }) => {
  return (
    <Chart title="Consumo mensual" datasetsData={consumo} labels={months} />
  );
};
