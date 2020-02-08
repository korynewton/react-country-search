import React from 'react';
import { StyledH4, ModeDiv } from '../../styles/Header/Header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMoon as lightMode,
  faSearch,
  faChevronDown,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { faMoon as darkMode } from '@fortawesome/free-regular-svg-icons';

library.add(darkMode, lightMode, faSearch, faChevronDown, faArrowLeft);

export const ModeIcon = ({ isDarkMode, toggleMode }) => {
  const icon = isDarkMode ? lightMode : darkMode;
  return (
    <ModeDiv onClick={toggleMode}>
      <FontAwesomeIcon icon={icon} />
      <StyledH4>Dark Mode</StyledH4>
    </ModeDiv>
  );
};

export const SearchIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export const ChevronDown = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export const ArrowLeftIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};
