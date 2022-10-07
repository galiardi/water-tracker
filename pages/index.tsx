import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { Chart } from "../components/Chart";

import { useGetData } from "../hooks/useGetData";

export default function Home() {
  const { months, usersRecords, consumo, payments } = useGetData();

  return (
    <>
      <Chart
        title="Lecturas mensuales"
        datasetsData={usersRecords}
        labels={months}
      />
      <Chart title="Consumo mensual" datasetsData={consumo} labels={months} />
      <Chart title="Pagos mensuales" datasetsData={payments} labels={months} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: {},
  };
};
