import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon as darkMode } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightMode } from '@fortawesome/free-regular-svg-icons';

// Add all icons to the library so you can use it in your page
library.add(darkMode, lightMode);

export const DarkModeIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={darkMode} />
      <h4>Dark Mode</h4>
    </>
  );
};
export const LightModeIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={lightMode} />
      <h4>Light Mode</h4>
    </>
  );
};
