import styled from 'styled-components';
import { boxShadow } from '../../variables';

export const FilterTextInput = styled.input`
  width: 100%;
  width: 65%;
  font-size: 2.5rem;
  height: 10rem;
  margin-left: 4.5rem;
  cursor: text;
  border: none;
  background: white;
  color: lightgray;
`;

export const TextFilterContainer = styled.div`
  display: flex;
  justify-content: align-start;
  align-items: center;
  background: white;
  box-shadow: ${boxShadow};
`;

export const SearchIconDiv = styled.div`
  font-size: 3rem;
  color: darkgray;
  padding: 0px 2rem;
  margin-left: 3.5rem;
`;
