import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className="language-switcher">
      <button
        type="button"
        className={`language-btn ${
          i18n.language === "en" ? "active" : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>

      <button
        type="button"
        className={`language-btn ${
          i18n.language === "ar" ? "active" : ""
        }`}
        onClick={() => changeLanguage("ar")}
      >
        العربية
      </button>
    </div>
  );
}

export default LanguageSwitcher;