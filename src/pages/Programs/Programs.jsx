import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { programs } from "../../data/programs";
import { departments } from "../../data/departments";

import "./programs.css";

function Programs() {
  const { t } = useTranslation();

  const departmentMap = Object.fromEntries(
    departments.map((department) => [department.id, department]),
  );

  return (
    <main className="programs">
      <section className="programs__hero">
        <div className="programs__hero-pattern"></div>

        <div className="site-container programs__hero-container">
          <span className="programs__eyebrow">{t("programs.eyebrow")}</span>

          <h1 className="programs__title">{t("programs.title")}</h1>

          <p className="programs__description">{t("programs.description")}</p>
        </div>
      </section>

      <section className="page-section programs__section">
        <div className="site-container">
          <div className="programs__section-header">
            <div>
              <span className="programs__section-label">
                {t("programs.label")}
              </span>

              <h2>{t("programs.exploreTitle")}</h2>
            </div>

            <p>{t("programs.exploreDescription")}</p>
          </div>

          <div className="programs__grid">
            {programs.map((program, index) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className={`programs__card programs__card--${program.departmentId}`}
              >
                <div className="programs__card-top">
                  <span className="programs__card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="programs__card-department">
                    {departmentMap[program.departmentId]?.shortName}
                  </span>
                </div>

                <div className="programs__card-content">
                  <h3>{t(program.nameKey)}</h3>

                  <p>{t(program.descriptionKey)}</p>
                </div>

                <div className="programs__card-meta">
                  <div>
                    <span>{t("programs.degree")}</span>
                    <strong>{t(program.degreeKey)}</strong>
                  </div>

                  <div>
                    <span>{t("programs.duration")}</span>
                    <strong>{t(program.durationKey)}</strong>
                  </div>
                </div>

                <div className="programs__card-footer">
                  <span>{t("programs.viewProgram")}</span>

                  <span className="programs__arrow">→</span>
                </div>

                <div className="programs__card-line"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="programs__cta">
        <div className="site-container">
          <div className="programs__cta-inner">
            <div className="programs__cta-pattern"></div>

            <div className="programs__cta-content">
              <span className="programs__cta-label">
                {t("programs.cta.label")}
              </span>

              <h2>{t("programs.cta.title")}</h2>

              <p>{t("programs.cta.description")}</p>
            </div>

            <Link to="/departments" className="programs__cta-button">
              {t("programs.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Programs;
