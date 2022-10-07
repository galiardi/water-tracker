import { Chart } from "./Chart";
import getMonthlyMesurements from "../functions/getMonthlyMesurements";
import getMonths from "../functions/getMonths";

export const Records = ({ docs }) => {
  const monthlyMesurements = getMonthlyMesurements(docs);
  const months = getMonths(docs);
  return (
    <Chart
      title="Lecturas mensuales"
      datasetsData={monthlyMesurements}
      labels={months}
    />
  );
};
