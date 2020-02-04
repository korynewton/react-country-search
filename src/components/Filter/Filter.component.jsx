import React from 'react';
import TextFilter from './TextFilter.component';
import RegionFilter from './RegionFilter.component';
import FilterContainer from '../../styles/Main/Filter/FilterContainer.styles';

export const FilterComponent = ({
  updateSearchFilter,
  filteredRegion,
  updateFilteredRegion
}) => {
  return (
    <FilterContainer>
      <TextFilter updateSearchFilter={updateSearchFilter} />
      <RegionFilter
        filteredRegion={filteredRegion}
        updateFilteredRegion={updateFilteredRegion}
      />
    </FilterContainer>
  );
};

export default FilterComponent;
