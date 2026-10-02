import NewsCard from "@/Components/NewsCard";
import { ICategory } from "@/type";
import React from "react";

const fetchCategoryData = async (category: string): Promise<ICategory> => {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${category}`,
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  const data = await fetchCategoryData(category);

  if (!data.success) {
    return <div>INVALID CATEGORY</div>;
  }

  const news = data.data;

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-red-700 text-2xl">{data.title}</h1>
        <div className="h-px bg-red-700"></div>
        <div className="grid grid-cols-3 gap-4">
          {news.map((article) => (
            <NewsCard key={article.id} title={data.title} news={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
