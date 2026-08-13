import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import facultyLogo from "../../../assets/navbar/FCDS_logo.jpg";

import "./Navbar.css";

const NAV_LINKS = [
  { path: "/", translationKey: "navbar.home" },
  { path: "/about", translationKey: "navbar.about" },
  { path: "/departments", translationKey: "navbar.departments" },
  { path: "/programs", translationKey: "navbar.programs" },
  { path: "/news", translationKey: "navbar.news" },
  { path: "/announcements", translationKey: "navbar.announcements" },
  { path: "/faculty", translationKey: "navbar.faculty" },
  { path: "/services", translationKey: "navbar.services" },
  { path: "/events", translationKey: "navbar.events" },
  { path: "/contact", translationKey: "navbar.contact" },
];

function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = NAV_LINKS.map((link) => ({
    ...link,
    label: t(link.translationKey),
  }));

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          <NavLink to="/" className="navbar__brand">
            <img
              className="navbar__faculty-icon"
              src={facultyLogo}
              alt="Faculty of Computers and Information"
            />
          </NavLink>

          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <div className="navbar__desktop-language">
              <LanguageSwitcher />
            </div>

            <button
              className="navbar__menu-button"
              type="button"
              onClick={openMobileMenu}
              aria-label={t("common.menu")}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileNavbar
        id="mobile-navigation"
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
      />
    </>
  );
}

export default Navbar;
