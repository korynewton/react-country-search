import styled from 'styled-components';
import {
  fontWeightLight,
  fontWeightHeavy,
  fontWeightMedium,
  boxShadow
} from '../../variables';

export const DetailsContainer = styled.div`
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  height: 6rem;
  width: 20.5rem;
  margin-top: 8rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: ${boxShadow};
  cursor: pointer;

  font-weight: ${fontWeightLight};
  & h4 {
    margin-left: 2rem;
  }
`;

export const DetailFlag = styled.img`
  width: 100%;
  margin-top: 13rem;
`;

export const DetailDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  & h2 {
    font-weight: ${fontWeightHeavy};
    font-size: 4rem;
    margin-bottom: 6rem;
  }
  & h3 {
    margin-bottom: 3rem;
    font-size: 3rem;
  }
  & span {
    font-weight: ${fontWeightLight};
    font-size: 3rem;
  }
`;

export const DetailSubdetails = styled(DetailDetails)`
  margin-top: 8rem;
`;

export const BorderCountriesContainer = styled.div`
  margin-top: 8rem;
  font-size: 3rem;
  font-weight: ${fontWeightMedium};
`;

export const DetailBorderCountries = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%:
  border: 1px solid red;
  width: 100%;
  margin: 2rem 0;
`;

export const DetailBorderCountry = styled.div`
  cursor: pointer;
  box-shadow: ${boxShadow};
  background: white;
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
  }
`;
