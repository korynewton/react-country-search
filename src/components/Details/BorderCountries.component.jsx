import React from 'react';
import {
  BorderCountriesContainer,
  DetailBorderCountry,
  DetailBorderCountries
} from '../../styles/Main/Details/Details.styles';

const BorderCountriesComponent = ({ borderCountries, history, isDarkMode }) => {
  const navigateToBorderCountry = code => {
    history.push(code);
  };
  return (
    <BorderCountriesContainer isDarkMode={isDarkMode}>
      <h4>
        Border Countries:{' '}
        {borderCountries.length === 0 ? <span>None</span> : null}
      </h4>
      <DetailBorderCountries>
        {borderCountries.map(country => (
          <DetailBorderCountry
            key={country.alpha3Code}
            isDarkMode={isDarkMode}
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
