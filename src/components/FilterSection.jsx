import React, { useState } from 'react';

const FilterSection = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    date: '',
    type: '',
    techStack: '',
    contribution: ''
  });

  // Options pour les filtres
  const filterOptions = {
    date: ['2024', '2023', '2022', '2021', '2020'],
    type: ['Web App', 'Mobile App', 'E-Commerce', 'Data Vis', 'AI/ML'],
    techStack: ['React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS'],
    contribution: ['Full Stack', 'Frontend', 'Backend', 'UI/UX']
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
            placeholder="Search by keyword..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <span className="search-icon"></span>
        </div>

        <div className="filters-grid">
          {/* Filter by Date */}
          <div className="filter-group">
            <label className="filter-label">Filter by : Date</label>
            <select 
              value={filters.date} 
              onChange={(e) => handleFilterChange('date', e.target.value)}
              className="filter-select"
            >
              <option value="">All Dates</option>
              {filterOptions.date.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Filter by Type */}
          <div className="filter-group">
            <label className="filter-label">Filter by : Type</label>
            <select 
              value={filters.type} 
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              {filterOptions.type.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Filter by Tech Stack */}
          <div className="filter-group">
            <label className="filter-label">Filter by : Tech Stack</label>
            <select 
              value={filters.techStack} 
              onChange={(e) => handleFilterChange('techStack', e.target.value)}
              className="filter-select"
            >
              <option value="">All Technologies</option>
              {filterOptions.techStack.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {/* Filter by Contribution */}
          <div className="filter-group">
            <label className="filter-label">Filter by : Contribution</label>
            <select 
              value={filters.contribution} 
              onChange={(e) => handleFilterChange('contribution', e.target.value)}
              className="filter-select"
            >
              <option value="">All Contributions</option>
              {filterOptions.contribution.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(filters.date || filters.type || filters.techStack || filters.contribution || searchTerm) && (
          <div className="active-filters">
            <span className="active-filters-title">Active filters:</span>
            <div className="filter-tags">
              {searchTerm && (
                <span className="filter-tag">
                  Search: {searchTerm}
                  <button onClick={() => handleSearch({ target: { value: '' } })}>×</button>
                </span>
              )}
              {filters.date && (
                <span className="filter-tag">
                  Year: {filters.date}
                  <button onClick={() => handleFilterChange('date', '')}>×</button>
                </span>
              )}
              {filters.type && (
                <span className="filter-tag">
                  Type: {filters.type}
                  <button onClick={() => handleFilterChange('type', '')}>×</button>
                </span>
              )}
              {filters.techStack && (
                <span className="filter-tag">
                  Tech: {filters.techStack}
                  <button onClick={() => handleFilterChange('techStack', '')}>×</button>
                </span>
              )}
              {filters.contribution && (
                <span className="filter-tag">
                  Role: {filters.contribution}
                  <button onClick={() => handleFilterChange('contribution', '')}>×</button>
                </span>
              )}
              <button onClick={clearFilters} className="clear-all-btn">Clear All</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;