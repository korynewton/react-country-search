import React from 'react';
import ModeIcon from './ModeIcons';
import {
  StyledHeaderDiv,
  StyledH2,
  ModeDiv,
  HeaderContainer
} from '../../styles/Header/Header.styles';

const Header = ({ mode }) => {
  return (
    <HeaderContainer>
      <StyledHeaderDiv>
        <StyledH2>Where in the world?</StyledH2>
        <ModeIcon mode={mode} />
      </StyledHeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
