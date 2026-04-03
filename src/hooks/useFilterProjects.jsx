// hooks/useFilterProjects.js
import { useState, useEffect } from 'react';

export const useFilterProjects = (projects) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filters, setFilters] = useState({
    searchTerm: '',
    date: '',
    type: '',
    techStack: '',
    contribution: ''
  });

  useEffect(() => {
    let result = [...projects];

    // Filter by search term
    if (filters.searchTerm) {
      result = result.filter(project =>
        project.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    }

    // Filter by date/year
    if (filters.date) {
      result = result.filter(project => project.year === filters.date);
    }

    // Filter by type
    if (filters.type) {
      result = result.filter(project => project.category === filters.type.toLowerCase());
    }

    // Filter by tech stack
    if (filters.techStack) {
      result = result.filter(project =>
        project.tags.some(tag => tag.toLowerCase() === filters.techStack.toLowerCase())
      );
    }

    // Filter by contribution
    if (filters.contribution) {
      result = result.filter(project => project.contribution === filters.contribution);
    }

    setFilteredProjects(result);
  }, [filters, projects]);

  return { filteredProjects, setFilters, filters };
};