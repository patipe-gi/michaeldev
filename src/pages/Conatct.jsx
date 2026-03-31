import Button from "../components/Button";
import { FaAt, FaGithub, FaLinkedin, FaWhatsapp ,FaMap} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_dec">
        <h2>
          LET'S BUILD SOMETHING <span className="name">TOGETHER</span>
        </h2>
        <p>
          {" "}
          You have a question, a project in mind, or just want to connect? I’d
          be happy to hear from you — feel free to reach out anytime.
        </p>
      </div>

      <div className="contact_form">
        <div className="d_contact">
          <h3>Direct Contact</h3>
          <hr />
          <a href="https://wa.me/237675183502?text=Bonjour" target="_blank">
            <p>
            
            <FaWhatsapp className="icon" />
            675183502
          </p>
          </a>
          <a target="_blank" href="mailto:patipem56@gmail.com?subject=Portfolio%20Contact&body=Hello%20Patrick,%0A%0AI%20found%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you.%0A%0AName:%20%0AProject:%20%0ADetails:%20">
             <p>
            <FaAt className="icon" />
            patipem56@gmail.com
          </p>
          </a>
         
          <p>
            <FaMap className="icon" />
            litoral.douala
          </p>
        </div>
        <div>
          <form action="" className=" form">
            <div>
              <div>
                <label htmlFor="">Your Name</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label htmlFor="">Your Email</label>
                <input type="text" />
              </div>
            </div>

            <label htmlFor="">Project Type</label>
            <input type="text" />
            <label htmlFor="">Your Message</label>
            <textarea name="" id=""></textarea>
            <Button size={"small"}>Send message</Button>
          </form>
        </div>
        <div className="d_contact">
          <h3>Contact</h3>
          <hr />
          <a href="https://www.linkedin.com/in/michael-patipe-071ba735b/" target="_blank">
             <p>
            <FaLinkedin className="icon " />
            Linkedin
          </p>
          </a>
         <a href="https://github.com/patipe-gi/my-porfolio" target="_blank">
                <p>
            <FaGithub className="icon" />
            Github
          </p>
         </a>
      
        </div>
      </div>
    </div>
  );
}
export default Contact;
