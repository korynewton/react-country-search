import React from 'react';
import {
  FilterTextInput,
  TextFilterContainer,
  SearchIconDiv
} from '../../styles/Main/Filter/TextFilter.styles';
import { SearchIcon } from './../Shared/Icon.components';
const TextFilter = ({ updateSearchFilter, isDarkMode }) => {
  return (
    <TextFilterContainer isDarkMode={isDarkMode}>
      <SearchIconDiv>
        <SearchIcon />
      </SearchIconDiv>
      <FilterTextInput
        type="text"
        name="name"
        id="name"
        placeholder="Search for a country..."
        onChange={e => updateSearchFilter(e)}
        isDarkMode={isDarkMode}
      />
    </TextFilterContainer>
  );
};

export default TextFilter;
