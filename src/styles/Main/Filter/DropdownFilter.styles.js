import styled from 'styled-components';
import {
  nunitoSansFont,
  fontWeightLight,
  handleColorFromMode,
  handleBackgroundFromMode,
  handleBoxShadowFromMode
} from '../../variables';

export const StyledDropdown = styled.div`
  font-family: ${nunitoSansFont};
  font-size: 2rem;
  font-weight: ${fontWeightLight};
  width: 58%;
  margin-top: 8rem;
  @media (min-width: 1000px) {
    width: 16%;
    margin-top: 0;
  }
`;

export const TopItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2.5rem;
  height: 10rem;
  border-radius: 0.5rem;
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  background: ${({ isDarkMode }) => handleBackgroundFromMode(isDarkMode)};
  box-shadow: ${({ isDarkMode }) => handleBoxShadowFromMode(isDarkMode)};
  @media (min-width: 1000px) {
    font-size: 1.5rem;
    height: 6.5rem;
  }
`;

export const DropdownContent = styled.div`
  color: ${({ isDarkMode }) => handleColorFromMode(isDarkMode)};
  background: ${({ isDarkMode }) => handleBackgroundFromMode(isDarkMode)};
  margin-top: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5rem;
  height: 23rem;
  @media (min-width: 1000px) {
    margin-top: 0.5rem;
    height: 10rem;
    padding: 2rem 3rem;
  }

  & h3 {
    font-size: 3rem;
    cursor: pointer;
    @media (min-width: 1000px) {
      font-size: 1.5rem;
    }
  }
`;
