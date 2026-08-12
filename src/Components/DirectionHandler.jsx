import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function DirectionHandler() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [i18n.language]);

  return null;
}

export default DirectionHandler;