import React from 'react';
import { ModeIcon } from './../Shared/Icon.components';
import {
  StyledHeaderDiv,
  StyledH2,
  HeaderContainer
} from '../../styles/Header/Header.styles';

const Header = ({ isDarkMode, toggleMode }) => {
  const navigateHome = () => (window.location.href = '/');
  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <StyledHeaderDiv>
        <StyledH2 onClick={navigateHome}>Where in the world?</StyledH2>
        <ModeIcon isDarkMode={isDarkMode} toggleMode={toggleMode} />
      </StyledHeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
