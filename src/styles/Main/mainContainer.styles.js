import styled from 'styled-components';
import { veryDarkBlueBackground, veryLightGrayBackground } from '../variables';

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: ${({ isDarkMode }) =>
    isDarkMode ? veryDarkBlueBackground : veryLightGrayBackground};
  padding-top: 4rem;
  height: 100vh;
`;

export default MainContainer;
