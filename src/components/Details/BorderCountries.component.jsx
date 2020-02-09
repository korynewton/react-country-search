import React from 'react';
import {
  BorderCountriesContainer,
  DetailBorderCountry,
  DetailBorderCountries
} from '../../styles/Main/Details/Details.styles';

const BorderCountriesComponent = ({ borderCountries, history }) => {
  const navigateToBorderCountry = name => {
    history.push(name);
  };
  return (
    <BorderCountriesContainer>
      <h4>Border Countries:</h4>
      <DetailBorderCountries>
        {borderCountries.map(country => (
          <DetailBorderCountry
            onClick={() => navigateToBorderCountry(country.name)}
          >
            <h5>{country.name.replace(/ *\([^)]*\) */g, '')}</h5>
          </DetailBorderCountry>
        ))}
      </DetailBorderCountries>
    </BorderCountriesContainer>
  );
};

export default BorderCountriesComponent;
