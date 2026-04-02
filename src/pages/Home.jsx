import Header from "../components/Layout/Header";
import SocialButton from "../components/SocialButton";
import skill from "../../public/image/Gemini_Generated_Image_gqywl6gqywl6gqyw.png";
import prof_image from "../../public/image/Gemini_Generated_Image_srx4i4srx4i4srx4.png";
import html from "../../public/image/html.png";
import css from "../../public/image/css.png";
import react from "../../public/image/react.png";
import nodejs from "../../public/image/node js.png";
import flutter from "../../public/image/flutter.png";
import laravel from "../../public/image/laravel.png";
import Button from "../components/Button";
import { projects } from "../data/project";
import { Link } from "react-router-dom";

function Home() {
    const displayedProjects = projects.slice(0, 4);
  return (
    <div className="container">
      <div className="intro">
        <div>
          <img src={prof_image} alt="michael patipe" className="prof-image" />
        </div>
        <div>
          <h2>
            PATIPE <span className="name">MICHAEL</span>
          </h2>
          <h3>
            FULL STACK DEVELOPER | CREATING INNOVATIVE DIGITAL SOLUTIONS FROM TO
            BACK
          </h3>
          <p>Building robust application with Modern Technologies & Design</p>

          <div>
             <Link to="/projects"><Button size="small">
              Explore My Project
            </Button></Link> 
            {" "}
            <Button className=" btn-outline" size="small">
              Download CV
            </Button>
          </div>
        </div>
        <div className="skill">
          <img src={skill} alt="michael skill" className="prof-image" />
        </div>
      </div>
      <div className="section">
        <h2>My Tech Stack</h2>
        <div className="tech">
          <img src={html} alt="html" className="stack_image" />
          <img src={css} alt="css" className="stack_image" />
          <img src={react} alt="react" className="stack_image" />
          <img src={nodejs} alt="nodejs" className="stack_image" />
          <img src={laravel} alt="nodejs" width={130} height={120} />
          <img src={flutter} alt="nodejs" width={130} height={110} />
        </div>
      </div>
      <div className="section">
        <h2>Recent Projects</h2>
        <p>summary feature or feature projects</p>
        <div className="cards">
          {displayedProjects.map((project) => (
            <div className="card_items">
              <img src={project.image} alt="" className="card_img" />
              <div className="card_detail">
                <h4>{project.name}</h4>
                <p className="card_description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
