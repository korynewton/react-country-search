import React from 'react';
import { DarkModeIcon, LightModeIcon } from './ModeIcons';

const Header = ({ mode }) => {
  return (
    <div>
      <h2>Where in the world?</h2>
      <div className="mode">
        {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
    </div>
  );
};

export default Header;
