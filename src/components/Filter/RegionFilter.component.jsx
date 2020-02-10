import React, { useState } from 'react';
import {
  StyledDropdown,
  TopItem,
  DropdownContent
} from '../../styles/Main/Filter/DropdownFilter.styles';
import { ChevronDown } from './../Shared/Icon.components';

const RegionFilter = ({ filteredRegion, updateFilteredRegion, isDarkMode }) => {
  const [active, setActive] = useState(false);
  const [selectedRegion, setselectedRegion] = useState(filteredRegion);

  const toggleActive = () => {
    setActive(prevActive => !prevActive);
  };

  const updateselectedRegion = e => {
    const { id } = e.target;
    toggleActive();
    setselectedRegion(id);
    updateFilteredRegion(id);
  };

  return (
    <StyledDropdown isDarkMode={isDarkMode}>
      <TopItem onClick={toggleActive} isDarkMode={isDarkMode}>
        {selectedRegion ? <h4>{selectedRegion}</h4> : <h4>Filter by Region</h4>}
        <ChevronDown />
      </TopItem>
      {active ? (
        <DropdownContent isDarkMode={isDarkMode}>
          <h3 onClick={e => updateselectedRegion(e)} id="Africa">
            Africa
          </h3>
          <h3 onClick={e => updateselectedRegion(e)} id="Americas">
            Americas
          </h3>
          <h3 onClick={e => updateselectedRegion(e)} id="Asia">
            Asia
          </h3>
          <h3 onClick={e => updateselectedRegion(e)} id="Europe">
            Europe
          </h3>
          <h3 onClick={e => updateselectedRegion(e)} id="Oceania">
            Oceania
          </h3>
        </DropdownContent>
      ) : null}
    </StyledDropdown>
  );
};

export default RegionFilter;
