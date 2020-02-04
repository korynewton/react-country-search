import React from 'react';
import TextFilter from './TextFilter.component';
import RegionFilter from './RegionFilter.component';
import FilterContainer from '../../styles/Main/Filter/FilterContainer.styles';

export const FilterComponent = () => {
  return (
    <FilterContainer>
      <TextFilter />
      <RegionFilter />
    </FilterContainer>
  );
};

export default FilterComponent;
