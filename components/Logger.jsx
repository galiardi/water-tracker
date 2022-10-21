import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Logger() {
  return (
    <>
      <div>
        <button
          className="flex justify-center items-center px-2 py-2 rounded-md border shadow-sm bg-white font-medium text-gray-700 hover:border-gray-300 focus:outline-none"
          onClick={() => signIn("google")}
        >
          <Image
            src="/googleSignin.svg"
            alt="google signin"
            height={16}
            width={16}
          />
          <p className="ml-2">Acceder con Google</p>
        </button>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
}
