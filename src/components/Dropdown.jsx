// components/Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown } from 'react-icons/fa';


const Dropdown = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select an option',
  label = null,
  disabled = false,
  className = '',
  fullWidth = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const buttonRef = useRef(null);
  const dropdownId = useRef(`dropdown-${Math.random().toString(36).substr(2, 9)}`);

  const selectedOption = options.find(opt => opt.value === value);

  // Calculer la position du menu
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const menuHeight = 280;
      
      let top = rect.bottom + 5;
      
      if (spaceBelow < menuHeight && rect.top > menuHeight) {
        top = rect.top - menuHeight - 5;
      }
      
      setMenuStyle({
        position: 'fixed',
        top: top,
        left: rect.left,
        minWidth: Math.max(rect.width, 150),
        zIndex: 99999,
      });
    }
  }, [isOpen]);

  // Fermer quand on clique ailleurs (MAIS PAS QUAND ON SCROLL)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Vérifier si le clic est en dehors du bouton
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Vérifier si le clic n'est pas sur le menu portal
        const menuElement = document.querySelector(`.dropdown-menu-${dropdownId.current}`);
        if (menuElement && !menuElement.contains(event.target)) {
          setIsOpen(false);
        } else if (!menuElement) {
          setIsOpen(false);
        }
      }
    };
    
    // Fermer avec la touche Echap
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, dropdownId]);

  // Mettre à jour la position du menu quand on scroll (pour qu'il suive)
  useEffect(() => {
    if (!isOpen) return;
    
    const handleScroll = () => {
      if (buttonRef.current && isOpen) {
        const rect = buttonRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const menuHeight = 280;
        
        let top = rect.bottom + 5;
        
        if (spaceBelow < menuHeight && rect.top > menuHeight) {
          top = rect.top - menuHeight - 5;
        }
        
        setMenuStyle(prev => ({
          ...prev,
          top: top,
          left: rect.left,
        }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div 
      className={`dropdown ${fullWidth ? 'dropdown-full-width' : ''} ${className}`} 
      style={{ position: 'relative' }}
    >
      {label && <label className="dropdown-label">{label}</label>}
      
      <button
        ref={buttonRef}
        type="button"
        className={`dropdown-button ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={handleToggle}
        disabled={disabled}
      >
        <span className="dropdown-selected-text">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FaChevronDown className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && createPortal(
        <div 
          className={`dropdown-menu-portal dropdown-menu-${dropdownId.current}`}
          style={menuStyle}
        >
          <div className="dropdown-menu-inner">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`dropdown-item ${option.value === value ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <span className="dropdown-item-label">{option.label}</span>
                {option.value === value && <span className="dropdown-check">✓</span>}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Dropdown;