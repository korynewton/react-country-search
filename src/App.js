import React from 'react';
import Header from './components/Header/HeaderComponent';
import { GlobalStyles } from './App.styles';
import { MainContainer } from './styles/Main/mainContainer.styles';
import FilterComponent from './components/Filter/Filter.component';

class App extends React.Component {
  state = {
    isDarkMode: false
  };

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };
  render() {
    const { isDarkMode } = this.state;
    const { toggleMode } = this;

    return (
      <GlobalStyles>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <MainContainer>
          <FilterComponent />
        </MainContainer>
      </GlobalStyles>
    );
  }
}

export default App;
