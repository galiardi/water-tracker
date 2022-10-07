import { Chart } from "./Chart";
import getMonths from "../functions/getMonths";
import getMonthlyConsumption from "../functions/getMonthlyConsumption";

export const Consumption = ({ docs }) => {
  const months = getMonths(docs);
  months.shift();
  const monthlyConsumption = getMonthlyConsumption(docs);

  return (
    <Chart
      title="Consumo mensual"
      datasetsData={monthlyConsumption}
      labels={months}
    />
  );
};
