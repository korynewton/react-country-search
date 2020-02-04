import styled from 'styled-components';
import { nunitoSansFont, fontWeightLight, boxShadow } from '../../variables';

export const StyledDropdown = styled.div`
  font-family: ${nunitoSansFont};
  font-size: 2rem;
  font-weight: ${fontWeightLight};
  width: 61%;
  margin-top: 6.5rem;
`;

export const TopItem = styled.div`
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  height: 5.5rem;
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
  padding: 3rem;

  height: 12.5rem;

  & h3 {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
