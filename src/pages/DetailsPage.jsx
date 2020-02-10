import React from 'react';

import { DetailsContainer } from '../styles/Main/Details/Details.styles';
import DetailsComponent from '../components/Details/Details.component';
import BorderCountriesComponent from '../components/Details/BorderCountries.component';

const DetailsPage = ({ countryDetails, borderCountries, ...rest }) => {
  return (
    <>
      <DetailsContainer>
        <DetailsComponent countryDetails={countryDetails} {...rest} />
        <BorderCountriesComponent borderCountries={borderCountries} {...rest} />
      </DetailsContainer>
    </>
  );
};

export default DetailsPage;
