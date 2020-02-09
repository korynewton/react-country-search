import React from 'react';
import {
  DetailFlag,
  DetailDetails,
  DetailSubdetails
} from '../../styles/Main/Details/Details.styles';
import BackButtonComponent from './BackButton.component';

const DetailsComponent = ({ countryDetails, history }) => {
  const {
    flag,
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
    <>
      <BackButtonComponent history={history} />
      <DetailFlag src={flag} />

      <DetailDetails>
        <h2>{name}</h2>
        <h3>
          Native Name:
          <span> {nativeName}</span>
        </h3>
        <h3>
          Popultation:
          <span> {population.toLocaleString()}x</span>
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
      <DetailSubdetails>
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
    </>
  );
};

export default DetailsComponent;
