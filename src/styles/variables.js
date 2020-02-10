// colors
export const white = 'hsl(0,0%,100%);';
export const veryLightGrayBackground = 'hsl(0, 0%, 98%);';
export const darkGray = 'hsl(0,0%, 52%);';
export const veryDarkBlueText = 'hsl(200, 15%, 8%);';
export const veryDarkBlueBackground = 'hsl(207, 26%, 17%);';
export const darkBlue = 'hsl(209, 23%, 22%);';

// font details
export const nunitoSansFont = '"Nunito Sans", sans-serif;';
export const detailPageFontSize = '1.6rem;';
export const homePageFontSize = '1.4rem;';
export const fontWeightLight = '300;';
export const fontWeightMedium = '600;';
export const fontWeightHeavy = '800;';

export const boxShadow = '0px 4px 17px 0px lightgrey;';

// dark mode
export const handleColorFromMode = isDarkMode =>
  isDarkMode ? 'white' : veryDarkBlueText;

export const handleBackgroundFromMode = isDarkMode =>
  isDarkMode ? darkBlue : 'white';

export const handleBoxShadowFromMode = isDarkMode =>
  isDarkMode ? '0px 4px 17px 0px black;' : '0px 4px 17px 0px lightgrey;';
