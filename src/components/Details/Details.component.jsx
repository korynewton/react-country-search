import React from 'react';
import {
  DetailDetails,
  DetailSubdetails,
  DetailsTextContainer,
  DetailsComponentContainer
} from '../../styles/Main/Details/Details.styles';
import BorderCountriesComponent from '../../components/Details/BorderCountries.component';

const DetailsComponent = ({
  countryDetails,
  isDarkMode,
  borderCountries,
  ...rest
}) => {
  const {
    population,
    name,
    region,
    nativeName,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = countryDetails;
  return (
    <DetailsComponentContainer>
      <h2>{name}</h2>
      <DetailsTextContainer>
        <DetailDetails isDarkMode={isDarkMode}>
          <h3>
            Native Name:
            <span> {nativeName}</span>
          </h3>
          <h3>
            Popultation:
            <span> {population.toLocaleString()}</span>
          </h3>
          <h3>
            Region:
            <span> {region}</span>
          </h3>
          <h3>
            Subregion:
            <span> {subregion}</span>
          </h3>
          <h3>
            Capital:
            <span> {capital}</span>
          </h3>
        </DetailDetails>
        <DetailSubdetails isDarkMode={isDarkMode}>
          <h3>
            Top Level Domain:
            <span> {topLevelDomain.join(', ')}</span>
          </h3>
          <h3>
            Currencies:
            <span> {currencies.map(({ name }) => name).join(', ')}</span>
          </h3>
          <h3>
            Languages:
            <span> {languages.map(({ name }) => name).join(', ')}</span>
          </h3>
        </DetailSubdetails>
      </DetailsTextContainer>
      <BorderCountriesComponent
        borderCountries={borderCountries}
        isDarkMode={isDarkMode}
        {...rest}
      />
    </DetailsComponentContainer>
  );
};

export default DetailsComponent;
