// src/pages/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaArrowLeft, 
  FaCalendar, 
  FaTag, 
  FaUser, 
  FaExternalLinkAlt, 
  FaGithub,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaHome,
  FaFolderOpen,
  FaInfoCircle,
  FaBullseye,
  FaProjectDiagram,
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud,
  FaChartLine,
  FaImages,
  FaLightbulb,
  FaTools,
  FaLayerGroup,
  FaExpand
} from 'react-icons/fa';
import Button from '../components/Button';
import Loader from '../components/Loader';
import ImageModal from '../components/ImageModal';
import { projectsDetails } from '../data/projectsDetails';

const ProjectDetail = () => {
  const { id } = useParams();
   const { t } = useTranslation();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // États pour la modale
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const projectData = projectsDetails[parseInt(id)];
      if (projectData) {
        setProject(projectData);
        setLoading(false);
      } else {
        setError("Projet non trouvé");
        setLoading(false);
      }
    }, 500);
  }, [id]);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="project-error">
        <FaExclamationTriangle className="error-icon" />
        <h2>{error}</h2>
        <p>Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/projects">
          <Button>
            <FaArrowLeft /> Retour aux projets
          </Button>
        </Link>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="project-detail">
      <div className="container">
        
        {/* Fil d'Ariane avec liens internes */}
        <div className="breadcrumb">
          <Link to="/">
            <FaHome className="breadcrumb-icon" /> Accueil
          </Link>
          <span>/</span>
          <Link to="/projects">
            <FaFolderOpen className="breadcrumb-icon" /> Projets
          </Link>
          <span>/</span>
          <span className="current">{project.name}</span>
        </div>

        {/* Image Bannière - cliquable */}
        <div className="project-banner" onClick={() => openModal([project.bannerImage], 0)}>
          <img src={project.bannerImage} alt={project.name} />
          <div className="banner-overlay">
            <FaExpand className="expand-icon" />
            <span>Agrandir</span>
          </div>
        </div>

        {/* En-tête */}
        <div className="project-header-detail">
          <h1 className="project-title">{project.name}</h1>
          <div className="project-meta">
            <span className="meta-item">
              <FaCalendar className="meta-icon" />
              {project.year}
            </span>
            <span className="meta-item">
              <FaTag className="meta-icon" />
              {project.category}
            </span>
            <span className="meta-item">
              <FaUser className="meta-icon" />
              {project.role}
            </span>
          </div>
          
          {/* Boutons d'action avec liens */}
          <div className="project-actions">
            {/* Lien externe vers la démo */}
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <Button size="medium" icon={<FaExternalLinkAlt />}>
                Voir la démo
              </Button>
            </a>
            
            {/* Lien externe vers GitHub */}
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button size="medium" variant="outline" icon={<FaGithub />}>
                Code source
              </Button>
            </a>
            
            {/* Lien externe vers documentation (optionnel) */}
            {project.links.documentation && (
              <a href={project.links.documentation} target="_blank" rel="noopener noreferrer">
                <Button size="medium" variant="ghost" icon={<FaFileAlt />}>
                  Documentation
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Section 1: Contexte & Problématique */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaInfoCircle className="section-icon" /> Contexte & Problématique
          </h2>
          <div className="section-content">
            <p className="company-name">{project.context.company}</p>
            <p className="problem-text">{project.context.problem}</p>
            <div className="objectives-list">
              <h4><FaBullseye className="title-icon" /> Objectifs du projet :</h4>
              <ul>
                {project.context.objectives.map((obj, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="check-icon" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Solution apportée */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaLightbulb className="section-icon" /> Solution apportée
          </h2>
          <div className="section-content">
            <p className="solution-text">{project.solution.description}</p>
            <div className="features-grid">
              {project.solution.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Architecture technique */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaProjectDiagram className="section-icon" /> Architecture technique
          </h2>
          <div className="section-content">
            <p className="arch-type">
              <FaLayerGroup className="arch-icon" /> Type: <strong>{project.architecture.type}</strong>
            </p>
            <div className="arch-diagram">
              <img 
                src={project.architecture.diagram} 
                alt="Architecture diagram" 
                className="arch-image"
              />
            </div>
            <div className="stack-grid">
              <div className="stack-item">
                <FaCode className="stack-icon" />
                <span className="stack-label">Frontend:</span>
                <span className="stack-value">{project.architecture.schema.frontend}</span>
              </div>
              <div className="stack-item">
                <FaServer className="stack-icon" />
                <span className="stack-label">Backend:</span>
                <span className="stack-value">{project.architecture.schema.backend}</span>
              </div>
              <div className="stack-item">
                <FaDatabase className="stack-icon" />
                <span className="stack-label">Base de données:</span>
                <span className="stack-value">{project.architecture.schema.database}</span>
              </div>
              <div className="stack-item">
                <FaCloud className="stack-icon" />
                <span className="stack-label">Cache:</span>
                <span className="stack-value">{project.architecture.schema.cache || 'Non utilisé'}</span>
              </div>
              <div className="stack-item">
                <FaTag className="stack-icon" />
                <span className="stack-label">Paiement:</span>
                <span className="stack-value">{project.architecture.schema.payment}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technologies utilisées */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaCode className="section-icon" /> Technologies utilisées
          </h2>
          <div className="section-content">
            <div className="tech-list">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="tech-card">
                  <div className="tech-header">
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <h3 className="tech-name">{tech.name}</h3>
                  </div>
                  <p className="tech-reason">{tech.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Diagramme de classes - cliquable */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaProjectDiagram className="section-icon" /> Diagramme de classes
          </h2>
          <div className="section-content">
            <div 
              className="class-diagram clickable"
              onClick={() => openModal([project.classDiagram.content], 0)}
            >
              <img 
                src={project.classDiagram.content} 
                alt={project.classDiagram.alt}
                className="class-diagram-image"
              />
              <div className="diagram-overlay">
                <FaExpand className="expand-icon" />
                <span>Cliquer pour agrandir</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Défis techniques & Solutions */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaTools className="section-icon" /> Défis techniques & Solutions
          </h2>
          <div className="section-content">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="challenge-card">
                <div className="challenge-title">
                  <FaExclamationTriangle className="challenge-icon" />
                  <h3>{challenge.title}</h3>
                </div>
                <p className="challenge-desc">{challenge.description}</p>
                <div className="solution-box">
                  <span className="solution-label">Solution →</span>
                  <span className="solution-text">{challenge.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Galerie d'images - cliquable */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaImages className="section-icon" /> Galerie d'images
          </h2>
          <div className="section-content">
            <div className="gallery-grid">
              {project.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="gallery-item"
                  onClick={() => openModal(project.gallery, idx)}
                >
                  <img src={img} alt={`Screenshot ${idx + 1}`} />
                  <div className="gallery-overlay">
                    <FaExpand className="expand-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Résultats & Impact */}
        <section className="detail-section">
          <h2 className="section-title">
            <FaChartLine className="section-icon" /> Résultats & Impact
          </h2>
          <div className="section-content">
            <div className="metrics-grid">
              {project.results.metrics.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-change">{metric.change}</span>
                </div>
              ))}
            </div>
            {project.results.testimonial && (
              <div className="testimonial">
                <p className="testimonial-text">"{project.results.testimonial.text}"</p>
                <p className="testimonial-author">
                  — {project.results.testimonial.author}, {project.results.testimonial.position}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bouton retour avec Link */}
        <div className="back-button">
          <Link to="/projects">
            <Button variant="outline" icon={<FaArrowLeft />}>
              Retour aux projets
            </Button>
          </Link>
        </div>

      </div>

      {/* Modale pour les images */}
      {modalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default ProjectDetail;