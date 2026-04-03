import React from 'react';
import FilterSection from '../components/FilterSection';
import { useFilterProjects } from '../hooks/useFilterProjects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/project';
import Button from '../components/Button';
import "../../public/projects.css"

const Projects = () => {
  const { filteredProjects, setFilters } = useFilterProjects(projects);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="projects-section ">
      <div className="container">
        <h1 >My Projects</h1>
        
        
        <FilterSection 
          onFilterChange={handleFilterChange}
          projects={projects}
        />
        
        <div className="results-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
        
     
       <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.name}
                loading="lazy" // Lazy loading pour performance
              />
            </div>
            
            <div className="project-info">
              <div className="project-header">
                <h4>{project.name}</h4>
                <span className="project-year">{project.year}</span>
              </div>
              
              <p className='project-description'>{project.description}</p>
             
              <div className="project-tags">
                {project.tags.slice(0, 4).map((tag, index) => ( // Max 4 tags
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Button size='small'> 
                    <FaExternalLinkAlt /> Live Demo
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button className='btn-outline' size='small'> 
                    <FaGithub /> Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>No projects found matching your criteria.</p>
            <button onClick={() => setFilters({ searchTerm: '', date: '', type: '', techStack: '', contribution: '' })}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;