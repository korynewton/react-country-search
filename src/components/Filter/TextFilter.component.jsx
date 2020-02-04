import React from 'react';
import {
  FilterTextInput,
  TextFilterContainer,
  SearchIconDiv
} from '../../styles/Main/Filter/TextFilter.styles';
import { SearchIcon } from './../Shared/Icon.components';
const TextFilter = ({ updateSearchFilter }) => {
  return (
    <TextFilterContainer>
      <SearchIconDiv>
        <SearchIcon />
      </SearchIconDiv>
      <FilterTextInput
        type="text"
        name="name"
        id="name"
        placeholder="Search for a country..."
        onChange={e => updateSearchFilter(e)}
      />
    </TextFilterContainer>
  );
};

export default TextFilter;
