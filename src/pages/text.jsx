// pages/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { getProjectById } from '../services/projectService';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectDetail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const data = await getProjectById(id);
        
        if (!data) {
          setError('Projet non trouvé');
        } else {
          setProject(data);
        }
      } catch (error) {
        setError('Erreur lors du chargement du projet');
      } finally {
        setLoading(false);
      }
    };

    loadProjectDetail();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Erreur</h2>
        <p>{error}</p>
        <button onClick={() => window.history.back()}>Retour</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p>{project.description}</p>
        <div className="project-techs">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        {/* Autres détails du projet */}
      </div>
    </div>
  );
};

export default ProjectDetail;