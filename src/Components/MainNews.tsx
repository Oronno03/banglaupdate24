import { ISection } from "@/type";
import Link from "next/link";
import NewsCard from "./NewsCard";

const MainNews = ({ section }: { section: ISection }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NewsCard title={section.articles[0].title} news={section.articles[0]}/>
      <div className="h-full border-gray-400 border rounded-xl flex flex-col gap-2 overflow-hidden">
        {section.articles.slice(1, 6).map((article, idx) => (
          <div key={idx}>
            <Link href={`/news/${article.id}`}>
              <div className="px-4 py-2">
                <p className="font-bold text-red-700 text-[12px]">
                  {section.title}
                </p>
                <h1 className="font-bold text-[16px] hover:underline">
                  {article.title}
                </h1>
              </div>
            </Link>
            {idx < 4 && <div className="h-px bg-gray-200"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
