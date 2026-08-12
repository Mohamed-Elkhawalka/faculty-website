import { Link, useParams } from "react-router-dom";
import news from "../../Data/news";


export default function NewsDetails() {
  const { id } = useParams();

  const article = news.find((item) => item.id === Number(id));

  // If article doesn't exist
  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            News
          </p>

          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            News article not found
          </h3>

          <p className="mt-3 text-gray-600">
            The news article you are looking for does not exist.
          </p>

          <Link
            to="/news"
            className="mt-7 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
             Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
             News
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
              {article.category}
            </span>

            <span aria-hidden="true">•</span>

            <time dateTime={article.date}>
              {article.date}
            </time>
          </div>
        </header>

        {/* Main Content */}
        <article className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={article.image}
              alt={article.title}
              loading="eager"
              className="h-full max-h-[430px] w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col">

            {/* Description */}
            <p className="text-lg leading-8 text-gray-600">
              {article.description}
            </p>

            <div className="my-7 h-px w-full bg-gray-200" />

            {/* Article Content */}
            <div className="space-y-5 text-base leading-8 text-gray-700">
              <p>{article.content}</p>
            </div>

            {/* Back Button */}
            <div className="mt-10">
              <Link
                to="/news"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Back to News
              </Link>
            </div>

          </div>
        </article>

      </div>
    </main>
  );
}
