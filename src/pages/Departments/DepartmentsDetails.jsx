import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { departments } from "../../data/departments";
import { programs } from "../../data/programs";
import "./DepartmentsDetails.css";

function DepartmentsDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const department = departments.find((department) => department.id === id);

  if (!department) {
    return (
      <main className="department-detail">
        <section className="department-detail__not-found">
          <div className="site-container">
            <span className="department-detail__eyebrow">
              {t("departments.detail.notFound")}
            </span>

            <h1>{t("departments.detail.notFoundTitle")}</h1>

            <p>{t("departments.detail.notFoundDescription")}</p>

            <Link to="/departments" className="department-detail__button">
              {t("departments.detail.backToDepartments")} →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const departmentPrograms = programs.filter(
    (program) => program.departmentId === department.id,
  );

  return (
    <main className="department-detail">
      <section className="department-detail__hero">
        <div className="department-detail__hero-pattern"></div>

        <div className="site-container department-detail__hero-container">
          <Link to="/departments" className="department-detail__back">
            ← {t("departments.detail.backToDepartments")}
          </Link>

          <div className="department-detail__hero-content">
            <div className="department-detail__short-name">
              {department.shortName}
            </div>

            <div>
              <span className="department-detail__eyebrow">
                {t("departments.detail.eyebrow")}
              </span>

              <h1 className="department-detail__title">
                {t(department.nameKey)}
              </h1>

              <p className="department-detail__description">
                {t(department.descriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="department-detail__overview">
        <div className="site-container">
          <div className="department-detail__section-header">
            <div>
              <span className="department-detail__section-label">
                {t("departments.detail.overviewLabel")}
              </span>

              <h2>{t("departments.detail.overviewTitle")}</h2>
            </div>

            <p>{t("departments.detail.overviewDescription")}</p>
          </div>

          <div className="department-detail__info-grid">
            <article className="department-detail__info-card">
              <span className="department-detail__info-number">01</span>

              <h3>{t("departments.detail.departmentHead")}</h3>

              <p>{t(department.headKey)}</p>
            </article>

            <article className="department-detail__info-card">
              <span className="department-detail__info-number">02</span>

              <h3>{t("departments.detail.programs")}</h3>

              <p>
                {departmentPrograms.length}{" "}
                {t("departments.detail.programsAvailable")}
              </p>
            </article>

            <article className="department-detail__info-card">
              <span className="department-detail__info-number">03</span>

              <h3>{t("departments.detail.department")}</h3>

              <p>{department.shortName}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="department-detail__programs">
        <div className="site-container">
          <div className="department-detail__section-header">
            <div>
              <span className="department-detail__section-label">
                {t("departments.detail.programsLabel")}
              </span>

              <h2>{t("departments.detail.programsTitle")}</h2>
            </div>

            <p>{t("departments.detail.programsDescription")}</p>
          </div>

          {departmentPrograms.length > 0 ? (
            <div className="department-detail__program-grid">
              {departmentPrograms.map((program, index) => (
                <Link
                  key={program.id}
                  to={`/programs/${program.id}`}
                  className="department-detail__program-card"
                >
                  <div className="department-detail__program-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <span>{department.shortName}</span>
                  </div>

                  <h3>{t(program.nameKey)}</h3>

                  <p>{t(program.descriptionKey)}</p>

                  <div className="department-detail__program-meta">
                    <span>
                      {t("programs.degree")}:{" "}
                      <strong>{t(program.degreeKey)}</strong>
                    </span>

                    <span>
                      {t("programs.duration")}:{" "}
                      <strong>{t(program.durationKey)}</strong>
                    </span>
                  </div>

                  <span className="department-detail__program-arrow">→</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="department-detail__empty">
              {t("departments.detail.noPrograms")}
            </div>
          )}
        </div>
      </section>

      <section className="department-detail__cta">
        <div className="site-container">
          <div className="department-detail__cta-inner">
            <div className="department-detail__cta-pattern"></div>

            <div className="department-detail__cta-content">
              <span>{t("departments.detail.cta.label")}</span>

              <h2>{t("departments.detail.cta.title")}</h2>

              <p>{t("departments.detail.cta.description")}</p>
            </div>

            <Link to="/programs" className="department-detail__cta-button">
              {t("departments.detail.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DepartmentsDetail;
