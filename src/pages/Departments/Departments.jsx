import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { departments } from "../../data/departments";
import "./Departments.css";

function Departments() {
  const { t } = useTranslation();

  return (
    <main className="departments">
      <section className="departments__hero">
        <div className="departments__hero-pattern"></div>

        <div className="site-container departments__hero-container">
          <span className="departments__eyebrow">
            {t("departments.eyebrow")}
          </span>

          <h1 className="departments__title">{t("departments.title")}</h1>

          <p className="departments__description">
            {t("departments.description")}
          </p>
        </div>
      </section>

      <section className="page-section departments__section">
        <div className="site-container">
          <div className="departments__section-header">
            <div>
              <span className="departments__section-label">
                {t("departments.label")}
              </span>

              <h2>{t("departments.exploreTitle")}</h2>
            </div>

            <p>{t("departments.exploreDescription")}</p>
          </div>

          <div className="departments__grid">
            {departments.map((department, index) => (
              <Link
                key={department.id}
                to={`/departments/${department.id}`}
                className={`departments__card departments__card--${department.id}`}
              >
                <div className="departments__card-top">
                  <span className="departments__card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="departments__card-short">
                    {department.shortName}
                  </span>
                </div>

                <div className="departments__card-content">
                  <h3>{t(department.nameKey)}</h3>

                  <p>{t(department.descriptionKey)}</p>
                </div>

                <div className="departments__card-footer">
                  <div className="departments__head">
                    <span>{t("departments.departmentHead")}</span>

                    <strong>{t(department.headKey)}</strong>
                  </div>

                  <span className="departments__arrow">→</span>
                </div>

                <div className="departments__card-line"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="departments__cta">
        <div className="site-container">
          <div className="departments__cta-inner">
            <div className="departments__cta-pattern"></div>

            <div className="departments__cta-content">
              <span className="departments__cta-label">
                {t("departments.cta.label")}
              </span>

              <h2>{t("departments.cta.title")}</h2>

              <p>{t("departments.cta.description")}</p>
            </div>

            <Link to="/programs" className="departments__cta-button">
              {t("departments.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Departments;
