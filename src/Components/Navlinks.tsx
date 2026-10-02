import { ICategories } from "@/type";
import Link from "next/link";
import React from "react";

const fetchData = async (): Promise<ICategories> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  return data;
};

const Navlinks = async () => {
  const data = await fetchData();
  const navLinks = data.data;

  return (
    <nav className="">
      <ul className="flex gap-5 text-gray-500 text-[16px] justify-center">
        <Link href={"/"}>
            <li className={`cursor-pointer`}>হোম</li>
          </Link>
        {navLinks.filter(link => link.scrapable).map(({ title, slug }, idx) => (
          <Link key={idx} href={slug}>
            <li className={`cursor-pointer`}>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
