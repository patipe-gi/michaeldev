import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // Ajout de l'icône spinner

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  icon = null,
  type = 'button',
  className = '',
  loading = false, // Nouvelle propriété loading
  loadingText = null // Texte optionnel pendant le chargement
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full-width' : '',
    disabled || loading ? 'btn-disabled' : '',
    loading ? 'btn-loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Afficher l'icône de loader si loading est true */}
      {loading && (
        <span className="btn-icon btn-loader-icon">
          <FaSpinner className="spinner" />
        </span>
      )}
      
      {/* Afficher l'icône normale si pas en loading */}
      {!loading && icon && <span className="btn-icon">{icon}</span>}
      
      {/* Texte du bouton */}
      <span className="btn-text">
        {loading && loadingText ? loadingText : children}
      </span>
    </button>
  );
};

export default Button;