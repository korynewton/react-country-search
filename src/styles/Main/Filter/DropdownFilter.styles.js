import styled from 'styled-components';
import { nunitoSansFont, fontWeightLight, boxShadow } from '../../variables';

export const StyledDropdown = styled.div`
  font-family: ${nunitoSansFont};
  font-size: 2rem;
  font-weight: ${fontWeightLight};
  width: 58%;
  margin-top: 8rem;
`;

export const TopItem = styled.div`
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2.5rem;
  height: 10rem;
  box-shadow: ${boxShadow};
  border-radius: 0.5rem;
`;

export const DropdownContent = styled.div`
  margin-top: 0.5rem;
  background: white;
  box-shadow: ${boxShadow};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5rem;
  height: 23rem;

  & h3 {
    font-size: 3rem;
    cursor: pointer;
  }
`;
