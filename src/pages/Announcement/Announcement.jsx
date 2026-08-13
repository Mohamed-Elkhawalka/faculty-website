import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import announcements from "../../Data/announcement";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Filter from "../../UI/Filter/Filter";
import EmptyState from "../../UI/EmptyState/EmptyState";
import AnnouncementCard from "../../Cards/AnnouncementCard/AnnouncementCard";

import styles from "./Announcement.module.css";

export default function Announcement() {
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
        title.includes(searchText) ||
        description.includes(searchText);

      const matchesType =
        selectedType === "all" ||
        announcement.typeKey ===
          `announcements.types.${selectedType}`;

      return matchesSearch && matchesType;
    });
  }, [search, selectedType, t]);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("all");
  };

  return (
    <main className={styles.announcementsPage}>
      <section
        className={`${styles.announcementsSection} bg-slate-100`}
        aria-labelledby="announcements-title"
      >
        <div className={styles.announcementsContainer}>

          {/* Header */}
          <div className={styles.announcementsHeader}>
            <div className={styles.announcementsHeaderText}>
              <h1 id="announcements-title">
                {t("announcements.title")}
              </h1>

              <p>
                {t("announcements.description")}
              </p>
            </div>

            {/* Search & Filter */}
            <div className={styles.announcementsControls}>
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={t("announcements.searchPlaceholder")}
                label={t("common.search")}
              />

              <Filter
                value={selectedType}
                onChange={setSelectedType}
                options={filterOptions}
                label={t("announcements.filterByType")}
              />
            </div>
          </div>

          {/* Announcements */}
          {filteredAnnouncements.length > 0 ? (
            <div className={styles.announcementsGrid}>
              {filteredAnnouncements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              ))}
            </div>
          ) : (
            <div className={styles.announcementsEmpty}>
              <EmptyState
                onAction={handleClearFilters}
                actionLabel={t("announcements.clearFilters")}
              />
            </div>
          )}

        </div>
      </section>
    </main>
  );
}