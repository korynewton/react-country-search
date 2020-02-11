import React, { useEffect } from 'react';

import {
  DetailsContainer,
  DetailsPageContainer,
  DetailFlag
} from '../styles/Main/Details/Details.styles';
import DetailsComponent from '../components/Details/Details.component';
import BackButtonComponent from '../components/Details/BackButton.component';

const DetailsPage = ({ countryDetails, isDarkMode, ...rest }) => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <DetailsPageContainer>
      <BackButtonComponent isDarkMode={isDarkMode} />
      <DetailsContainer>
        <DetailFlag src={countryDetails.flag} />
        <DetailsComponent
          countryDetails={countryDetails}
          isDarkMode={isDarkMode}
          {...rest}
        />
      </DetailsContainer>
    </DetailsPageContainer>
  );
};

export default DetailsPage;
