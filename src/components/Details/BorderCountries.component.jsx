import React from 'react';
import {
  BorderCountriesContainer,
  DetailBorderCountry,
  DetailBorderCountries
} from '../../styles/Main/Details/Details.styles';

const BorderCountriesComponent = ({ borderCountries, history }) => {
  const navigateToBorderCountry = code => {
    history.push(code);
  };
  return (
    <BorderCountriesContainer>
      <h4>Border Countries:</h4>
      <DetailBorderCountries>
        {borderCountries.map(country => (
          <DetailBorderCountry
            onClick={() => navigateToBorderCountry(country.alpha3Code)}
          >
            <h5>{country.name.replace(/ *\([^)]*\) */g, '')}</h5>
          </DetailBorderCountry>
        ))}
      </DetailBorderCountries>
    </BorderCountriesContainer>
  );
};

export default BorderCountriesComponent;
