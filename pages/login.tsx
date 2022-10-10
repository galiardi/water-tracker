import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

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
        <button
          onClick={() => {
            signIn("google");
          }}
        >
          SignIn with google
        </button>
      </>
    );
  }
}
