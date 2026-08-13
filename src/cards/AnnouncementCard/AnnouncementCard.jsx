import { useTranslation } from "react-i18next";

import styles from "./AnnouncementCard.module.css";

const TYPE_STYLES = {
  important: styles.important,
  academic: styles.academic,
  students: styles.students,
  general: styles.general,
};

export default function AnnouncementCard({ announcement }) {
  const { t } = useTranslation();

  if (!announcement) {
    return null;
  }

  const type = announcement.typeKey.split(".").pop();

  const typeStyle = TYPE_STYLES[type] ?? styles.general;

  return (
    <article className={styles.card}>
      {/* Accent */}
      <div
        className={styles.accent}
        aria-hidden="true"
      />

      <div className={styles.content}>
        {/* Meta */}
        <div className={styles.meta}>
          <span className={`${styles.type} ${typeStyle}`}>
            {t(announcement.typeKey)}
          </span>

          <time
            dateTime={announcement.date}
            className={styles.date}
          >
            {announcement.date}
          </time>
        </div>

        {/* Main Content */}
        <div className={styles.body}>
          <h2 className={styles.title}>
            {t(announcement.titleKey)}
          </h2>

          <p className={styles.description}>
            {t(announcement.descriptionKey)}
          </p>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.label}>
            {t("announcements.universityAnnouncement")}
          </span>

         
        </div>
      </div>
    </article>
  );
}