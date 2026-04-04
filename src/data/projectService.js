// services/projectService.js
import { projects } from '../data/project';

// Simuler un délai réseau
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getAllProjects = async () => {
  await delay(800); // Simule le temps de chargement
  return projects;
};

export const getProjectById = async (id) => {
  await delay(500);
  const project = projects.find(p => p.id === parseInt(id));
  return project;
};

export const getFeaturedProjects = async () => {
  await delay(600);
  return projects.slice(0, 3); // 3 premiers projets
};

export const getProjectsByCategory = async (category) => {
  await delay(600);
  return projects.filter(p => p.category === category);
};