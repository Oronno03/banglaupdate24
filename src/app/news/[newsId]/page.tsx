import Image from "next/image";
import { notFound } from "next/navigation";

const fetchNewsData = async (id: string) => {
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data;
};

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;
  const data = await fetchNewsData(newsId);

  if (!data.success) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-700">News Not Found!</h1>
      </div>
    );
  }

  const article = data.data;

  const publishedDate = new Date(article.firstPublished).toLocaleDateString(
    "bn-BD",
    {
      dateStyle: "full",
    },
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mx-auto max-w-5xl">
        {/* Topics */}
        <div className="mb-4 flex flex-wrap gap-2">
          {article.topics?.map((topic: { id: string; name: string }) => (
            <span
              key={topic.id}
              className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
            >
              {topic.name}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          {article.title}
        </h1>

        {/* Description */}
        {article.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text && (
          <p className="mt-5 text-lg leading-8 text-gray-600 md:text-xl">
            {article.description.blocks[0].model.blocks[0].model.text}
          </p>
        )}

        {/* Author + Date */}
        <div className="mt-6 flex flex-col gap-3 border-y border-gray-200 py-5 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {article.byline?.map(
              (author: { name: string; role: string }, index: number) => (
                <span key={index}>
                  {author.name.trim()}
                  {index < article.byline.length - 1 ? ", " : ""}
                </span>
              ),
            )}
          </div>

          <time dateTime={article.firstPublished}>
            প্রকাশিত {publishedDate}
          </time>
        </div>

        {/* Article Body */}
        <div className="mt-10">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {article.body?.map((block: any, index: number) => {
            {
              /* Image */
            }
            if (block.type === "image") {
              return (
                <figure
                  key={index}
                  className="my-10 overflow-hidden rounded-xl"
                >
                  <Image
                    src={block.url}
                    alt={block.altText || block.caption || article.title}
                    width={block.width || 1024}
                    height={block.height || 683}
                    className="h-auto w-full object-cover"
                  />

                  {block.caption && (
                    <figcaption className="bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-500">
                      {block.caption}
                    </figcaption>
                  )}

                  {block.copyrightHolder && (
                    <p className="px-4 pt-2 text-xs text-gray-400">
                      © {block.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            {
              /* Subheading */
            }
            if (block.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-4 mt-12 border-l-4 border-red-700 pl-4 text-2xl font-bold text-red-700 md:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }

            {
              /* Text */
            }
            if (block.type === "text") {
              return (
                <div
                  key={index}
                  className="mb-6 text-base leading-8 text-gray-800 md:text-lg"
                >
                  {block.text.split("\n").map(
                    (paragraph: string, paragraphIndex: number) =>
                      paragraph.trim() && (
                        <p key={paragraphIndex} className="mb-5 last:mb-0">
                          {paragraph}
                        </p>
                      ),
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Tags */}
        {article.tags?.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm text-red-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Source */}
        <div className="mt-10 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Source:{" "}
            <span className="font-semibold text-gray-700">
              {article.source}
            </span>
          </p>

          {article.sourceUrl && (
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-700 hover:text-red-800 hover:underline"
            >
              Read original article →
            </a>
          )}
        </div>
      </article>
    </main>
  );
};

export default NewsDetails;
