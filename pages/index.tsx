import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Records } from "../components/Records";
import { Consumption } from "../components/Consumption";
import { Payments } from "../components/Payments.js";

import { useGetDocs } from "../hooks/useGetDocs";

export default function Home() {
  const docs = useGetDocs();

  return (
    <>
      <Records docs={docs} />
      <Consumption docs={docs} />
      <Payments docs={docs} />
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
