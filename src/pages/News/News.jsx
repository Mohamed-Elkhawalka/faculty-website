import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import news from "../../Data/news";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Filter from "../../UI/Filter/Filter";
import EmptyState from "../../UI/EmptyState/EmptyState";
import NewsCard from "../../Cards/NewsCard/NewsCard";

import styles from "./News.module.css";

const FILTER_OPTIONS = [
  {
    value: "all",
    translationKey: "news.filters.all",
  },
  {
    value: "academic",
    translationKey: "news.filters.academic",
  },
  {
    value: "research",
    translationKey: "news.filters.research",
  },
  {
    value: "events",
    translationKey: "news.filters.events",
  },
  {
    value: "students",
    translationKey: "news.filters.students",
  },
];

export default function News() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filterOptions = FILTER_OPTIONS.map((option) => ({
    value: option.value,
    label: t(option.translationKey),
  }));

  const filteredNews = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return news.filter((item) => {
      const title = t(item.titleKey).toLowerCase();
      const description = t(item.descriptionKey).toLowerCase();

      const matchesSearch =
        title.includes(searchText) || description.includes(searchText);

      const matchesCategory =
        category === "all" || item.categoryKey === `news.filters.${category}`;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, t]);

  const handleClearFilters = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <main className={styles.news}>
      <section className={styles.newsHero}>
        <div className={styles.newsHeroPattern}></div>

        <div className={`site-container ${styles.newsHeroContainer}`}>
          <span className={styles.newsEyebrow}>{t("news.eyebrow")}</span>

          <h1 className={styles.newsTitle}>{t("news.title")}</h1>

          <p className={styles.newsHeroDescription}>{t("news.description")}</p>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className="site-container">
          <div className={styles.newsSectionHeader}>
            <div>
              <span className={styles.newsSectionLabel}>{t("news.label")}</span>

              <h2>{t("news.latestTitle")}</h2>
            </div>

            <p>{t("news.latestDescription")}</p>
          </div>

          <div className={styles.newsControls}>
            <div className={styles.newsSearch}>
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={t("news.searchPlaceholder")}
                label={t("common.search")}
              />
            </div>

            <div className={styles.newsFilter}>
              <Filter
                id="news-category-filter"
                value={category}
                onChange={setCategory}
                options={filterOptions}
                label={t("news.filterByCategory")}
              />
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className={styles.newsGrid}>
              {filteredNews.map((item, index) => (
                <div
                  key={item.id}
                  className={styles.newsCardWrapper}
                  style={{
                    "--news-delay": `${index * 0.07}s`,
                  }}
                >
                  <NewsCard news={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.newsEmpty}>
              <EmptyState
                onAction={handleClearFilters}
                actionLabel={t("news.clearFilters")}
              />
            </div>
          )}
        </div>
      </section>

      <section className={styles.newsCta}>
        <div className="site-container">
          <div className={styles.newsCtaInner}>
            <div className={styles.newsCtaPattern}></div>

            <div className={styles.newsCtaContent}>
              <span className={styles.newsCtaLabel}>{t("news.cta.label")}</span>

              <h2>{t("news.cta.title")}</h2>

              <p>{t("news.cta.description")}</p>
            </div>

            <Link to="/events" className={styles.newsCtaButton}>
              {t("news.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
