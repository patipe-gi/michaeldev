// components/NoInternetConnection.jsx
import React, { useEffect, useState } from 'react';
import { FaWifi, FaSyncAlt, FaPlug } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Button from './Button';



const NoInternetConnection = ({ onRetry }) => {
  const { t } = useTranslation();
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      handleRetry();
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const handleRetry = () => {
    setIsReconnecting(true);
    if (onRetry) {
      onRetry();
    }
    // Vérifier la connexion après 2 secondes
    setTimeout(() => {
      if (navigator.onLine) {
        window.location.reload();
      }
      setIsReconnecting(false);
    }, 2000);
  };

  const startAutoRetry = () => {
    setCountdown(5);
  };

  return (
    <div className="no-internet-container">
      <div className="no-internet-card">
        {/* Icône principale */}
        <div className="no-internet-icon">
          <FaWifi />
        </div>

        {/* Titre */}
        <h2 className="no-internet-title">
          {t('noInternet.title')}
        </h2>

        {/* Description */}
        <p className="no-internet-description">
          {t('noInternet.description')}
        </p>

        {/* Bouton Try again */}
        <Button 
          onClick={handleRetry}
          disabled={isReconnecting}
          size="medium"
          icon={<FaSyncAlt className={isReconnecting ? 'spinning' : ''} />}
        >
          {isReconnecting ? t('noInternet.reconnecting') : t('noInternet.tryAgain')}
        </Button>

        {/* Message auto-reload */}
        <p className="no-internet-auto-reload">
          {t('noInternet.autoReload')}
        </p>

        {/* Bouton auto-retry optionnel */}
        {!isReconnecting && (
          <button className="auto-retry-btn" onClick={startAutoRetry}>
            <FaPlug />
            {countdown !== null ? t('noInternet.retryingIn', { seconds: countdown }) : t('noInternet.autoRetry')}
          </button>
        )}
      </div>
    </div>
  );
};

export default NoInternetConnection;