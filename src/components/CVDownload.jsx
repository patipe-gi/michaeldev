import React, { useState } from 'react';
import toast from 'react-hot-toast'; // Importer toast
import Button from './Button';
import Loader from './Loader'; 

const CVDownload = ({ className = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const checkFileExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  const handleDownload = async (language) => {
    setDownloadLoading(true); 
    setError(null);
    
    // Afficher un toast de chargement
    const loadingToast = toast.loading('Préparation du téléchargement...');
    
    const cvFiles = {
      french: '/cv/cv_michael_patipe_fr.pdf',
      english: '/cv/cv_michael_patipe_en.pdf'
    };
    
    const url = cvFiles[language];
    console.log('Tentative de téléchargement depuis:', url);
    
    try {
      const exists = await checkFileExists(url);
      
      if (!exists) {
        throw new Error(`Le fichier CV ${language === 'french' ? 'français' : 'anglais'} n'existe pas.`);
      }
      
      // Simuler un petit délai pour voir le loader
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Créer le lien de téléchargement
      const link = document.createElement('a');
      link.href = url;
      link.download = `CV_Michael_Patipe_${language === 'french' ? 'FR' : 'EN'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Succès - Remplacer le toast de chargement par un succès
      toast.success('CV téléchargé  lancé  !', { id: loadingToast });
      setShowModal(false);
      
    } catch (err) {
      // Erreur - Remplacer le toast de chargement par une erreur
      setError(err.message);
      toast.error(err.message, { id: loadingToast, duration: 4000 });
      
    } finally {
      setDownloadLoading(false);
    }
  };

  // Afficher le loader pendant le téléchargement
  if (downloadLoading) {
    return <Loader />;
  }

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
                  ⚠️ {error}
                </div>
              )}
              <button 
                className="language-btn english"
                onClick={() => handleDownload('english')}
              >
                <span className="flag">🇬🇧</span>
                English Version
                <span className="file-size">(PDF)</span>
              </button>
              <button 
                className="language-btn french"
                onClick={() => handleDownload('french')}
              >
                <span className="flag">🇫🇷</span>
                Version Française
                <span className="file-size">(PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVDownload;