import React from 'react';
import { ModeIcon } from './../Shared/Icon.components';
import {
  StyledHeaderDiv,
  StyledH2,
  HeaderContainer
} from '../../styles/Header/Header.styles';

const Header = ({ isDarkMode, toggleMode }) => {
  return (
    <HeaderContainer>
      <StyledHeaderDiv>
        <StyledH2>Where in the world?</StyledH2>
        <ModeIcon isDarkMode={isDarkMode} toggleMode={toggleMode} />
      </StyledHeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
