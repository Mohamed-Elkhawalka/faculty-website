import { useTranslation } from "react-i18next";
import facultyLogo from "../../../assets/navbar/FCDS_logo.jpg"
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__pattern"></div>

      <div className="site-container footer__container">
        <div className="footer__main">
          {/* Faculty Info */}
          <div className="footer__brand">
            <img
              className="footer__logo"
              src={facultyLogo}
              alt="Faculty of Computers and Information"
            />

            <div>
              <h2>{t("footer.title")}</h2>

              <p>{t("footer.description")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3>{t("footer.quickLinks")}</h3>

            <a href="/">{t("footer.home")}</a>
            <a href="/about">{t("footer.about")}</a>
            <a href="/departments">{t("footer.departments")}</a>
            <a href="/programs">{t("footer.programs")}</a>
          </div>

          {/* Academic */}
          <div className="footer__column">
            <h3>{t("footer.academic")}</h3>

            <a href="/faculty">{t("footer.faculty")}</a>
            <a href="/news">{t("footer.news")}</a>
            <a href="/events">{t("footer.events")}</a>
            <a href="/services">{t("footer.services")}</a>
          </div>

          {/* Contact */}
          <div className="footer__column footer__contact">
            <h3>{t("footer.contact")}</h3>

            <p>{t("footer.address")}</p>
            <p>{t("footer.facultyName")}</p>

            <a href="/contact">{t("footer.contactUs")} →</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{t("footer.copyright")}</p>

          <div className="footer__bottom-links">
            <a href="/privacy">{t("footer.privacy")}</a>

            <span>•</span>

            <a href="/contact">{t("footer.contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
