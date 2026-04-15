// src/data/projectsDetails.js
export const projectsDetails = {
  1: {
    id: 1,
    bannerImage: "/image/project/e-commerce2.png",
    architecture: {
      diagram: "/image/mvc.png"
    },
    technologies: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Monetbile", icon: "https://via.placeholder.com/32/18c5a4/ffffff?text=M" }
    ],
    classDiagram: {
      type: "image",
      content: "/image/project/ecomarket_diagram.png",
      alt: "Diagramme de classes UML"
    },
    gallery: [
      "/image/project/ecommerce/screen-dashboard.jpg",
      "/image/project/ecommerce/screen-boutique.jpg",
      "/image/project/ecommerce/screen-panier.jpg",
      "/image/project/ecommerce/screen-paiement.jpg"
    ],
    links: {
      demo: "https://ecomarket.kesug.com/",
      github: "https://github.com/username/ecommerce-multi-boutique",
      documentation: ""
    }
  }
};