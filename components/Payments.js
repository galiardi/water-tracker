import { Chart } from "./Chart";
import getMonths from "../functions/getMonths";
import getMonthlyPayments from "../functions/getMonthlyPayments";

export const Payments = ({ docs }) => {
  const months = getMonths(docs);
  months.shift();
  const monthlyPayments = getMonthlyPayments(docs);

  return (
    <Chart
      title="Pagos mensuales"
      datasetsData={monthlyPayments}
      labels={months}
    />
  );
};

export default Payments;
