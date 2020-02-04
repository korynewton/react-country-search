import React from 'react';
import ModeIcon from './ModeIcons';
import {
  StyledHeaderDiv,
  StyledH2,
<<<<<<< HEAD
=======
  ModeDiv,
>>>>>>> 75ed193c16e71cf300bf60cb41add86e20b480c4
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
