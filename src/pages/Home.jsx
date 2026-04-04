import Button from "../components/Button";
import { projects } from "../data/project";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import skill from "../../public/image/Gemini_Generated_Image_gqywl6gqywl6gqyw.png";
import prof_image from "../../public/image/Gemini_Generated_Image_srx4i4srx4i4srx4.png";
import html from "../../public/image/html.png";
import css from "../../public/image/css.png";
import react from "../../public/image/react.png";
import nodejs from "../../public/image/node js.png";
import flutter from "../../public/image/flutter.png";
import laravel from "../../public/image/laravel.png";
import CVDownload from "../components/CVDownload";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
function Home() {
  const displayedProjects = projects.slice(0, 4);
  
    const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadData = async () => {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 600));
        
        const projects = await displayedProjects;
        setFeaturedProjects(projects);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro">
        <div>
          <img src={prof_image} alt="michael patipe" className="prof-image" />
        </div>
        <div>
          <h2>
            PATIPE <span className="name">MICHAEL</span>
          </h2>
          <h3>
            FULL STACK DEVELOPER | CREATING INNOVATIVE DIGITAL SOLUTIONS FROM TO BACK
          </h3>
          <p>Building robust application with Modern Technologies & Design</p>
          <div>
            <Link to="/projects">
              <Button size="medium">Explore My Project</Button>
            </Link>
            <CVDownload className="btn-outline" />
          </div>
        </div>
        <div className="skill">
          <img src={skill} alt="michael skill" className="prof-image" />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="section">
        <h2>My Tech Stack</h2>
        <div className="tech">
          <img src={html} alt="html" className="stack_image" />
          <img src={css} alt="css" className="stack_image" />
          <img src={react} alt="react" className="stack_image" />
          <img src={nodejs} alt="nodejs" className="stack_image" />
          <img src={laravel} alt="laravel" width={60} height={60} />
          <img src={flutter} alt="flutter" width={60} height={60} />
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="projects-section">
        <h2>Recent Projects</h2>
        <p>Some of my latest work and featured projects</p>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h4>{project.name}</h4>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className='project-description'>{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button size='small'> <FaExternalLinkAlt /> Live Demo</Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button className='btn-outline' size='small'> <FaGithub /> Code</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;