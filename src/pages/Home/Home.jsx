import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  const departments = [
    {
      key: "cs",
      title: t("home.departments.cs"),
      description: t("home.departments.csDescription"),
    },
    {
      key: "is",
      title: t("home.departments.is"),
      description: t("home.departments.isDescription"),
    },
    {
      key: "ai",
      title: t("home.departments.ai"),
      description: t("home.departments.aiDescription"),
    },
  ];

  const features = [
    {
      icon: "01",
      title: t("home.features.quality.title"),
      text: t("home.features.quality.text"),
    },
    {
      icon: "02",
      title: t("home.features.innovation.title"),
      text: t("home.features.innovation.text"),
    },
    {
      icon: "03",
      title: t("home.features.future.title"),
      text: t("home.features.future.text"),
    },
  ];

  return (
    <main className="home">
      {/* =========================
          Hero
      ========================= */}
      <section className="home__hero">
        <div className="home__hero-pattern"></div>

        <div className="site-container home__hero-container">
          <div className="home__hero-content">
            <span className="home__eyebrow">{t("home.hero.eyebrow")}</span>

            <h1 className="home__title">
              {t("home.hero.title")}
              <span>{t("home.hero.highlight")}</span>
            </h1>

            <p className="home__description">{t("home.hero.description")}</p>

            <div className="home__actions">
              <Link
                to="/departments"
                className="home__button home__button--primary"
              >
                {t("home.hero.explore")}
                <span>→</span>
              </Link>

              <Link
                to="/about"
                className="home__button home__button--secondary"
              >
                {t("home.hero.learnMore")}
              </Link>
            </div>
          </div>

          <div className="home__hero-visual">
            <div className="home__circle home__circle--one"></div>
            <div className="home__circle home__circle--two"></div>

            <div className="home__visual-card">
              <span className="home__visual-number">01</span>

              <h2>{t("home.hero.cardTitle")}</h2>

              <p>{t("home.hero.cardText")}</p>

              <div className="home__visual-line"></div>
            </div>
          </div>
        </div>

        <div className="home__scroll">
          <span></span>
          <small>{t("home.hero.scroll")}</small>
        </div>
      </section>

      {/* =========================
          Stats
      ========================= */}
      <section className="home__stats">
        <div className="site-container home__stats-grid">
          <div className="home__stat">
            <strong>5+</strong>
            <span>{t("home.stats.departments")}</span>
          </div>

          <div className="home__stat">
            <strong>20+</strong>
            <span>{t("home.stats.programs")}</span>
          </div>

          <div className="home__stat">
            <strong>100+</strong>
            <span>{t("home.stats.faculty")}</span>
          </div>

          <div className="home__stat">
            <strong>2026</strong>
            <span>{t("home.stats.established")}</span>
          </div>
        </div>
      </section>

      {/* =========================
          Departments
      ========================= */}
      <section className="page-section home__departments">
        <div className="site-container">
          <div className="section-header home__section-header">
            <div>
              <span className="home__section-label">
                {t("home.departments.label")}
              </span>

              <h2>{t("home.departments.title")}</h2>
            </div>

            <Link to="/departments" className="home__view-all">
              {t("home.departments.viewAll")} →
            </Link>
          </div>

          <div className="home__department-grid">
            {departments.map((department) => (
              <Link
                to="/departments"
                className={`home__department-card home__department-card--${department.key}`}
                key={department.key}
              >
                <span className="home__department-number">
                  {department.key.toUpperCase()}
                </span>

                <h3>{department.title}</h3>

                <p>{department.description}</p>

                <span className="home__department-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          Features
      ========================= */}
      <section className="home__features">
        <div className="site-container">
          <div className="home__features-header">
            <span className="home__section-label">
              {t("home.features.label")}
            </span>

            <h2>{t("home.features.title")}</h2>

            <p>{t("home.features.description")}</p>
          </div>

          <div className="home__features-grid">
            {features.map((feature) => (
              <article className="home__feature" key={feature.icon}>
                <span className="home__feature-number">{feature.icon}</span>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="home__cta">
        <div className="site-container">
          <div className="home__cta-inner">
            <div className="home__cta-content">
              <p className="home__cta-eyebrow">{t("home.cta.label")}</p>

              <h2 className="home__cta-title">{t("home.cta.title")}</h2>

              <p className="home__cta-text">{t("home.cta.description")}</p>
            </div>

            <a href="/contact" className="home__cta-button">
              {t("home.cta.button")} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
