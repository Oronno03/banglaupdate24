import { getFormattedDate } from "@/lib";
import { INews } from "@/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({title, news}: {title: string, news:INews}) => {
  return (
    <div className="flex flex-col rounded-xl border-gray-400 border overflow-hidden">
      <Image
        src={news.imageUrl}
        alt={news.imageAlt}
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <div className="px-4 py-4 flex flex-col gap-2">
        <p className="text-red-700 text-[14px]">{title}</p>
        <Link href={`/news/${news.id}`}>
          <h1 className="font-bold text-xl hover:underline">
            {news.title}
          </h1>
        </Link>
        <p className="text-gray-600 text-[12px]">
          {news.description}
        </p>
        <p className="text-gray-500 text-[10px]">
          {getFormattedDate(news.lastPublished)}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
