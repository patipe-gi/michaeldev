// hooks/useTranslatedProjects.js
import { useTranslation } from 'react-i18next';
import { projects as rawProjects } from '../data/project';
import { useEffect, useState } from 'react';

export const useTranslatedProjects = () => {
  const { t, i18n } = useTranslation();
  const [translatedProjects, setTranslatedProjects] = useState([]);

  // Mapping des IDs vers les clés de traduction
  const projectKeys = {
    1: 'ecommercePro',
    2: 'taskflow',
    3: 'weatherapp',
    4: 'portfolio3d',
    5: 'socialDashboard',
    6: 'foodDelivery',
    7: 'aiImageGenerator'
  };

  // Fonction pour traduire un projet
  const translateProject = (project) => {
    const key = projectKeys[project.id];
    if (!key) return project;
    
    return {
      ...project,
      name: t(`projects.items.${key}.name`, { defaultValue: project.name }),
      description: t(`projects.items.${key}.description`, { defaultValue: project.description })
    };
  };

  // Traduire tous les projets
  const translateAllProjects = () => {
    if (!rawProjects || !Array.isArray(rawProjects)) return [];
    return rawProjects.map(translateProject);
  };

  // Mettre à jour les traductions quand la langue change
  useEffect(() => {
    const translated = translateAllProjects();
    setTranslatedProjects(translated);
  }, [t, i18n.language]);

  return { translatedProjects };
};