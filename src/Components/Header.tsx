import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="container mx-auto">
      <div className="relative flex pt-4">
        <div className="mx-auto flex w-max flex-col items-center gap-2">
          <div className="flex items-center gap-4 self-center">
            <Image
              className="h-full w-auto"
              src="/logo.webp"
              alt="LOGO"
              height={50}
              width={50}
            />

            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-red-700">
                Bangla Update 24
              </h1>

              <p className="text-[14px] text-gray-600">{date}</p>
            </div>
          </div>

          <Navlinks />
        </div>

        <HeaderAuth />

      </div>
    </header>
  );
};

export default Header;