import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher";

import "./MobileNavbar.css";

function MobileNavbar({ id = "mobile-navigation", isOpen, onClose, navLinks }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`mobile-navbar-overlay ${
          isOpen ? "mobile-navbar-overlay--open" : ""
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id={id}
        className={`mobile-navbar ${isOpen ? "mobile-navbar--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-navbar__header">
          <span className="mobile-navbar__label">{t("common.menu")}</span>

          <button
            type="button"
            className="mobile-navbar__close"
            onClick={onClose}
            aria-label={t("common.close")}
          >
            ×
          </button>
        </div>

        <nav className="mobile-navbar__nav" aria-label={t("common.navigation")}>
          {navLinks.map(({ path, label }, index) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `mobile-navbar__link ${
                  isActive ? "mobile-navbar__link--active" : ""
                }`
              }
            >
              <span className="mobile-navbar__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{label}</span>

              <span className="mobile-navbar__arrow">→</span>
            </NavLink>
          ))}
        </nav>

        <div className="mobile-navbar__footer">
          <LanguageSwitcher />
        </div>
      </aside>
    </>
  );
}

export default MobileNavbar;
