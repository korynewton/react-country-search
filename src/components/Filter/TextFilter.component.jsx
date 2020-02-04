import React from 'react';
import {
  FilterTextInput,
  TextFilterContainer,
  SearchIconDiv
} from '../../styles/Main/Filter/TextFilter.styles';
import { SearchIcon } from './../Shared/Icon.components';
const TextFilter = () => {
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
      />
    </TextFilterContainer>
  );
};

export default TextFilter;
