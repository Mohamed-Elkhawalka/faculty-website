import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./NewsCard.module.css";

function NewsCard({ news }) {
  const { t } = useTranslation();

  if (!news) {
    return null;
  }

  return (
    <article className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={news.image}
          alt={t(news.titleKey)}
          loading="lazy"
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>

        {/* Meta */}
        <div className={styles.meta}>
          <span className={styles.category}>
            {t(news.categoryKey)}
          </span>

          <time
            dateTime={news.date}
            className={styles.date}
          >
            {news.date}
          </time>
        </div>

        {/* Title */}
        <h2 className={styles.title}>
          {t(news.titleKey)}
        </h2>

        {/* Description */}
        <p className={styles.description}>
          {t(news.descriptionKey)}
        </p>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.articleLabel}>
            {t("news.facultyNews")}
          </span>

          <Link
            to={`/news/${news.id}`}
            className={styles.readMore}
          >
            {t("news.readMore")}

            
          </Link>
        </div>

      </div>
    </article>
  );
}

export default memo(NewsCard);