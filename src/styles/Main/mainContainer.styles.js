import styled from 'styled-components';
import { veryLightGrayBackground, veryDarkBlueBackground } from '../variables';

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: ${({ isDarkMode }) =>
    isDarkMode ? veryDarkBlueBackground : 'white'};
  padding-top: 4rem;
`;

export default MainContainer;
