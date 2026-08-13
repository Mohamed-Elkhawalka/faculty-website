import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <h1>{t("about.title")}</h1>
          <p>{t("about.introduction")}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-grid">
            <article className="about-card">
              <div className="about-card__icon">01</div>
              <h2>{t("about.vision.title")}</h2>
              <p>{t("about.vision.text")}</p>
            </article>

            <article className="about-card">
              <div className="about-card__icon">02</div>
              <h2>{t("about.mission.title")}</h2>
              <p>{t("about.mission.text")}</p>
            </article>
          </div>

          <section className="about-values">
            <div className="about-values__heading">
              <h2>{t("about.values.title")}</h2>
            </div>

            <ul className="about-values__list">
              <li>{t("about.values.excellence")}</li>
              <li>{t("about.values.innovation")}</li>
              <li>{t("about.values.integrity")}</li>
              <li>{t("about.values.teamwork")}</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default About;