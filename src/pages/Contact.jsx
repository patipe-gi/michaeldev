// Contact.jsx
import { useTranslation } from 'react-i18next'; // Ajout de useTranslation
import Button from "../components/Button";
import { FaAt, FaGithub, FaLinkedin, FaWhatsapp, FaMap } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation(); // Ajout du hook de traduction

  return (
    <div className="contact">
      <div className="contact_dec">
        <h2>
          {t('contact.title')} <span className="name">{t('contact.together')}</span>
        </h2>
        <p>
          {t('contact.description')}
        </p>
      </div>

      <div className="contact_form">
        {/* Direct Contact Card */}
        <div className="d_contact">
          <h3>{t('contact.directContact')}</h3>
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
                <label htmlFor="name">{t('contact.yourName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder={t('contact.placeholders.name')} 
                />
              </div>
              <div>
                <label htmlFor="email">{t('contact.yourEmail')}</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder={t('contact.placeholders.email')} 
                />
              </div>
            </div>

            <label htmlFor="projectType">{t('contact.projectType')}</label>
            <input 
              type="text" 
              id="projectType" 
              placeholder={t('contact.placeholders.projectType')} 
            />

            <label htmlFor="message">{t('contact.yourMessage')}</label>
            <textarea 
              id="message" 
              placeholder={t('contact.placeholders.message')}
            ></textarea>

            <Button size="medium">{t('contact.sendMessage')}</Button>
          </form>
        </div>

        {/* Social Links Card */}
        <div className="d_contact">
          <h3>{t('contact.social')}</h3>
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