// src/pages/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaArrowLeft, FaCalendar, FaTag, FaUser, FaExternalLinkAlt, FaGithub,
  FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaHome, FaFolderOpen,
  FaInfoCircle, FaBullseye, FaProjectDiagram, FaCode, FaDatabase,
  FaServer, FaCloud, FaChartLine, FaImages, FaLightbulb, FaTools,
  FaLayerGroup, FaExpand
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

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  if (loading) return <Loader />;
  if (error) {
    return (
      <div className="project-error">
        <FaExclamationTriangle className="error-icon" />
        <h2>{error}</h2>
        <p>{t('projectDetail.error.notFoundMessage')}</p>
        <Link to="/projects">
          <Button><FaArrowLeft /> {t('projectDetail.backToProjects')}</Button>
        </Link>
      </div>
    );
  }
  if (!project) return null;

  return (
    <div className="project-detail">
      <div className="container">
        
        {/* Fil d'Ariane */}
        <div className="breadcrumb">
          <Link to="/"><FaHome className="breadcrumb-icon" /> {t('navigation.home')}</Link>
          <span>/</span>
          <Link to="/projects"><FaFolderOpen className="breadcrumb-icon" /> {t('navigation.projects')}</Link>
          <span>/</span>
          <span className="current">{t(`projectDetail.projects.${id}.name`)}</span>
        </div>

        {/* Bannière */}
        <div className="project-banner" onClick={() => openModal([project.bannerImage], 0)}>
          <img src={project.bannerImage} alt={t(`projectDetail.projects.${id}.name`)} />
          <div className="banner-overlay"><FaExpand className="expand-icon" /><span>{t('projectDetail.expand')}</span></div>
        </div>

        {/* En-tête */}
        <div className="project-header-detail">
          <h1 className="project-title">{t(`projectDetail.projects.${id}.name`)}</h1>
          <div className="project-meta">
            <span className="meta-item"><FaCalendar className="meta-icon" />{t(`projectDetail.projects.${id}.year`)}</span>
            <span className="meta-item"><FaTag className="meta-icon" />{t(`projectDetail.projects.${id}.category`)}</span>
            <span className="meta-item"><FaUser className="meta-icon" />{t(`projectDetail.projects.${id}.role`)}</span>
          </div>
          
          <div className="project-actions">
            
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Button size="medium" variant="outline" icon={<FaGithub />}>{t('projectDetail.sourceCode')}</Button>
              </a>
            )}
          </div>
        </div>

        {/* Section 1: Contexte */}
        <section className="detail-section">
          <h2 className="section-title"><FaInfoCircle className="section-icon" /> {t('projectDetail.sections.context')}</h2>
          <div className="section-content">
            <p className="company-name">{t(`projectDetail.projects.${id}.context.company`)}</p>
            <p className="problem-text">{t(`projectDetail.projects.${id}.context.problem`)}</p>
            <div className="objectives-list">
              <h4><FaBullseye className="title-icon" /> {t('projectDetail.context.objectives')} :</h4>
              <ul>
                {t(`projectDetail.projects.${id}.context.objectives`, { returnObjects: true }).map((obj, idx) => (
                  <li key={idx}><FaCheckCircle className="check-icon" />{obj}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Solution */}
        <section className="detail-section">
          <h2 className="section-title"><FaLightbulb className="section-icon" /> {t('projectDetail.sections.solution')}</h2>
          <div className="section-content">
            <p className="solution-text">{t(`projectDetail.projects.${id}.solution.description`)}</p>
            <div className="features-grid">
              {t(`projectDetail.projects.${id}.solution.features`, { returnObjects: true }).map((feature, idx) => (
                <div key={idx} className="feature-card"><FaCheckCircle className="feature-icon" /><span>{feature}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Architecture */}
        <section className="detail-section">
          <h2 className="section-title"><FaProjectDiagram className="section-icon" /> {t('projectDetail.sections.architecture')}</h2>
          <div className="section-content">
            <p className="arch-type"><FaLayerGroup className="arch-icon" /> {t('projectDetail.architecture.type')} : <strong>{t(`projectDetail.projects.${id}.architecture.type`)}</strong></p>
            {project.architecture.diagram && (
              <div className="arch-diagram"><img src={project.architecture.diagram} alt="Architecture" className="arch-image" /></div>
            )}
            <div className="stack-grid">
              <div className="stack-item"><FaCode className="stack-icon" /><span className="stack-label">{t('projectDetail.architecture.frontend')} :</span><span className="stack-value">{t(`projectDetail.projects.${id}.architecture.schema.frontend`)}</span></div>
              <div className="stack-item"><FaServer className="stack-icon" /><span className="stack-label">{t('projectDetail.architecture.backend')} :</span><span className="stack-value">{t(`projectDetail.projects.${id}.architecture.schema.backend`)}</span></div>
              <div className="stack-item"><FaDatabase className="stack-icon" /><span className="stack-label">{t('projectDetail.architecture.database')} :</span><span className="stack-value">{t(`projectDetail.projects.${id}.architecture.schema.database`)}</span></div>
              <div className="stack-item"><FaTag className="stack-icon" /><span className="stack-label">{t('projectDetail.architecture.payment')} :</span><span className="stack-value">{t(`projectDetail.projects.${id}.architecture.schema.payment`)}</span></div>
            </div>
          </div>
        </section>

        {/* Section 4: Technologies */}
        <section className="detail-section">
          <h2 className="section-title"><FaCode className="section-icon" /> {t('projectDetail.sections.technologies')}</h2>
          <div className="section-content">
            <div className="tech-list">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="tech-card">
                  <div className="tech-header"><img src={tech.icon} alt={tech.name} className="tech-icon" /><h3 className="tech-name">{tech.name}</h3></div>
                  <p className="tech-reason">{t(`projectDetail.projects.${id}.technologies.${idx}.reason`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Diagramme de classes */}
        <section className="detail-section">
          <h2 className="section-title"><FaProjectDiagram className="section-icon" /> {t('projectDetail.sections.classDiagram')}</h2>
          <div className="section-content">
            <div className="class-diagram clickable" onClick={() => openModal([project.classDiagram.content], 0)}>
              <img src={project.classDiagram.content} alt={project.classDiagram.alt} className="class-diagram-image" />
              <div className="diagram-overlay"><FaExpand className="expand-icon" /><span>{t('projectDetail.clickToExpand')}</span></div>
            </div>
          </div>
        </section>

        {/* Section 6: Défis techniques */}
       <section className="detail-section">
  <h2 className="section-title">
    <FaTools className="section-icon" /> {t('projectDetail.sections.challenges')}
  </h2>
  <div className="section-content">
    {t(`projectDetail.projects.${id}.challenges`, { returnObjects: true }).map((challenge, idx) => (
      <div key={idx} className="challenge-card">
        <div className="challenge-title">
          <FaExclamationTriangle className="challenge-icon" />
          <h3>{challenge.title}</h3>
        </div>
        <p className="challenge-desc">{challenge.description}</p>
        <div className="solution-box">
          <span className="solution-label">{t('projectDetail.challenges.solution')} →</span>
          <span className="solution-text">{challenge.solution}</span>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Section 7: Galerie */}
        <section className="detail-section">
          <h2 className="section-title"><FaImages className="section-icon" /> {t('projectDetail.sections.gallery')}</h2>
          <div className="section-content">
            <div className="gallery-grid">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="gallery-item" onClick={() => openModal(project.gallery, idx)}>
                  <img src={img} alt={`${t('projectDetail.screenshot')} ${idx + 1}`} />
                  <div className="gallery-overlay"><FaExpand className="expand-icon" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Résultats */}
        <section className="detail-section">
          <h2 className="section-title"><FaChartLine className="section-icon" /> {t('projectDetail.sections.results')}</h2>
          <div className="section-content">
            <div className="metrics-grid">
              {t(`projectDetail.projects.${id}.results.metrics`, { returnObjects: true }).map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-change">{metric.change}</span>
                </div>
              ))}
            </div>
            {t(`projectDetail.projects.${id}.results.testimonial`, { returnObjects: true }) && (
              <div className="testimonial">
                <p className="testimonial-text">"{t(`projectDetail.projects.${id}.results.testimonial.text`)}"</p>
                <p className="testimonial-author">— {t(`projectDetail.projects.${id}.results.testimonial.author`)}, {t(`projectDetail.projects.${id}.results.testimonial.position`)}</p>
              </div>
            )}
          </div>
        </section>

      

      </div>

      {modalOpen && (
        <ImageModal images={modalImages} currentIndex={currentImageIndex} onClose={() => setModalOpen(false)} onNext={nextImage} onPrev={prevImage} />
      )}
    </div>
  );
};

export default ProjectDetail;