import React from 'react';
import Header from './components/Header/HeaderComponent';
import { GlobalStyles } from './App.styles';

function App() {
  return (
    <GlobalStyles>
      <Header mode="light" />
    </GlobalStyles>
  );
}

export default App;
