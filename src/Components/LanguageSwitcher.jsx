import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "ar" ? "en" : "ar";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const currentLanguage = i18n.language === "ar" ? "AR" : "EN";

  return (
    <button
      className="language-switcher"
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === "ar" ? "English" : "Arabic"}`}
    >
      {currentLanguage}
    </button>
  );
}

export default LanguageSwitcher;
