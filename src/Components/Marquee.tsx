import { ILatestHeadlines } from "@/type";
import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const fetchData = async (): Promise<ILatestHeadlines> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  return data;
};

const Marquee = async () => {
  const data = await fetchData();
  const headlineDatas = data.data;

  return (
    <div className="bg-red-700 text-white mt-2 sticky top-0">
      <div className="flex items-center container mx-auto">
        <h1 className="bg-red-800 px-4 py-1 font-bold">সর্বশেষ</h1>
        <MarqueeText
          direction="right"
          duration={20}
          className="py-1"
          pauseOnHover={true}
        >
          {headlineDatas.map(({ title }, idx) => (
            <Link href={"/"} key={idx}>
              <span className="hover:underline underline-offset-1">
                {title}
              </span>
              <span className="mx-3">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
