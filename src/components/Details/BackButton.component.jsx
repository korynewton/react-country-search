import React from 'react';
import { BackButtonContainer } from '../../styles/Main/Details/Details.styles';
import { ArrowLeftIcon } from '../Shared/Icon.components';
const BackButtonComponent = ({ history }) => {
  const navigateBack = () => {
    history.goBack();
  };
  return (
    <BackButtonContainer onClick={navigateBack}>
      <ArrowLeftIcon />
      <h4>Back</h4>
    </BackButtonContainer>
  );
};

export default BackButtonComponent;
