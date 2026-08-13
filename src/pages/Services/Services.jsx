import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services } from "../../data/services";
import "./Services.css";

function Services() {
  const { t } = useTranslation();

  return (
    <main className="services">
      <section className="services__hero">
        <div className="services__hero-pattern"></div>

        <div className="site-container services__hero-container">
          <span className="services__eyebrow">{t("services.eyebrow")}</span>

          <h1 className="services__title">{t("services.title")}</h1>

          <p className="services__description">{t("services.description")}</p>
        </div>
      </section>

      <section className="page-section services__section">
        <div className="site-container">
          <div className="services__section-header">
            <div>
              <span className="services__section-label">
                {t("services.label")}
              </span>

              <h2>{t("services.exploreTitle")}</h2>
            </div>

            <p>{t("services.exploreDescription")}</p>
          </div>

          <div className="services__grid">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="services__card"
              >
                <div className="services__card-top">
                  <span className="services__card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="services__card-category">
                    {t(`services.categories.${service.categoryKey}`)}
                  </span>
                </div>

                <div className="services__card-content">
                  <h3>{t(service.nameKey)}</h3>

                  <p>{t(service.descriptionKey)}</p>
                </div>

                <div className="services__card-footer">
                  <span>{t("services.learnMore")}</span>

                  <span className="services__arrow">→</span>
                </div>

                <div className="services__card-line"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services__cta">
        <div className="site-container">
          <div className="services__cta-inner">
            <div className="services__cta-pattern"></div>

            <div className="services__cta-content">
              <span className="services__cta-label">
                {t("services.cta.label")}
              </span>

              <h2>{t("services.cta.title")}</h2>

              <p>{t("services.cta.description")}</p>
            </div>

            <Link to="/contact" className="services__cta-button">
              {t("services.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
