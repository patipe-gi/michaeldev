import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { 
  FaHome, 
  FaFolder, 
  FaUser, 
  FaEnvelope 
} from "react-icons/fa";
import logo from "./../../../public/image/d803a9baf2cafb7c064c4030b74971a7.png";
import Button from "../Button";
import Loader from "../Loader";
import { LanguageSwitcher } from "../LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [navigating, setNavigating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setNavigating(true);
    setTimeout(() => {
      setNavigating(false);
    }, 300);
  };

  if (navigating) {
    return <Loader />;
  }

  // Navigation items pour la bottom bar mobile
  const navItems = [
    { path: "/", label: "navigation.home", icon: FaHome },
    { path: "/projects", label: "navigation.projects", icon: FaFolder },
    { path: "/about", label: "navigation.about", icon: FaUser },
    { path: "/contact", label: "navigation.contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Desktop Header - inchangé */}
      <header className={`nav desktop-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-d">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="hd-item">
          <NavLink to="/" onClick={handleLinkClick} end>
            {t('navigation.home')}
          </NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>
            {t('navigation.projects')}
          </NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>
            {t('navigation.about')}
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>
            {t('navigation.contact')}
          </NavLink>
        </div>

        <div className="header-right">
          <LanguageSwitcher />
          <Button className="btn-outline desktop-hire-btn" size="medium">
            {t('navigation.hireMe')}
          </Button>
        </div>
      </header>

      {/* Mobile Header - simplifié avec logo + language switcher */}
      <header className={`mobile-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-d">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <LanguageSwitcher />
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) => `bottom-nav-item ${isActive ? "active" : ""}`}
              end={item.path === "/"}
            >
              <Icon />
              <span>{t(item.label)}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Header;