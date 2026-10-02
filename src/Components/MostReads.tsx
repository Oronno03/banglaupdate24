import { IMostRead } from "@/type";
import React from "react";

const fetchMostreads = async (): Promise<IMostRead> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  return data;
};

const MostReads = async () => {
  const data = await fetchMostreads();
  const mostReads = data.data;

  return (
    <div className="border border-gray-400 rounded-lg px-6 py-4">
      <h1 className="font-bold text-red-700 text-lg">সর্বাধিক পঠিত</h1>
      <div className="flex flex-col gap-4">
      {mostReads.map((read, idx) => (
        <div key={read.id}>
          <h1 className="inline-flex gap-2 hover:text-red-700 cursor-pointer font-bold text-[14px]">
            <span className="text-[18px] font-bold text-red-700">
              {idx + 1}
            </span>
            {read.title}
          </h1>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MostReads;
