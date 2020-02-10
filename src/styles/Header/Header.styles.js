import styled from 'styled-components';
import {
  fontWeightHeavy,
  boxShadow,
  darkBlue,
  veryDarkBlueText
} from '../../styles/variables';

export const StyledH2 = styled.h2`
  font-size: 2.7rem;
  font-weight: ${fontWeightHeavy};
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const StyledH4 = styled.h4`
  @media (min-width: 1000px) {
    margin-left: 1rem;
  }
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16rem;
  max-width: 91%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1000px) {
    height: 8rem;
    max-width: 89%;
  }
`;

export const ModeDiv = styled.div`
  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
  width: 24%;
  cursor: pointer;
  @media (min-width: 1000px) {
    justify-content: flex-end;
    font-size: 1.5rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: ${boxShadow};
  background: ${({ isDarkMode }) => (isDarkMode ? darkBlue : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : veryDarkBlueText)};
`;
