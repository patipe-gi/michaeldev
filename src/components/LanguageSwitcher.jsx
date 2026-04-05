// components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { changeLanguage, loading } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                onClick={() => changeLanguage('en')}
                className={`lang-btn ${i18n.resolvedLanguage === 'en' ? 'active' : ''}`}
                title="English"
                disabled={loading}
            >
                <img
                    src="https://flagcdn.com/w80/gb.png"
                    alt="English"
                    className="flag-icon"
                />
                <span className="lang-text">EN</span>
            </button>
            <button
                onClick={() => changeLanguage('fr')}
                className={`lang-btn ${i18n.resolvedLanguage === 'fr' ? 'active' : ''}`}
                title="Français"
                disabled={loading}
            >
                <img
                    src="https://flagcdn.com/w80/fr.png"
                    alt="Français"
                    className="flag-icon"
                />
                <span className="lang-text">FR</span>
            </button>
        </div>
    );
};