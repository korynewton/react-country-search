import styled from 'styled-components';
import {
  fontWeightHeavy,
  fontWeightMedium,
  fontWeightLight,
  handleBackgroundFromMode,
  handleColorFromMode,
  handleBoxShadowFromMode
} from '../variables';

export const HomeCountryContainer = styled.div`
  width: 70%;
  box-shadow: ${({ isDarkMode }) => handleBoxShadowFromMode(isDarkMode)};
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  background: ${({ isDarkMode }) => handleBackgroundFromMode(isDarkMode)};
  border-radius: 0.5rem;
  overflow: hidden;
  height: 670px;
  max-width: 60rem;
  margin-bottom: 9rem;
  cursor: pointer;
  @media (min-width: 1000px) {
    width: 21%;
    height: 337px;
    margin-top: 0rem;
  }
`;

export const HomeCountryFlag = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  min-height: 100%;
`;

export const FlagContainer = styled.div`
  width: 100%;
  height: 325px;
  @media (min-width: 1000px) {
    width: 100%;
    height: 160px;
  }
`;
export const HomeCountryName = styled.h3`
  font-size: 3rem;
  font-weight: ${fontWeightHeavy};
  padding-left: 4.6rem;
  margin-top: 6rem;
  @media (min-width: 1000px) {
    padding-left: 2.5rem;
    margin-top: 2.5rem;
    font-size: 2rem;
  }
`;

export const HomeCountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2.5rem;
  margin-top: 3rem;
  padding-left: 4.6rem;
  height: 16rem;
  @media (min-width: 1000px) {
    height: unset;
    padding-left: 2.5rem;
    font-size: 1.5rem;
  }

  & h4 {
    font-weight: ${fontWeightMedium};
    @media (min-width: 1000px) {
      margin-bottom: 1rem;
    }
  }
  & span {
    font-weight: ${fontWeightLight};
  }
`;
