import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { WaterConsumption } from "../components/WaterConsumption";

export default function Home() {
  return (
    <>
      <WaterConsumption />
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
