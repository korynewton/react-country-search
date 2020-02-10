import React from 'react';
import CountriesContainer from '../../styles/Main/CountriesContainer.styles';
import Country from './Country.component';
const CountriesComponent = ({ countries, history, ...rest }) => {
  return (
    <CountriesContainer>
      {countries.map(country => (
        <Country
          key={country.alpha3Code}
          country={country}
          history={history}
          {...rest}
        />
      ))}
    </CountriesContainer>
  );
};

export default CountriesComponent;
