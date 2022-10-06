import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="bg-gray-200 relative">
        <div className="flex items-center justify-between h-20 text-gray-800 px-4">
          {/* Left button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenu(!menu)}
              className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* closed */}
              <svg
                className={`${menu ? "hidden" : "block"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* open. */}
              <svg
                className={`${menu ? "block" : "hidden"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* logo */}
          <div className="relative w-max flex items-center justify-center rounded-full hover:bg-gray-100">
            <div className="title">Leivas</div>

            <Link href="/">
              <a>
                <div className="h-12 w-12 flex items-center justify-center">
                  <Image
                    height={45}
                    width={45}
                    src="/logo.svg"
                    alt="logo"
                    onClick={() => setMenu(false)}
                  />
                </div>
              </a>
            </Link>
          </div>

          <ProfileDropdown />
        </div>

        {/* menu */}
        <div className={`${menu ? "block" : "hidden"}`}>
          <div
            onClick={() => setMenu(false)}
            className="bg-gray-200 px-2 pt-2 pb-2 menu"
          >
            <Link href="/">
              <a className="text-gray-700 hover:bg-gray-100 block px-3 py-2">
                Inicio
              </a>
            </Link>
            <Link href="/reservatuscajas">
              <a className="text-gray-700 hover:bg-gray-100 block px-3 py-2">
                Reserva tus cajas
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .title {
            color: rgba(31, 41, 55);
            font-weight: 500;
            position: absolute;
            width: fit-content;
            font-size: 1.2rem;
          }
          .menu {
            border-top: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
