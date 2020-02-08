import React from 'react';
import {
  DetailsContainer,
  BackButtonContainer
} from '../../styles/Main/Details/Details.styles';
import BackButtonComponent from './BackButton.component';

const DetailsComponent = ({ countryDetails, history }) => {
  return (
    <DetailsContainer>
      <BackButtonComponent history={history} />
      <h1>{countryDetails.name}</h1>
      <h1>{countryDetails.population}</h1>
    </DetailsContainer>
  );
};

export default DetailsComponent;
