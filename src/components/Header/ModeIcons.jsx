import React from 'react';
import { StyledH4, ModeDiv } from '../../styles/Header/Header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon as darkMode } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightMode } from '@fortawesome/free-regular-svg-icons';

library.add(darkMode, lightMode);

const ModeIcon = ({ mode }) => {
  const icon = mode === 'light' ? lightMode : darkMode;
  return (
    <ModeDiv>
      <FontAwesomeIcon icon={icon} />
      <StyledH4>
        {mode.charAt(0).toUpperCase() + mode.slice(1) + ' Mode'}
      </StyledH4>
    </ModeDiv>
  );
};

export default ModeIcon;
