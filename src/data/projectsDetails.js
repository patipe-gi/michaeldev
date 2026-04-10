// src/data/projectsDetails.js - Pour la page détail
export const projectsDetails = {
  1: {
    // Informations générales
    name: "E-Commerce Multi-boutique",
    year: "2024",
    category: "E-Commerce",
    role: "Full Stack Developer",
    date: "Novembre 2024",
    contextType: "Projet de soutenance",
    
    // Image principale
    bannerImage: "/image/project/ecommerce/banner.jpg",
    
    // Contexte & Problématique
    context: {
      company: "Projet de soutenance - Formation Laravel",
      problem: "Les petites entreprises et commerçants locaux n'avaient pas de solution en ligne pour vendre leurs produits. Chaque vendeur devait gérer ses stocks manuellement, et il n'existait pas de plateforme unifiée pour centraliser les ventes et les paiements.",
      objectives: [
        "Créer une plateforme où plusieurs vendeurs peuvent ouvrir leur boutique en ligne",
        "Centraliser la gestion des produits et des commandes",
        "Intégrer un système de paiement mobile (Mobile Money)",
        "Fournir un dashboard administrateur pour superviser toutes les boutiques"
      ]
    },
     links: {
      demo: "https://ecommerce-multi-boutique.demo.com",
      github: "https://github.com/username/ecommerce-multi-boutique",
      documentation: ""  // Peut être vide
    },
    
    // Solution apportée
    solution: {
      description: "Développement d'une plateforme e-commerce multi-vendeurs avec Laravel (MVC), permettant à chaque commerçant de gérer sa propre boutique tout en partageant une infrastructure commune. Le système intègre un module de paiement via API Mobile Money pour faciliter les transactions locales.",
      features: [
        "Création et gestion de boutiques individuelles",
        "Gestion des produits (CRUD complet)",
        "Système de panier d'achat",
        "Intégration API Mobile Money (Orange Money, MTN Money)",
        "Dashboard administrateur avec statistiques",
        "Gestion des commandes et livraisons",
        "Système d'authentification multi-rôles (Admin, Vendeur, Client)"
      ]
    },
    
    // Architecture technique
    architecture: {
      type: "Architecture MVC (Modèle-Vue-Contrôleur)",
      diagram: "/image/project/ecommerce/architecture.png",
      description: "Architecture MVC classique avec Laravel, utilisant WampServer pour l'environnement local et MySQL pour la base de données.",
      schema: {
        frontend: "HTML5, CSS3, Bootstrap, JavaScript, Blade (Laravel)",
        backend: "Laravel (PHP 8), WampServer",
        database: "MySQL (phpMyAdmin)",
        payment: "API Mobile Money (Orange Money, MTN Money)",
        server: "Apache (via WampServer)"
      }
    },
    
    // Technologies utilisées
    technologies: [
      { 
        name: "Laravel", 
        icon: "/icons/laravel.svg", 
        reason: "Framework PHP robuste avec architecture MVC intégrée, parfait pour un projet structuré et maintenable." 
      },
      { 
        name: "PHP", 
        icon: "/icons/php.svg", 
        reason: "Langage backend puissant et largement utilisé pour le développement web." 
      },
      { 
        name: "MySQL", 
        icon: "/icons/mysql.svg", 
        reason: "Base de données relationnelle fiable pour gérer les utilisateurs, produits et commandes." 
      },
      { 
        name: "Bootstrap", 
        icon: "/icons/bootstrap.svg", 
        reason: "Framework CSS pour une interface responsive et moderne, facile à intégrer." 
      },
      { 
        name: "Mobile Money API", 
        icon: "/icons/mobile-money.svg", 
        reason: "Solution de paiement locale adaptée aux habitudes des utilisateurs camerounais." 
      },
      { 
        name: "WampServer", 
        icon: "/icons/wamp.svg", 
        reason: "Environnement de développement local intégrant Apache, PHP et MySQL." 
      }
    ],
    
    // Diagramme de classes (structure MVC)
    classDiagram: {
      type: "image",
      content: "/image/project/ecommerce/class-diagram.png",
      alt: "Diagramme de classes UML du projet E-Commerce Multi-boutique (Modèle MVC)"
    },
    
    // Défis techniques & Solutions
    challenges: [
      {
        title: "Gestion des sessions multi-vendeurs",
        description: "Comment permettre à plusieurs vendeurs de gérer leurs produits sans interférer entre eux ?",
        solution: "Mise en place d'un système d'authentification multi-rôles avec middleware Laravel, filtrant les données par 'vendor_id' pour chaque requête."
      },
      {
        title: "Intégration API Mobile Money",
        description: "L'API Mobile Money n'était pas documentée clairement et nécessitait des tests en environnement réel.",
        solution: "Utilisation d'un sandbox de test fourni par l'opérateur, puis simulation avec des comptes de test avant le déploiement."
      },
      {
        title: "Optimisation des requêtes MySQL",
        description: "Le dashboard admin devenait lent avec l'augmentation du nombre de commandes.",
        solution: "Optimisation des requêtes avec des jointures (JOIN) et indexation des colonnes les plus utilisées (user_id, product_id, order_date)."
      }
    ],
    
    // Galerie d'images
    gallery: [
      "/image/project/ecommerce/screen-dashboard.jpg",
      "/image/project/ecommerce/screen-boutique.jpg",
      "/image/project/ecommerce/screen-panier.jpg",
      "/image/project/ecommerce/screen-paiement.jpg"
    ],
    
    // Résultats & Impact
    results: {
      metrics: [
        { label: "Note de soutenance", value: "Excellent", change: "Mention Très Bien" },
        { label: "Temps de développement", value: "3 mois", change: "Respecté" },
        { label: "Vendeurs supportés", value: "Illimité", change: "Multi-boutique" }
      ],
      testimonial: {
        text: "Ce projet m'a permis de maîtriser l'architecture MVC avec Laravel et d'intégrer des paiements mobile money, une compétence clé pour le marché local.",
        author: "Michael Patipe",
        position: "Développeur Full Stack"
      }
    }
  }
};