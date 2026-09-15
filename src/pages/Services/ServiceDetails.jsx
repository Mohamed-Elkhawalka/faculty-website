import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { services } from "../../data/services";

import "./ServiceDetails.css";

function ServiceDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const service = services.find((service) => service.id === id);

  if (!service) {
    return (
      <main className="service-detail">
        <section className="service-detail__not-found">
          <div className="site-container">
            <span className="service-detail__eyebrow">
              {t("services.title")}
            </span>

            <h1>{t("services.detail.notFoundTitle")}</h1>

            <p>{t("services.detail.notFoundDescription")}</p>

            <Link to="/services" className="service-detail__button">
              {t("services.detail.backToServices")} →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="service-detail">
      <section className="service-detail__hero">
        <div className="service-detail__hero-pattern"></div>

        <div className="site-container service-detail__hero-container">
          <Link to="/services" className="service-detail__back">
            ← {t("services.detail.backToServices")}
          </Link>

          <div className="service-detail__hero-content">
            <div className="service-detail__category">
              {service.categoryKey}
            </div>

            <div>
              <span className="service-detail__eyebrow">
                {t("services.detail.eyebrow")}
              </span>

              <h1 className="service-detail__title">{t(service.nameKey)}</h1>

              <p className="service-detail__description">
                {t(service.descriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail__overview">
        <div className="site-container">
          <div className="service-detail__section-header">
            <div>
              <span className="service-detail__section-label">
                {t("services.detail.overviewLabel")}
              </span>

              <h2>{t("services.detail.overviewTitle")}</h2>
            </div>

            <p>{t(service.descriptionKey)}</p>
          </div>

          <div className="service-detail__info-grid">
            <article className="service-detail__info-card">
              <span className="service-detail__info-number">01</span>

              <h3>{t("services.detail.service")}</h3>

              <p>{t(service.nameKey)}</p>
            </article>

            <article className="service-detail__info-card">
              <span className="service-detail__info-number">02</span>

              <h3>{t("services.detail.category")}</h3>

              <p>{t(`services.categories.${service.categoryKey}`)}</p>
            </article>

            <article className="service-detail__info-card">
              <span className="service-detail__info-number">03</span>

              <h3>{t("services.detail.department")}</h3>

              <p>{t("services.title")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="service-detail__content">
        <div className="site-container">
          <div className="service-detail__content-inner">
            <span className="service-detail__section-label">
              {t("services.detail.informationLabel")}
            </span>

            <h2>{t(service.nameKey)}</h2>

            <p>{t(service.descriptionKey)}</p>
          </div>
        </div>
      </section>

      <section className="service-detail__cta">
        <div className="site-container">
          <div className="service-detail__cta-inner">
            <div className="service-detail__cta-pattern"></div>

            <div className="service-detail__cta-content">
              <span>{t("services.detail.cta.label")}</span>

              <h2>{t("services.detail.cta.title")}</h2>

              <p>{t("services.detail.cta.description")}</p>
            </div>

            <Link to="/services" className="service-detail__cta-button">
              {t("services.detail.cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetails;
