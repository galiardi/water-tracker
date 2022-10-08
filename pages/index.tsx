import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Selector } from "../components/Selector";

export default function Home() {
  return (
    <>
      <Selector />
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
