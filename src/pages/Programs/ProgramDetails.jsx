import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { programs } from "../../data/programs";
import { departments } from "../../data/departments";

import "./ProgramDetails.css";

function ProgramDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const program = programs.find((program) => program.id === id);

  const department = departments.find(
    (department) => department.id === program?.departmentId,
  );

  if (!program) {
    return (
      <main className="program-detail">
        <section className="program-detail__not-found">
          <div className="site-container">
            <span className="program-detail__eyebrow">
              {t("programs.title")}
            </span>

            <h1>{t("programs.detail.notFoundTitle")}</h1>

            <p>{t("programs.detail.notFoundDescription")}</p>

            <Link to="/programs" className="program-detail__button">
              {t("programs.detail.backToPrograms")} →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="program-detail">
      <section className="program-detail__hero">
        <div className="program-detail__hero-pattern"></div>

        <div className="site-container program-detail__hero-container">
          <Link to="/programs" className="program-detail__back">
            ← {t("programs.detail.backToPrograms")}
          </Link>

          <div className="program-detail__hero-content">
            <div className="program-detail__number">
              {department?.shortName}
            </div>

            <div>
              <span className="program-detail__eyebrow">
                {t("programs.detail.eyebrow")}
              </span>

              <h1 className="program-detail__title">{t(program.nameKey)}</h1>

              <p className="program-detail__description">
                {t(program.descriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="program-detail__overview">
        <div className="site-container">
          <div className="program-detail__section-header">
            <div>
              <span className="program-detail__section-label">
                {t("programs.detail.overviewLabel")}
              </span>

              <h2>{t("programs.detail.overviewTitle")}</h2>
            </div>

            <p>{t("programs.detail.overviewDescription")}</p>
          </div>

          <div className="program-detail__info-grid">
            <article className="program-detail__info-card">
              <span className="program-detail__info-number">01</span>

              <h3>{t("programs.degree")}</h3>

              <p>{t(program.degreeKey)}</p>
            </article>

            <article className="program-detail__info-card">
              <span className="program-detail__info-number">02</span>

              <h3>{t("programs.duration")}</h3>

              <p>{t(program.durationKey)}</p>
            </article>

            <article className="program-detail__info-card">
              <span className="program-detail__info-number">03</span>

              <h3>{t("programs.detail.department")}</h3>

              <p>{department?.shortName}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="program-detail__description-section">
        <div className="site-container">
          <div className="program-detail__section-header">
            <div>
              <span className="program-detail__section-label">
                {t("programs.detail.descriptionLabel")}
              </span>

              <h2>{t("programs.detail.descriptionTitle")}</h2>
            </div>

            <p>{t(program.descriptionKey)}</p>
          </div>
        </div>
      </section>

      <section className="program-detail__cta">
        <div className="site-container">
          <div className="program-detail__cta-inner">
            <div className="program-detail__cta-pattern"></div>

            <div className="program-detail__cta-content">
              <span>{t("programs.detail.cta.label")}</span>

              <h2>{t("programs.detail.cta.title")}</h2>

              <p>{t("programs.detail.cta.description")}</p>
            </div>

            <Link to="/departments" className="program-detail__cta-button">
              {t("programs.detail.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProgramDetails;
