import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="flex relative pt-4">
      <div className="w-max mx-auto flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 self-center">
          <Image
            className="h-full"
            src={"/logo.webp"}
            alt="LOGO"
            height={50}
            width={50}
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-red-700 font-bold text-3xl">
              Bangla Update 24
            </h1>
            <p className="text-gray-600 text-[14px]">{date}</p>
          </div>
        </div>

        <Navlinks />
      </div>

      <div className="flex gap-2 absolute right-5 top-1/2 translate-y-[-50%]">
        <Link
          href={"/"}
          className="px-4 py-2 border-gray-400 border rounded-xl cursor-pointer"
        >
          <button className="cursor-pointer">সাইন ইন</button>
        </Link>
        <Link
          href={"/"}
          className="bg-red-700 text-white px-4 py-2 rounded-xl cursor-pointer"
        >
          <button className="cursor-pointer">সাইন আপ</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
