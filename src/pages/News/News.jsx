import { useMemo, useState } from "react";

import news from "../../Data/news";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Filter from "../../UI/Filter/Filter";
import EmptyState from "../../UI/EmptyState/EmptyState";
import NewsCard from "../../Cards/NewsCard/NewsCard";

const FILTER_OPTIONS = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "Academic",
    label: "Academic",
  },
  {
    value: "Research",
    label: "Research",
  },
  {
    value: "Events",
    label: "Events",
  },
  {
    value: "Students",
    label: "Students",
  },
];

export default function News() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredNews = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return news.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "all" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handleClearFilters = () => {
    setSearch("");
    setCategory("all");
  };

  const resultCount = filteredNews.length;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-base leading-7 text-gray-600">
            Stay updated with the latest news and activities from the Faculty
            of Computers and Information.
          </p>
        </header>

        {/* Search & Filter */}
        <section
          aria-label="News search and filtering"
          className="mb-8 grid grid-cols-1 items-end gap-4 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search news..."
            />
          </div>

          <Filter
            id="news-category-filter"
            value={category}
            onChange={setCategory}
            options={FILTER_OPTIONS}
            label="Filter by category"
          />

          
        </section>

        {/* Results Information */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Latest News
          </h2>

          <p className="mt-1 text-sm text-gray-500" aria-live="polite">
            {resultCount}{" "}
            {resultCount === 1 ? "article" : "articles"} found
          </p>
        </div>

        {/* News Results */}
        {resultCount === 0 ? (
          <EmptyState
            onAction={handleClearFilters}
            actionLabel="Clear filters"
          />
        ) : (
          <section
            aria-label="News articles"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}