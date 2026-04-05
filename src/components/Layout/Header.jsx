import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import logo from "./../../../public/image/d803a9baf2cafb7c064c4030b74971a7.png";
import Button from "../Button";
import Loader from "../Loader";
import { LanguageSwitcher } from "../LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navigating, setNavigating] = useState(false);

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
      setIsMenuOpen(false);
      setNavigating(false);
    }, 300);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  if (navigating) {
    return <Loader />;
  }

  return (
    <>
      <header className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-d">
          <img className="logo" src={logo} alt="logo" />
        </div>

        
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`hd-item ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={handleLinkClick} end>
            {t('navigation.home')}
          </NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>
            {t('navigation.projects')}
          </NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>
            {t('navigation.about')}
          </NavLink>
          {/* <NavLink to="/skills" onClick={handleLinkClick}>
            {t('navigation.skills')}
          </NavLink> */}
          <NavLink to="/contact" onClick={handleLinkClick}>
            {t('navigation.contact')}
          </NavLink>
          
         
          <div className="mobile-lang-wrapper">
            <LanguageSwitcher onClick={handleLinkClick}  />
          </div>
            {isMenuOpen && (
              <Button
                className="btn-outline mobile-hire-btn"
                size="medium"
                onClick={handleLinkClick}
              >
                {t('navigation.hireMe')}
              </Button>
            )}
        </div>

      
        <div className="header-right">
          <LanguageSwitcher />
          <Button className="btn-outline desktop-hire-btn" size="medium">
            {t('navigation.hireMe')}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="mobile-overlay open"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;