import React, { useEffect } from 'react';

import {
  DetailsContainer,
  DetailsPageContainer,
  DetailFlag
} from '../styles/Main/Details/Details.styles';
import DetailsComponent from '../components/Details/Details.component';
import BackButtonComponent from '../components/Details/BackButton.component';

const DetailsPage = ({ countryDetails, isDarkMode, history, ...rest }) => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <DetailsPageContainer>
      <BackButtonComponent isDarkMode={isDarkMode} history={history} />
      <DetailsContainer>
        <DetailFlag
          src={countryDetails.flag}
          alt={'Flag of ' + countryDetails.name}
        />
        <DetailsComponent
          countryDetails={countryDetails}
          isDarkMode={isDarkMode}
          history={history}
          {...rest}
        />
      </DetailsContainer>
    </DetailsPageContainer>
  );
};

export default DetailsPage;
