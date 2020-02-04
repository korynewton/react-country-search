import styled from 'styled-components';
import { boxShadow } from '../../variables';

export const FilterTextInput = styled.input`
  width: 100%;
  height: 30px;
  width: 65%;
  font-size: 1.5rem;
  height: 4rem;
  margin-left: 1.2rem;
  cursor: text;
  border: none;
  background: white;
`;

export const TextFilterContainer = styled.div`
  display: flex;
  justify-content: align-start;
  align-items: center;
  background: white;
  box-shadow: ${boxShadow};
`;

export const SearchIconDiv = styled.div`
  font-size: 1.8rem;
  color: darkgray;
  padding: 0px 2rem;
  margin-left: 2rem;
`;
