import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Ajout de useTranslation
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const FilterSection = ({ onFilterChange }) => {
  const { t } = useTranslation(); // Ajout du hook de traduction
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    date: "",
    type: "",
    techStack: "",
    contribution: "",
  });

  // Options pour les filtres (maintenant avec traduction)
  const filterOptions = {
    date: ["2024", "2023", "2022", "2021", "2020"],
    type: ["Web App", "Mobile App", "E-Commerce", "Data Vis", "AI/ML"],
    techStack: [
      "React",
      "Vue.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Tailwind CSS",
    ],
    contribution: ["Full Stack", "Frontend", "Backend", "UI/UX"],
  };

  // Fonction pour traduire les options de type
  const translateType = (type) => {
    const typeMap = {
      "Web App": t("filters.options.webApp"),
      "Mobile App": t("filters.options.mobileApp"),
      "E-Commerce": t("filters.options.ecommerce"),
      "Data Vis": t("filters.options.dataVis"),
      "AI/ML": t("filters.options.aiMl"),
    };
    return typeMap[type] || type;
  };

  // Fonction pour traduire les options de contribution
  const translateContribution = (contribution) => {
    const contributionMap = {
      "Full Stack": t("filters.options.fullStack"),
      Frontend: t("filters.options.frontend"),
      Backend: t("filters.options.backend"),
      "UI/UX": t("filters.options.uiUx"),
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
      date: "",
      type: "",
      techStack: "",
      contribution: "",
    });
    setSearchTerm("");
    onFilterChange({
      searchTerm: "",
      date: "",
      type: "",
      techStack: "",
      contribution: "",
    });
  };

  return (
    <div className="filter-section">
      <div className="filter-container">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("filters.searchPlaceholder")}
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

<div className="filters-grid">
  <Dropdown
    options={[
      { value: '', label: t('filters.allDates') },
      ...filterOptions.date.map(year => ({ value: year, label: year }))
    ]}
    value={filters.date}
    onChange={(value) => handleFilterChange('date', value)}
    placeholder={t('filters.allDates')}
  />

  <Dropdown
    options={[
      { value: '', label: t('filters.allTypes') },
      ...filterOptions.type.map(type => ({ 
        value: type, 
        label: translateType(type) 
      }))
    ]}
    value={filters.type}
    onChange={(value) => handleFilterChange('type', value)}
    placeholder={t('filters.allTypes')}
  />

  <Dropdown
    options={[
      { value: '', label: t('filters.allTechnologies') },
      ...filterOptions.techStack.map(tech => ({ value: tech, label: tech }))
    ]}
    value={filters.techStack}
    onChange={(value) => handleFilterChange('techStack', value)}
    placeholder={t('filters.allTechnologies')}
  />

  <Dropdown
    options={[
      { value: '', label: t('filters.allContributions') },
      ...filterOptions.contribution.map(role => ({ 
        value: role, 
        label: translateContribution(role) 
      }))
    ]}
    value={filters.contribution}
    onChange={(value) => handleFilterChange('contribution', value)}
    placeholder={t('filters.allContributions')}
  />
</div>
        {/* Active Filters Display */}
        {(filters.date ||
          filters.type ||
          filters.techStack ||
          filters.contribution ||
          searchTerm) && (
          <div className="active-filters">
            <span className="active-filters-title">
              {t("filters.activeFilters")}
            </span>
            <div className="filter-tags">
              {searchTerm && (
                <span className="filter-tag">
                  {t("filters.search")}: {searchTerm}
                  <button
                    onClick={() => handleSearch({ target: { value: "" } })}
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.date && (
                <span className="filter-tag">
                  {t("filters.year")}: {filters.date}
                  <button onClick={() => handleFilterChange("date", "")}>
                    ×
                  </button>
                </span>
              )}
              {filters.type && (
                <span className="filter-tag">
                  {t("filters.type")}: {translateType(filters.type)}
                  <button onClick={() => handleFilterChange("type", "")}>
                    ×
                  </button>
                </span>
              )}
              {filters.techStack && (
                <span className="filter-tag">
                  {t("filters.tech")}: {filters.techStack}
                  <button onClick={() => handleFilterChange("techStack", "")}>
                    ×
                  </button>
                </span>
              )}
              {filters.contribution && (
                <span className="filter-tag">
                  {t("filters.role")}:{" "}
                  {translateContribution(filters.contribution)}
                  <button
                    onClick={() => handleFilterChange("contribution", "")}
                  >
                    ×
                  </button>
                </span>
              )}
              <button onClick={clearFilters} className="clear-all-btn">
                {t("filters.clearAll")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
