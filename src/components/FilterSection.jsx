import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Ajout de useTranslation
import { FaSearch } from 'react-icons/fa';

const FilterSection = ({ onFilterChange }) => {
  const { t } = useTranslation(); // Ajout du hook de traduction
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    date: '',
    type: '',
    techStack: '',
    contribution: ''
  });

  // Options pour les filtres (maintenant avec traduction)
  const filterOptions = {
    date: ['2024', '2023', '2022', '2021', '2020'],
    type: ['Web App', 'Mobile App', 'E-Commerce', 'Data Vis', 'AI/ML'],
    techStack: ['React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS'],
    contribution: ['Full Stack', 'Frontend', 'Backend', 'UI/UX']
  };

  // Fonction pour traduire les options de type
  const translateType = (type) => {
    const typeMap = {
      'Web App': t('filters.options.webApp'),
      'Mobile App': t('filters.options.mobileApp'),
      'E-Commerce': t('filters.options.ecommerce'),
      'Data Vis': t('filters.options.dataVis'),
      'AI/ML': t('filters.options.aiMl')
    };
    return typeMap[type] || type;
  };

  // Fonction pour traduire les options de contribution
  const translateContribution = (contribution) => {
    const contributionMap = {
      'Full Stack': t('filters.options.fullStack'),
      'Frontend': t('filters.options.frontend'),
      'Backend': t('filters.options.backend'),
      'UI/UX': t('filters.options.uiUx')
    };
    return contributionMap[contribution] || contribution;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ ...filters, searchTerm: value });
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange({ ...newFilters, searchTerm });
  };

  const clearFilters = () => {
    setFilters({
      date: '',
      type: '',
      techStack: '',
      contribution: ''
    });
    setSearchTerm('');
    onFilterChange({ searchTerm: '', date: '', type: '', techStack: '', contribution: '' });
  };

  return (
    <div className="filter-section">
      <div className="filter-container">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder={t('filters.searchPlaceholder')}
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <span className="search-icon"><FaSearch/></span>
        </div>

        <div className="filters-grid">
          {/* Filter by Date */}
          <div className="filter-group">
            <label className="filter-label">{t('filters.filterBy')} : {t('filters.date')}</label>
            <select 
              value={filters.date} 
              onChange={(e) => handleFilterChange('date', e.target.value)}
              className="filter-select"
            >
              <option value="">{t('filters.allDates')}</option>
              {filterOptions.date.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Filter by Type */}
          <div className="filter-group">
            <label className="filter-label">{t('filters.filterBy')} : {t('filters.type')}</label>
            <select 
              value={filters.type} 
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="filter-select"
            >
              <option value="">{t('filters.allTypes')}</option>
              {filterOptions.type.map(type => (
                <option key={type} value={type}>{translateType(type)}</option>
              ))}
            </select>
          </div>

          {/* Filter by Tech Stack */}
          <div className="filter-group">
            <label className="filter-label">{t('filters.filterBy')} : {t('filters.techStack')}</label>
            <select 
              value={filters.techStack} 
              onChange={(e) => handleFilterChange('techStack', e.target.value)}
              className="filter-select"
            >
              <option value="">{t('filters.allTechnologies')}</option>
              {filterOptions.techStack.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {/* Filter by Contribution */}
          <div className="filter-group">
            <label className="filter-label">{t('filters.filterBy')} : {t('filters.contribution')}</label>
            <select 
              value={filters.contribution} 
              onChange={(e) => handleFilterChange('contribution', e.target.value)}
              className="filter-select"
            >
              <option value="">{t('filters.allContributions')}</option>
              {filterOptions.contribution.map(role => (
                <option key={role} value={role}>{translateContribution(role)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(filters.date || filters.type || filters.techStack || filters.contribution || searchTerm) && (
          <div className="active-filters">
            <span className="active-filters-title">{t('filters.activeFilters')}</span>
            <div className="filter-tags">
              {searchTerm && (
                <span className="filter-tag">
                  {t('filters.search')}: {searchTerm}
                  <button onClick={() => handleSearch({ target: { value: '' } })}>×</button>
                </span>
              )}
              {filters.date && (
                <span className="filter-tag">
                  {t('filters.year')}: {filters.date}
                  <button onClick={() => handleFilterChange('date', '')}>×</button>
                </span>
              )}
              {filters.type && (
                <span className="filter-tag">
                  {t('filters.type')}: {translateType(filters.type)}
                  <button onClick={() => handleFilterChange('type', '')}>×</button>
                </span>
              )}
              {filters.techStack && (
                <span className="filter-tag">
                  {t('filters.tech')}: {filters.techStack}
                  <button onClick={() => handleFilterChange('techStack', '')}>×</button>
                </span>
              )}
              {filters.contribution && (
                <span className="filter-tag">
                  {t('filters.role')}: {translateContribution(filters.contribution)}
                  <button onClick={() => handleFilterChange('contribution', '')}>×</button>
                </span>
              )}
              <button onClick={clearFilters} className="clear-all-btn">{t('filters.clearAll')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;