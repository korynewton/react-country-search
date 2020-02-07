import styled from 'styled-components';
import {
  boxShadow,
  fontWeightHeavy,
  fontWeightMedium,
  fontWeightLight
} from '../variables';

export const HomeCountryContainer = styled.div`
  width: 62%;
  box-shadow: ${boxShadow};
  border-radius: 0.5rem;
  overflow: hidden;
  height: 670px;
  border: 1px solid black;
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
  font-size: 2rem;
  font-weight: ${fontWeightHeavy};
`;
