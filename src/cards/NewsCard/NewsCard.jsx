
import { memo } from "react";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {news.category}
          </span>

          <time
            dateTime={news.date}
            className="text-sm text-gray-500"
          >
            {news.date}
          </time>
        </div>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-xl font-semibold leading-tight text-gray-900">
          {news.title}
        </h2>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm leading-6 text-gray-600">
          {news.description}
        </p>

        {/* Action */}
        <div className="mt-auto">
          <Link
            to={`/news/${news.id}`}
            className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Read More
            
          </Link>
        </div>
      </div>
    </article>
  );
}

export default memo(NewsCard);

