import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Film from "./Film";
import { signOut, useSession } from "next-auth/react";

function ProfileDropdown() {
  const [profileMenu, setProfileMenu] = useState(false);
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();

  const admin = () => {
    // const id = user.image;
    // fetch("/api/admin", {
    //   method: "POST",
    //   body: JSON.stringify({ id, getPath: true }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     if (data.url) {
    //       router.push(data.url);
    //     }
    //   })
    //   .catch((error) => console.log("error: ", error));
    // setProfileMenu(!profileMenu);
  };

  const logout = () => {
    signOut();
    // setProfileMenu(false);
  };

  return (
    <div className="p-1 rounded-full hover:bg-gray-100">
      <div className="">
        <div>
          <div>
            <button
              onClick={() => {
                setProfileMenu(!profileMenu);
              }}
              className={"flex focus:outline-none"}
              id="user-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              {user ? (
                <Image
                  src={user.image}
                  height={32}
                  width={32}
                  alt="user image"
                  className="rounded-full"
                />
              ) : (
                <svg
                  className="h-8 w-8"
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
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Dropdown panel */}
          {profileMenu && (
            <div className="fixed z-20">
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div
                  onClick={() => {
                    setProfileMenu(false);
                  }}
                >
                  <Link href="/mireserva">
                    <a className="block px-4 pt-2 pb-1 text-gray-700 hover:bg-gray-100">
                      Mi reserva
                    </a>
                  </Link>
                </div>
                <div className="flex justify-between">
                  <p
                    className="block px-4 pt-1 pb-2 text-gray-700 hover:bg-gray-100"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </p>
                  <p className="px-4 pt-1 pb-2 text-gray-700" onClick={admin}>
                    ...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {profileMenu ? <Film onFilm={() => setProfileMenu(false)} /> : null}
    </div>
  );
}

export default ProfileDropdown;
