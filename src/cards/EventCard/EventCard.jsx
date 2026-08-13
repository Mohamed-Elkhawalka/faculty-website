
import { useTranslation } from "react-i18next";
import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
  const { t } = useTranslation();

  if (!event) {
    return null;
  }

  return (
    <article className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={event.image}
          alt={t(event.titleKey)}
          loading="lazy"
          className={styles.image}
        />

        <span className={styles.type}>
          {t(event.typeKey)}
        </span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Date */}
        <time
          dateTime={event.date}
          className={styles.date}
        >
          {event.date}
        </time>

        {/* Title */}
        <h2 className={styles.title}>
          {t(event.titleKey)}
        </h2>

        {/* Description */}
        <p className={styles.description}>
          {t(event.descriptionKey)}
        </p>

        {/* Event Information */}
        <div className={styles.eventInfo}>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>
              Time
            </span>

            <span>
              {event.time}
            </span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>
              Location
            </span>

            <span>
              {t(event.locationKey)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

