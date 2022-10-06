import { getSession } from "next-auth/react";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Form />
    </>
  );
}

export const getServerSideProps = async (context) => {
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
