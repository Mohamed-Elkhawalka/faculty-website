import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import news from "../../Data/news";

import styles from "./NewsDetails.module.css";

export default function NewsDetails() {
  const { t } = useTranslation();
  const { id } = useParams();

  const article = news.find(
    (item) => item.id === Number(id)
  );

  /* =========================
     Article Not Found
  ========================= */

  if (!article) {
    return (
      <main className={styles.detailsPage}>
        <section className={styles.notFound}>
          <div className={styles.notFoundContent}>
            <span className={styles.eyebrow}>
              {t("news.title")}
            </span>

            <h1>
              {t("news.articleNotFound")}
            </h1>

            <p>
              {t("news.articleNotFoundDescription")}
            </p>

            <Link
              to="/news"
              className={styles.primaryButton}
            >
              {t("news.backToNews")}
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.detailsPage}>
      <section className={styles.detailsSection}>
        <div className={styles.detailsContainer}>

          {/* Header */}
          <header className={styles.detailsHeader}>
            <span className={styles.eyebrow}>
              {t("news.title")}
            </span>

            <h1>
              {t(article.titleKey)}
            </h1>

            <div className={styles.meta}>
              <span className={styles.category}>
                {t(article.categoryKey)}
              </span>

              <span
                className={styles.separator}
                aria-hidden="true"
              >
                •
              </span>

              <time dateTime={article.date}>
                {article.date}
              </time>
            </div>
          </header>

          {/* Article */}
          <article className={styles.article}>

            {/* Image */}
            <div className={styles.imageWrapper}>
              <img
                src={article.image}
                alt={t(article.titleKey)}
                loading="eager"
                className={styles.image}
              />
            </div>

            {/* Content */}
            <div className={styles.content}>

              {/* Description */}
              <p className={styles.description}>
                {t(article.descriptionKey)}
              </p>

              <div
                className={styles.divider}
                aria-hidden="true"
              />

              {/* Article Content */}
              <div className={styles.articleText}>
                <p>
                  {t(article.contentKey)}
                </p>
              </div>

              {/* Back */}
              <div className={styles.actions}>
                <Link
                  to="/news"
                  className={styles.secondaryButton}
                >
                 

                  {t("news.backToNews")}
                </Link>
              </div>

            </div>
          </article>

        </div>
      </section>
    </main>
  );
}