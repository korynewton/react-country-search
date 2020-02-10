import styled from 'styled-components';
import {
  boxShadow,
  darkBlue,
  veryDarkBlueText,
  handleColorFromMode,
  handleBackgroundFromMode,
  handleBoxShadowFromMode
} from '../../variables';

export const FilterTextInput = styled.input`
  width: 100%;
  width: 65%;
  font-size: 2.5rem;
  height: 10rem;
  margin-left: 4.5rem;
  cursor: text;
  border: none;
  background: inherit;
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  &::placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'lightgray')};
  }
`;

export const TextFilterContainer = styled.div`
  display: flex;
  justify-content: align-start;
  align-items: center;
  background: ${({ isDarkMode }) => handleBackgroundFromMode(isDarkMode)};
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  box-shadow: ${({ isDarkMode }) => handleBoxShadowFromMode(isDarkMode)};
`;

export const SearchIconDiv = styled.div`
  font-size: 3rem;
  padding: 0px 2rem;
  margin-left: 3.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'lightgray')};
`;
