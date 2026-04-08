import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Ajout de useTranslation
import toast from 'react-hot-toast';
import Button from './Button';
import Loader from './Loader'; 
import { FaDownload } from 'react-icons/fa';
import { createPortal } from 'react-dom';

const CVDownload = ({ className = "" }) => {
  const { t } = useTranslation(); // Ajout du hook de traduction
  const [showModal, setShowModal] = useState(false);
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
    setError(null);
    
    // Afficher un toast de chargement avec traduction
    const loadingToast = toast.loading(t('cv.preparing'));
    
    const cvFiles = {
      french: '/cv/cv_michael_patipe_fr.pdf',
      english: '/cv/cv_michael_patipe_en.pdf'
    };
    
    const url = cvFiles[language];
    console.log('Tentative de téléchargement depuis:', url);
    
    try {
      const exists = await checkFileExists(url);
      
      if (!exists) {
        const errorMsg = language === 'french' ? t('cv.frenchNotFound') : t('cv.englishNotFound');
        throw new Error(errorMsg);
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
      
     
      toast.success(t('cv.success'), { id: loadingToast, duration: 4000 });
      setShowModal(false);
      
    } catch (err) {
    
      setError(err.message);
      toast.error(t('cv.error'), { id: loadingToast, duration: 3000 ,position:"top-center"});
      
    } 
  };


  return (
    <>
      <Button 
        className={className} 
        size="medium"
        onClick={() => setShowModal(true)}
        icon={<FaDownload />  }
        
      > 
        {t('cv.download')}
      </Button>

      {showModal && createPortal (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          
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
                 <img
                    src="https://flagcdn.com/w80/gb.png"
                    alt="English"
                    className="flag-icon"
                />
              <span className="flag">🇬🇧</span>

                {t('cv.english')}
                <span className="file-size">({t('cv.pdf')})</span>
              </button>
              <button 
                className="language-btn french"
                onClick={() => handleDownload('french')}
              >
               <img
                    src="https://flagcdn.com/w80/fr.png"
                    alt="Français"
                    className="flag-icon"
                /> <span className="flag">🇫🇷</span>
                {t('cv.french')}
                <span className="file-size">({t('cv.pdf')})</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default CVDownload;