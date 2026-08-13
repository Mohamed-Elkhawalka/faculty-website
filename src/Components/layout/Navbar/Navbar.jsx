import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import facultyLogo from "../../../assets/navbar/FCDS_logo.jpg";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", label: t("navbar.home") },
    { path: "/about", label: t("navbar.about") },
    { path: "/departments", label: t("navbar.departments") },
    { path: "/programs", label: t("navbar.programs") },
    { path: "/news", label: t("navbar.news") },
    { path: "/announcements", label: t("navbar.announcements") },
    { path: "/faculty", label: t("navbar.faculty") },
    { path: "/services", label: t("navbar.services") },
    { path: "/events", label: t("navbar.events") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Faculty Logo */}
        <NavLink to="/" className="navbar__brand">
          <img
            className="navbar__faculty-icon"
            src={facultyLogo}
            alt="Faculty of Computers and Information"
          />
        </NavLink>

        {/* Desktop Navigation */}
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

        {/* Navbar Actions */}
        <div className="navbar__actions">
          {/* Desktop Language Switcher */}
          <div className="navbar__desktop-language">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__menu-button"
            type="button"
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
