import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import events from "../../data/events";
import EventCard from "../../cards/EventCard/EventCard";
import SearchBar from "../../ui/SearchBar/SearchBar";
import Filter from "../../ui/Filter/Filter";
import EmptyState from "../../ui/EmptyState/EmptyState";
import "./Event.css";

function Event() {
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
    <main className="events">
      <section className="events__hero">
        <div className="events__hero-pattern"></div>

        <div className="site-container events__hero-container">
          <span className="events__eyebrow">{t("events.eyebrow")}</span>

          <h1 className="events__title">{t("events.title")}</h1>

          <p className="events__description">{t("events.description")}</p>
        </div>
      </section>

      <section className="page-section events__section">
        <div className="site-container">
          <div className="events__section-header">
            <div>
              <span className="events__section-label">{t("events.label")}</span>

              <h2>{t("events.list")}</h2>
            </div>

            <p>{t("events.listDescription")}</p>
          </div>

          <div className="events__controls-wrapper">
            <div className="events__controls-title">
              {t("events.searchAndFilter")}
            </div>

            <div className="events__controls">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={t("events.searchPlaceholder")}
                label={t("common.search")}
              />

              <Filter
                id="event-type-filter"
                value={selectedType}
                onChange={setSelectedType}
                options={filterOptions}
                label={t("events.filterByType")}
              />
            </div>
          </div>

          <div className="events__results-header">
            <span>
              {t(
                filteredEvents.length === 1
                  ? "events.resultCount.one"
                  : "events.resultCount.other",
              )}
            </span>

            <strong>{filteredEvents.length}</strong>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="events__grid">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="events__empty">
              <EmptyState
                onAction={handleClearFilters}
                actionLabel={t("events.clearFilters")}
              />
            </div>
          )}
        </div>
      </section>

      <section className="events__cta">
        <div className="site-container">
          <div className="events__cta-inner">
            <div className="events__cta-pattern"></div>

            <div className="events__cta-content">
              <span className="events__cta-label">{t("events.cta.label")}</span>

              <h2>{t("events.cta.title")}</h2>

              <p>{t("events.cta.description")}</p>
            </div>

            <Link to="/contact" className="events__cta-button">
              {t("events.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Event;
