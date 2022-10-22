import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Modal(props) {
  const router = useRouter();
  const { data: session } = useSession();
  const email = session?.user.email;

  const [dissableOkButton, setDissableOkButton] = useState("");

  const handleOk = () => {
    setDissableOkButton("true");
    props.onCancel();
    window.open(
      `https://wa.me/56953295712/?text=Hola.%20Solicito%20autorización%20para%20subir%20lecturas.%20${email}.%20https://leivas.vercel.app`,
      "_blank"
    );
    // router.push(
    //   `https://wa.me/56953295712/?text=Hola.%20Solicito%20autorización%20para%20subir%20lecturas.%20${email}.%20https://suculentas.vercel.app`
    // );
  };

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-8 px-8 pb-20 text-center">
        <div className="fixed inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-200 opacity-50" />
        </div>

        <div
          className="w-full max-w-md inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-7 pb-5">
            {/* logo */}
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full">
              <Image
                className="block h-11 w-auto"
                src="/logo.svg"
                alt="logo"
                height={50}
                width={50}
              />
            </div>

            <div>
              <h3
                className="mt-3 mb-4 text-center leading-6 font-medium text-gray-900 pb-3"
                id="modal-headline"
              >
                Leivas
              </h3>
              <p className="mb-2 text-center text-gray-900">
                Debes estar autorizado para poder enviar el formulario. Deseas
                solicitar autorización?
              </p>
            </div>
          </div>
          <div className="flex bg-gray-50 px-8 py-8">
            <button
              className={`${
                dissableOkButton
                  ? "bg-gray-100 border-gray-200 text-gray-300"
                  : "bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300 hover:border-gray-400"
              } mt-0 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-1 font-medium focus:outline-none`}
              onClick={handleOk}
              dissabled={dissableOkButton}
            >
              ok
            </button>
            {/* <Link
              href={`https://wa.me/56953295712/?text=Hola.%20Solicito%20autorización%20para%20subir%20lecturas.%20${email}.%20https://leivas.vercel.app`}
            >
              <a className="bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300 hover:border-gray-400 mt-0 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-1 font-medium focus:outline-none">
                ok
              </a>
            </Link> */}
            <button
              className="ml-4 w-full rounded-md border shadow-sm px-4 py-1 bg-gray-200 border-gray-300 font-medium text-gray-700 hover:bg-gray-300 hover:border-gray-400 focus:outline-none"
              onClick={props.onCancel}
            >
              cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
