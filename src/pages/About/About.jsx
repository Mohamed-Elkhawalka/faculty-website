import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <main>
      <section>
        <h1>{t("about.title")}</h1>
        <p>{t("about.introduction")}</p>
      </section>

      <section>
        <h2>{t("about.vision.title")}</h2>
        <p>{t("about.vision.text")}</p>
      </section>

      <section>
        <h2>{t("about.mission.title")}</h2>
        <p>{t("about.mission.text")}</p>
      </section>

      <section>
        <h2>{t("about.values.title")}</h2>

        <ul>
          <li>{t("about.values.excellence")}</li>
          <li>{t("about.values.innovation")}</li>
          <li>{t("about.values.integrity")}</li>
          <li>{t("about.values.teamwork")}</li>
        </ul>
      </section>
    </main>
  );
}

export default About;