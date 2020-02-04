import styled from 'styled-components';
import { fontWeightHeavy } from '../../styles/variables';

export const StyledH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: ${fontWeightHeavy};
`;

export const StyledH4 = styled.h4``;

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  max-width: 91%;
  margin-left: auto;
  margin-right: auto;
`;

export const ModeDiv = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 24%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: 0 -10px 20px 9px grey;
`;
