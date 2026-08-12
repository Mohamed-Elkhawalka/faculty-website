import { useMemo, useState } from "react";

import announcements from "../../Data/announcement";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Filter from "../../UI/Filter/Filter";
import EmptyState from "../../UI/EmptyState/EmptyState";
import AnnouncementCard from "../../Cards/AnnouncementCard/AnnouncementCard";

const FILTER_OPTIONS = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "Important",
    label: "Important",
  },
  {
    value: "Academic",
    label: "Academic",
  },
  {
    value: "Students",
    label: "Students",
  },
  {
    value: "General",
    label: "General",
  },
];

export default function Announcement() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredAnnouncements = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return announcements.filter((announcement) => {
      const matchesSearch =
        announcement.title.toLowerCase().includes(searchText) ||
        announcement.description.toLowerCase().includes(searchText);

      const matchesType =
        selectedType === "all" ||
        announcement.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [search, selectedType]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("all");
  };

  const resultCount = filteredAnnouncements.length;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Announcements
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:mt-4 lg:mt-6 lg:text-xl">
            Stay informed about the latest university announcements, academic
            updates, and important student information.
          </p>
        </header>

        {/* Search & Filter */}
        <section
          aria-label="Announcements search and filtering"
          className="mb-8 grid grid-cols-1 items-end gap-4 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search announcements..."
            />
          </div>

          <Filter
            id="announcement-type-filter"
            value={selectedType}
            onChange={setSelectedType}
            options={FILTER_OPTIONS}
            label="Filter by type"
          />
        </section>

        {/* Results Information */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Latest Announcements
          </h2>

          <p className="mt-1 text-sm text-slate-500" aria-live="polite">
            {resultCount}{" "}
            {resultCount === 1 ? "announcement" : "announcements"} found
          </p>
        </div>

        {/* Announcements Results */}
        {resultCount === 0 ? (
          <EmptyState
            onAction={handleClearFilters}
            actionLabel="Clear filters"
          />
        ) : (
          <section
            aria-label="Announcements"
            className="grid grid-cols-1 gap-5 lg:grid-cols-2"
          >
            {filteredAnnouncements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}