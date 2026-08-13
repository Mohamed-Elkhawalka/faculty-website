import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import announcements from "../../Data/announcement";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Filter from "../../UI/Filter/Filter";
import EmptyState from "../../UI/EmptyState/EmptyState";
import AnnouncementCard from "../../Cards/AnnouncementCard/AnnouncementCard";
import "./Announcement.css";

function Announcement() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filterOptions = [
    {
      value: "all",
      label: t("announcements.filters.all"),
    },
    {
      value: "important",
      label: t("announcements.types.important"),
    },
    {
      value: "academic",
      label: t("announcements.types.academic"),
    },
    {
      value: "students",
      label: t("announcements.types.students"),
    },
    {
      value: "general",
      label: t("announcements.types.general"),
    },
  ];

  const filteredAnnouncements = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return announcements.filter((announcement) => {
      const title = t(announcement.titleKey).toLowerCase();
      const description = t(announcement.descriptionKey).toLowerCase();

      const matchesSearch =
        title.includes(searchText) || description.includes(searchText);

      const matchesType =
        selectedType === "all" ||
        announcement.typeKey === `announcements.types.${selectedType}`;

      return matchesSearch && matchesType;
    });
  }, [search, selectedType, t]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("all");
  };

  return (
    <main className="announcements">
      <section className="announcements__hero">
        <div className="announcements__hero-pattern"></div>

        <div className="site-container announcements__hero-container">
          <span className="announcements__eyebrow">
            {t("announcements.eyebrow")}
          </span>

          <h1 className="announcements__title">{t("announcements.title")}</h1>

          <p className="announcements__description">
            {t("announcements.description")}
          </p>
        </div>
      </section>

      <section className="announcements__section">
        <div className="site-container">
          <div className="announcements__section-header">
            <div>
              <span className="announcements__section-label">
                {t("announcements.label")}
              </span>

              <h2>{t("announcements.latestTitle")}</h2>
            </div>

            <p>{t("announcements.latestDescription")}</p>
          </div>

          <div className="announcements__controls-wrapper">
            <div className="announcements__controls-title">
              {t("announcements.searchAndFilter")}
            </div>

            <div className="announcements__controls">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={t("announcements.searchPlaceholder")}
                label={t("common.search")}
              />

              <Filter
                id="announcement-type-filter"
                value={selectedType}
                onChange={setSelectedType}
                options={filterOptions}
                label={t("announcements.filterByType")}
              />
            </div>
          </div>

          <div className="announcements__results-header">
            <span>
              {t(
                filteredAnnouncements.length === 1
                  ? "announcements.resultCount.one"
                  : "announcements.resultCount.other",
              )}
            </span>

            <strong>{filteredAnnouncements.length}</strong>
          </div>

          {filteredAnnouncements.length > 0 ? (
            <div className="announcements__grid">
              {filteredAnnouncements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              ))}
            </div>
          ) : (
            <div className="announcements__empty">
              <EmptyState
                onAction={handleClearFilters}
                actionLabel={t("announcements.clearFilters")}
              />
            </div>
          )}
        </div>
      </section>

      <section className="announcements__cta">
        <div className="site-container">
          <div className="announcements__cta-inner">
            <div className="announcements__cta-pattern"></div>

            <div className="announcements__cta-content">
              <span className="announcements__cta-label">
                {t("announcements.cta.label")}
              </span>

              <h2>{t("announcements.cta.title")}</h2>

              <p>{t("announcements.cta.description")}</p>
            </div>

            <a href="/contact" className="announcements__cta-button">
              {t("announcements.cta.button")} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Announcement;
