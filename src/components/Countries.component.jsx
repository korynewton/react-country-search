import React from 'react';
import CountriesContainer from '../styles/Main/CountriesContainer.styles';
import Country from './Country.component';
const CountriesComponent = ({ countries }) => {
  return (
    <CountriesContainer>
      {countries.map(country => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </CountriesContainer>
  );
};

export default CountriesComponent;
