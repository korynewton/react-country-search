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
    </HomeCountryContainer>
  );
};

export default Country;
