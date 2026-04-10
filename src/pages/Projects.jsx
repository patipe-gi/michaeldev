import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // ← Ajout de Link
import FilterSection from '../components/FilterSection';
import { useFilterProjects } from '../hooks/useFilterProjects';
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
import Button from '../components/Button';
import Loader from '../components/Loader';

const Projects = () => {
  const { t } = useTranslation();
  const { translatedProjects } = useTranslatedProjects();
  const { filteredProjects, setFilters } = useFilterProjects(translatedProjects);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    if (translatedProjects && translatedProjects.length > 0) {
      setLoading(false);
    }
  }, [translatedProjects]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="projects-section">
      <div className="container">
        <h1>{t('projects.title')}</h1>
        
        <FilterSection 
          onFilterChange={handleFilterChange}
          projects={translatedProjects}
        />
        
        <div className="results-count">
          {t('projects.showing')} {filteredProjects.length} {t('projects.of')} {translatedProjects.length} {t('projects.projects')}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.name}
                  loading="lazy" 
                />
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h4>{project.name}</h4>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className='project-description'>{project.description}</p>
               
                <div className="project-tags">
                  {project.tags?.slice(0, 4).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {/* Link React Router pour la navigation interne */}
                  <Link to={`/project/${project.id}`}>
                    <Button size='small'> 
                      <FaInfoCircle /> {t('projects.viewDetails')}
                    </Button>
                  </Link>
                  
                  {/* Lien externe pour GitHub */}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button className='btn-outline' size='small'> 
                      <FaGithub /> {t('projects.code')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && translatedProjects.length > 0 && (
          <div className="no-results">
            <p>{t('projects.noResults')}</p>
            <button onClick={() => setFilters({ searchTerm: '', date: '', type: '', techStack: '', contribution: '' })}>
              {t('projects.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;