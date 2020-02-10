import React from 'react';
import { BackButtonContainer } from '../../styles/Main/Details/Details.styles';
import { ArrowLeftIcon } from '../Shared/Icon.components';
const BackButtonComponent = ({ history, isDarkMode }) => {
  const navigateBack = () => {
    history.goBack();
  };
  return (
    <BackButtonContainer onClick={navigateBack} isDarkMode={isDarkMode}>
      <ArrowLeftIcon />
      <h4>Back</h4>
    </BackButtonContainer>
  );
};

export default BackButtonComponent;
