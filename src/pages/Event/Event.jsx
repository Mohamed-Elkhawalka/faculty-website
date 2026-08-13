import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import events from "../../data/events";
import EventCard from "../../cards/EventCard/EventCard";
import SearchBar from "../../ui/SearchBar/SearchBar";
import Filter from "../../ui/Filter/Filter";
import EmptyState from "../../ui/EmptyState/EmptyState";

import styles from "./Event.module.css";

export default function Event() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filterOptions = [
    {
      value: "all",
      label: t("events.filters.all"),
    },
    {
      value: "conference",
      label: t("events.types.conference"),
    },
    {
      value: "workshop",
      label: t("events.types.workshop"),
    },
    {
      value: "seminar",
      label: t("events.types.seminar"),
    },
    {
      value: "competition",
      label: t("events.types.competition"),
    },
    {
      value: "career",
      label: t("events.types.career"),
    },
  ];

  const filteredEvents = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return events.filter((event) => {
      const title = t(event.titleKey).toLowerCase();
      const description = t(event.descriptionKey).toLowerCase();
      const location = t(event.locationKey).toLowerCase();

      const matchesSearch =
        title.includes(searchText) ||
        description.includes(searchText) ||
        location.includes(searchText);

      const matchesType =
        selectedType === "all" ||
        event.typeKey === `events.types.${selectedType}`;

      return matchesSearch && matchesType;
    });
  }, [search, selectedType, t]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("all");
  };

  return (
    <main className={styles.eventsPage}>
    <section
  className={`${styles.eventsSection} bg-slate-100`}
  aria-labelledby="events-title"
>
        <div className={styles.eventsContainer}>

          {/* Header */}
          <div className={styles.eventsHeader}>
            <div className={styles.eventsHeaderText}>
              <h1 id="events-title">
                {t("events.title")}
              </h1>

              <p>
                {t("events.description")}
              </p>
            </div>

            {/* Search & Filter */}
            <div className={styles.eventsControls}>
            <SearchBar
  value={search}
  onChange={setSearch}
  placeholder={t("events.searchPlaceholder")}
  label={t("common.search")}
/>

              <Filter
                value={selectedType}
                onChange={setSelectedType}
                options={filterOptions}
                label={t("events.filterByType")}
              />
            </div>
          </div>

          {/* Events */}
          {filteredEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <div className={styles.eventsEmpty}>
              <EmptyState
                onAction={handleClearFilters}
                actionLabel={t("common.clearFilters")}
              />
            </div>
          )}

        </div>
      </section>
    </main>
  );
}