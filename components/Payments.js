import { Chart } from "./Chart";

export const Payments = ({ payments, months }) => {
  return (
    <Chart title="Pagos mensuales" datasetsData={payments} labels={months} />
  );
};

export default Payments;
