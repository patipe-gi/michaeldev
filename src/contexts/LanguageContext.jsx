// contexts/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(false);

    const changeLanguage = async (lng) => {
        setLoading(true);
        
        // Simuler le temps de chargement des nouvelles traductions
        await new Promise(resolve => setTimeout(resolve, 600));
        
        i18n.changeLanguage(lng);
        document.documentElement.lang = lng;
        localStorage.setItem('preferred-language', lng);
        
        setLoading(false);
    };

    return (
        <LanguageContext.Provider value={{ changeLanguage, loading }}>
            {loading && <Loader />}
            {!loading && children}
        </LanguageContext.Provider>
    );
};