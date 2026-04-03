// Header.jsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../public/image/d803a9baf2cafb7c064c4030b74971a7.png';
import Button from '../Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour l'effet de header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className='logo-d'>
          <img className='logo' src={logo} alt="logo" />
        </div>

        {/* Menu burger button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      
        <div className={`hd-item ${isMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            onClick={handleLinkClick}
            end
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/projects"
            onClick={handleLinkClick}
          >
            Projects
          </NavLink>
           <NavLink 
            to="/about"
            onClick={handleLinkClick}
          >
            About me
          </NavLink>
          
          <NavLink 
            to="/skills"
            onClick={handleLinkClick}
          >
            Skills
          </NavLink>   
      
          <NavLink 
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
           {isMenuOpen && (
         <Button 
            className="btn-outline mobile-hire-btn" 
            size='medium'
            onClick={handleLinkClick}
          >
            Hire Me
          </Button>
      )}


         
        </div>

        <Button 
          className="btn-outline" 
          size='medium'
        >
          Hire Me
        </Button>
        
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