import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Logger from "../components/Logger";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>loading...</div>;
  }

  // if (status !== "loading" && status === "authenticated") {
  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "unauthenticated") {
    return (
      <>
        <div>
          <Logger />
        </div>
        <style jsx>{`
          div {
            padding-top: 10rem;
          }
        `}</style>
      </>
    );
  }
}
