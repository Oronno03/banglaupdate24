import { ISection } from "@/type";
import React from "react";
import NewsCard from "./NewsCard";

const Section = ({ section }: { section: ISection }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-red-700 text-2xl">{section.title}</h1>
      <div className="h-px bg-red-700"></div>
      <div className="grid grid-cols-2 gap-4">
        {section.articles.map((article) => (
          <NewsCard key={article.id} title={section.title} news={article}/>
        ))}
      </div>
    </div>
  );
};

export default Section;
