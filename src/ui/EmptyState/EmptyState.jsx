import { useTranslation } from "react-i18next";
import styles from "./EmptyState.module.css";

export default function EmptyState({
  title,
  description,
  onAction,
  actionLabel,
}) {
  const { t } = useTranslation();

  return (
    <div
      className={styles.emptyState}
      role="status"
      aria-live="polite"
    >
      {/* Accent */}
      <div
        className={styles.accent}
        aria-hidden="true"
      />

      <div className={styles.content}>

        

        {/* Title */}
        <h3 className={styles.title}>
          {title ?? t("common.noResults")}
        </h3>

        {/* Description */}
        <p className={styles.description}>
          {description ?? t("emptyState.description")}
        </p>

       
      </div>
    </div>
  );
}