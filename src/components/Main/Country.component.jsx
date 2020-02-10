import React from 'react';
import {
  HomeCountryContainer,
  HomeCountryName,
  HomeCountryFlag,
  HomeCountryDetails,
  FlagContainer
} from '../../styles/Main/Country.styles';

const Country = ({ country, history }) => {
  const { name, region, population, flag, capital, alpha3Code } = country;

  const navigateToDetails = () => {
    history.push(`/country/${alpha3Code}`);
  };

  return (
    <HomeCountryContainer onClick={navigateToDetails}>
      <FlagContainer>
        <HomeCountryFlag src={flag} />
      </FlagContainer>
      <HomeCountryName>{name}</HomeCountryName>
      <HomeCountryDetails>
        <h4>
          Population: <span>{population.toLocaleString()}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </HomeCountryDetails>
    </HomeCountryContainer>
  );
};

export default Country;