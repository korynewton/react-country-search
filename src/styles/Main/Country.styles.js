import styled from 'styled-components';
import {
  boxShadow,
  fontWeightHeavy,
  fontWeightMedium,
  fontWeightLight
} from '../variables';

export const HomeCountryContainer = styled.div`
  width: 70%;
  box-shadow: ${boxShadow};
  border-radius: 0.5rem;
  overflow: hidden;
  height: 670px;
  max-width: 60rem;
  margin-bottom: 9rem;
  cursor: pointer;
`;

export const HomeCountryFlag = styled.img`
  width: 100%;
  height: auto;
  max-height: 325px;
`;

export const FlagContainer = styled.div`
  width: 100%;
  height: 325px;
`;
export const HomeCountryName = styled.h3`
  font-size: 3rem;
  font-weight: ${fontWeightHeavy};
  padding-left: 4.6rem;
  margin-top: 6rem;
`;

export const HomeCountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2.5rem;
  margin-top: 3rem;
  padding-left: 4.6rem;
  height: 16rem;

  & h4 {
    font-weight: ${fontWeightMedium};
  }
  & span {
    font-weight: ${fontWeightLight};
  }
`;
