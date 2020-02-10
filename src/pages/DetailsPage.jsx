import React, { useEffect } from 'react';

import { DetailsContainer } from '../styles/Main/Details/Details.styles';
import DetailsComponent from '../components/Details/Details.component';
import BorderCountriesComponent from '../components/Details/BorderCountries.component';

const DetailsPage = ({
  countryDetails,
  borderCountries,
  isDarkMode,
  ...rest
}) => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <DetailsContainer>
        <DetailsComponent
          countryDetails={countryDetails}
          isDarkMode={isDarkMode}
          {...rest}
        />
        <BorderCountriesComponent
          borderCountries={borderCountries}
          isDarkMode={isDarkMode}
          {...rest}
        />
      </DetailsContainer>
    </>
  );
};

export default DetailsPage;
