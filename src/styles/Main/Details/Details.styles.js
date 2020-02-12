import styled from 'styled-components';
import {
  fontWeightLight,
  fontWeightHeavy,
  fontWeightMedium,
  handleBoxShadowFromMode,
  handleColorFromMode,
  darkBlue,
  handleBackgroundFromMode
} from '../../variables';

export const DetailsPageContainer = styled.div`
  margin: 0 auto;
  max-width: 85%;
  @media (min-width: 1000px) {
    max-width: 89%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DetailsComponentContainer = styled.div`
  & h2 {
    margin-top: 14rem;
    font-size: 3.5rem;
    font-weight: ${fontWeightHeavy};
    color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
    @media (min-width: 1000px) {
      margin-top: 12rem;
    }
  }

  @media (min-width: 1000px) {
    width: 47%;
  }
`;

export const DetailsTextContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  height: 6rem;
  width: 20.5rem;
  background: ${({ isDarkMode }) => handleBackgroundFromMode(isDarkMode)};
  border-radius: 0.5rem;
  box-shadow: ${({ isDarkMode }) => handleBoxShadowFromMode(isDarkMode)};
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  cursor: pointer;

  @media (min-width: 1000px) {
    font-size: 1.7rem;
    height: 4rem;
    width: 14rem;
  }

  font-weight: ${fontWeightLight};
  & h4 {
    margin-left: 2rem;
  }
`;

export const DetailFlag = styled.img`
  margin-top: 13rem;
  width: 100%;
  @media (min-width: 1000px) {
    max-width: 560px;
    margin-top: 8rem;
    height: 100%;
  }
`;

export const DetailDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  @media (min-width: 1000px) {
    margin-top: 3rem;
  }
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};

  & h2 {
    font-weight: ${fontWeightHeavy};
    font-size: 4rem;
    margin-bottom: 6rem;
  }
  & h3 {
    margin-bottom: 3rem;
    font-size: 3rem;
    font-weight: ${fontWeightMedium} @media (min-width: 1000px) {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }
  & span {
    font-weight: ${fontWeightLight};
    font-size: 3rem;
    @media (min-width: 1000px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }
`;

export const DetailSubdetails = styled(DetailDetails)`
  margin-top: 8rem;
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
`;

export const BorderCountriesContainer = styled.div`
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  margin-top: 8rem;
  font-size: 3rem;
  font-weight: ${fontWeightMedium};
  & span {
    font-weight: ${fontWeightLight};
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
    display: flex;
  }
`;

export const DetailBorderCountries = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%:
  width: 100%;
  margin-top: 2rem;
  padding-bottom:2rem;
  @media (min-width: 1000px) {
    margin-top:0rem;
    width: 80%;
  }
`;

export const DetailBorderCountry = styled.div`
  cursor: pointer;
  box-shadow: ${({ isDarkMode }) => handleBoxShadowFromMode(isDarkMode)};
  background: ${({ isDarkMode }) => (isDarkMode ? darkBlue : 'white')};
  width: 30%;
  height: 5.5rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & h5 {
    font-size: 2rem;
    font-weight: ${fontWeightLight};
    @media (min-width: 1000px) {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1000px) {
    margin-top: 1rem;
    width: 21%;
    height: 3rem;
  }
`;
