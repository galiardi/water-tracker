import { Chart } from "./Chart";

export const Records = ({ usersRecords, months }) => {
  return (
    <Chart
      title="Lecturas mensuales"
      datasetsData={usersRecords}
      labels={months}
    />
  );
};
