// CVDownload.jsx - Version complète avec vérification
import React, { useState } from 'react';
import Button from '../Button';


const CVDownload = ({ className = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkFileExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  const handleDownload = async (language) => {
    setLoading(true);
    setError(null);
    
    const cvFiles = {
      french: '/cv/cv_michael_patipe_fr.pdf',
      english: '/cv/cv_michael_patipe_en.pdf'
    };
    
    const url = cvFiles[language];
    
    // Vérifier si le fichier existe
    const exists = await checkFileExists(url);
    
    if (!exists) {
      setError(`Le fichier CV ${language === 'french' ? 'français' : 'anglais'} n'existe pas.`);
      setLoading(false);
      return;
    }
    
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_Michael_Patipe_${language === 'french' ? 'FR' : 'EN'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setLoading(false);
    setShowModal(false);
  };

  return (
    <>
      <Button 
        className={className} 
        size="medium"
        onClick={() => setShowModal(true)}
      >
        Download CV
      </Button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Choose Language / Choisir la langue</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              {error && (
                <div className="error-message">
                  ⚠️{error}
                </div>
              )}
              <button 
                className="language-btn english"
                onClick={() => handleDownload('english')}
                disabled={loading}
              >
                <span className="flag">🇬🇧</span>
                English Version
                <span className="file-size">(PDF)</span>
              </button>
              <button 
                className="language-btn french"
                onClick={() => handleDownload('french')}
                disabled={loading}
              >
                <span className="flag">🇫🇷</span>
                Version Française
                <span className="file-size">(PDF)</span>
              </button>
              {loading && <div className="loading-spinner">Téléchargement en cours...</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVDownload;