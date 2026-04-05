// pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaRoad,
  FaCode,
  FaGraduationCap,
  FaBullseye,
  FaUserAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaHistory,
} from "react-icons/fa";
import Button from "../components/Button";
import SkillBar from "../components/SkillBar";
import CVDownload from "../components/CVDownload";
import { socialData } from "../data/socialData";
import { FiSliders } from "react-icons/fi";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    // Technologies de base
    {
      name: "HTML5",
      percentage: 95,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      percentage: 90,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      percentage: 90,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      percentage: 80,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },

    // Frameworks Frontend
    {
      name: "React",
      percentage: 95,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Ionic",
      percentage: 70,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
    },
    {
      name: "Flutter",
      percentage: 70,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },

    // Backend
    {
      name: "Node.js",
      percentage: 85,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      percentage: 40,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Laravel",
      percentage: 75,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },

    // Base de données & Outils
    {
      name: "MySQL",
      percentage: 80,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    //   { name: "Docker", percentage: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    {
      name: "Git",
      percentage: 85,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];
const aboutArray = t("about.about.content", { returnObjects: true });
const learningArray = t("about.learning.content", { returnObjects: true });
const goalsArray = t("about.goals.content", { returnObjects: true });
  const sections = [
    {
      id: "about",
      icon: <  FaUserAlt/>,
      title: t("about.about.title"),
      content: aboutArray,
    },
    {
      id: "skills",
      icon: <FaCode />,
      title: t("about.skills.title"),
      content: "skills-component", // Spécial pour les compétences
    },
    {
      id: "learning",
      icon: <FaGraduationCap />,
      title: t("about.learning.title"),
      content: learningArray ,
    },
    {
      id: "goals",
      icon: <FaBullseye />,
      title: t("about.goals.title"),
      content:goalsArray,
    },
  ];
const parcoursKeys = ['debut', 'bac', 'laravel', 'react', 'flutter', 'stage', 'today'];
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-sidebar">
            <div className="profile-card">
              {/* Image de profil */}
              <div className="profile-image">
                <img
                  src="/image/prof_image1.png"
                  alt={t("about.profile.alt")}
                  className="profile-img"
                />
              </div>

              {/* Titre et description */}
              <div className="profile-info">
                <h2 className="profile-name">{t("about.profile.name")}</h2>
                <p className="profile-title">{t("about.profile.title")}</p>
                <div className="profile-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{t("about.profile.location")}</span>
                </div>
                <div className="profile-experience">
                  <FaBriefcase className="experience-icon" />
                  <span>1{t("about.profile.experience")}</span>
                </div>
              </div>

              {/* Bouton CV */}
              <CVDownload className="btn-outline cv-button" />

              {/* Liens réseaux sociaux */}
              <div className="profile-social">
                {socialData.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="about-content">
          
            <section className="about-section">
              <div className="section-header">
                <span className="section-icon">{sections[0].icon}</span>
                <h2 className="section-title">{sections[0].title}</h2>
                <div className="section-line"></div>
              </div>
              <div className="section-body">
                <p>
                  {sections[0].content.map((paragraph) => (
                    {paragraph}
                  ))}
                </p>
              </div>
            </section>

            {/* Skills & Experience Section */}
            <section className="about-section">
              <div className="section-header">
                <span className="section-icon">{sections[1].icon}</span>
                <h2 className="section-title">{sections[1].title}</h2>
                <div className="section-line"></div>
              </div>
              <div className="section-body">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item-wrapper">
                      <div className="skill-icon">
                        <img src={skill.image} alt={skill.name} />
                      </div>
                      <SkillBar
                        name={skill.name}
                        percentage={skill.percentage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Continuous Learning Section */}
            <section className="about-section">
              <div className="section-header">
                <span className="section-icon">{sections[2].icon}</span>
                <h2 className="section-title">{sections[2].title}</h2>
                <div className="section-line"></div>
              </div>
              <div className="section-body">
                 <p>
                  {sections[2].content.map((paragraph) => (
                    {paragraph}
                  ))}
                </p>
              </div>
            </section>

            {/* Future Goals Section */}
            <section className="about-section">
              <div className="section-header">
                <span className="section-icon">{sections[3].icon}</span>
                <h2 className="section-title">{sections[3].title}</h2>
                <div className="section-line"></div>
              </div>
              <div className="section-body">
                <p>
                  {sections[3].content.map((paragraph) => (
                    {paragraph}
                  ))}
                </p>
              </div>
            </section>

            {/* NOUVELLE SECTION : Timeline / Experience */}
            <section className="about-section timeline-section">
              <div className="section-header">
                <span className="section-icon"><FaRoad /></span>
                <h2 className="section-title">{t('about.parcours.title')}</h2>
                <div className="section-line"></div>
              </div>
              <div className="section-body">
                <p className="parcours-intro">
                  {t('about.parcours.intro')}
                </p>
                
                <div className="timeline">
                  {parcoursKeys.map((key, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-year">
                        <FaCalendarAlt className="year-icon" />
                        <span>{t(`about.parcours.items.${key}.period`)}</span>
                      </div>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{t(`about.parcours.items.${key}.title`)}</h3>
                        <p className="timeline-description">{t(`about.parcours.items.${key}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
