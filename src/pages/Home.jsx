import Header from "../components/Layout/Header";
import SocialButton from "../components/SocialButton";
import skill from "../../public/image/Gemini_Generated_Image_gqywl6gqywl6gqyw.png";
import prof_image from "../../public/image/Gemini_Generated_Image_srx4i4srx4i4srx4.png";
import html from "../../public/image/html.png";
import css from "../../public/image/css.png";
import react from "../../public/image/react.png";
import nodejs from "../../public/image/node js.png";
import Button from "../components/Button";


function Home() {
  return (
    <div className="container">
      <div className="intro">
        <div>
          <img src={prof_image} alt="michael patipe" className="prof-image"/>
        </div>
        <div>
          <h2>
            PATIPE <span className="name">MICHAEL</span>
          </h2>
          <h3>
            FULL STACT DEVELOPER | CRAETING INNOVATIVE GIGITAL SOLUTINS FROM TO
            BACK
          </h3>
          <p>Building robust application with Modern Technologies & Design</p>

          <div>
            <Button size="small">
              <a href="">Explore My Project</a>
            </Button>{" "}
            <Button className="btn btn-outline" size="small">Download CV</Button>
          </div>
        </div>
        <div className="skill">
          <img src={skill} alt="michael skill" className="prof-image" />
        </div>
      </div>
      <div className="section">
        <h2>My Tech Stack</h2>
        <div className="tech">
            <img src={html} alt="html" className="stack_image" width={100} height={100}/>
            <img src={css} alt="css" className="stack_image" width={100} height={100}/>
            <img src={react} alt="react" className="stack_image" width={100} height={100} />
            <img src={nodejs} alt="nodejs" className="stack_image" width={100} height={100}/>
            <img src={nodejs} alt="nodejs" className="stack_image" width={100} height={100}/>
            <img src={nodejs} alt="nodejs" className="stack_image" width={100} height={100}/>
        </div>
      </div>
      <div className="section">
        <h2>Recent Projects</h2>
        <p>summary feature or feature projects</p>
        <div className="cards">
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>
            <div className="card_items">
                <img src={prof_image} alt="" className="card_img"/>
                <div className="card_detail">
                <h3>E-commerce</h3>
                <p>E-commerce project</p>
                </div>
              
            </div>

        </div>
      </div>
    </div>
  );
}
export default Home;
