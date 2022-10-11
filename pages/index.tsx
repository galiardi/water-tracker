import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Selector } from "../components/Selector";
import { CurrentAccount } from "../components/CurrentAccount";
import { Form } from "../components/Form";

export default function Home() {
  return (
    <>
      <CurrentAccount />
      <Selector />
      <Form />
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
