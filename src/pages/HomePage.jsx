import React from 'react';

import FilterComponent from '../components/Filter/Filter.component';
import CountriesComponent from '../components/Main/Countries.component';

const HomePage = ({ countries, filteredCountries, ...rest }) => {
  return (
    <>
      <FilterComponent {...rest} />
      <CountriesComponent
        countries={filteredCountries.length ? filteredCountries : countries}
        {...rest}
      />
    </>
  );
};

export default HomePage;
