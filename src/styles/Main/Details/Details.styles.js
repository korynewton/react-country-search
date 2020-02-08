import styled from 'styled-components';
import { fontWeightLight, boxShadow } from '../../variables';

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

export const DetailFlag = styled.div``;

export const DetailName = styled.h4``;

export const DetailDetails = styled.div``;

export const DetailSubdetails = styled.div``;

export const DetailBorderCountries = styled.div``;

export const DetailBorderCountry = styled.div``;
