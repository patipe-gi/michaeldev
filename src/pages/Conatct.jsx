// Contact.jsx
import Button from "../components/Button";
import { FaAt, FaGithub, FaLinkedin, FaWhatsapp, FaMap } from "react-icons/fa";
import "../../public/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_dec">
        <h2>
          LET'S BUILD SOMETHING <span className="name">TOGETHER</span>
        </h2>
        <p>
          You have a question, a project in mind, or just want to connect? I'd
          be happy to hear from you — feel free to reach out anytime.
        </p>
      </div>

      <div className="contact_form">
        {/* Direct Contact Card */}
        <div className="d_contact">
          <h3>Direct Contact</h3>
          <hr />
          <a href="https://wa.me/237675183502?text=Bonjour" target="_blank" rel="noopener noreferrer">
            <p>
              <FaWhatsapp className="icon" />
              675183502
            </p>
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="mailto:patipem56@gmail.com?subject=Portfolio%20Contact&body=Hello%20Patrick,%0A%0AI%20found%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you.%0A%0AName:%20%0AProject:%20%0ADetails:%20"
          >
            <p>
              <FaAt className="icon" />
              patipem56@gmail.com
            </p>
          </a>
          <p>
            <FaMap className="icon" />
            Littoral, Douala
          </p>
        </div>

        {/* Formulaire */}
        <div>
          <form action="" className="form">
            <div>
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
            </div>

            <label htmlFor="projectType">Project Type</label>
            <input type="text" id="projectType" placeholder="Web App, Mobile App, etc." />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Tell me about your project..."></textarea>

            <Button size="medium">Send Message</Button>
          </form>
        </div>

        {/* Social Links Card */}
        <div className="d_contact">
          <h3>Social</h3>
          <hr />
          <a href="https://www.linkedin.com/in/michael-patipe-071ba735b/" target="_blank" rel="noopener noreferrer">
            <p>
              <FaLinkedin className="icon" />
              LinkedIn
            </p>
          </a>
          <a href="https://github.com/patipe-gi/my-porfolio" target="_blank" rel="noopener noreferrer">
            <p>
              <FaGithub className="icon" />
              GitHub
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;