import React from 'react';
import {
  HomeCountryContainer,
  HomeCountryName,
  HomeCountryFlag,
  HomeCountryDetails,
  FlagContainer
} from '../styles/Main/Country.styles';

const Country = ({ country }) => {
  const { name, region, population, flag, capital } = country;
  return (
    <HomeCountryContainer>
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
