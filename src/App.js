import React from 'react';
import Header from './components/Header/HeaderComponent';
import { GlobalStyles } from './App.styles';
import { MainContainer } from './styles/Main/mainContainer.styles';
import FilterComponent from './components/Filter/Filter.component';

class App extends React.Component {
  state = {
    isDarkMode: false,
    searchFilter: ''
  };

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  updateSearchFilter = e => {
    this.setState({ searchFilter: e.target.value });
  };
  render() {
    const { isDarkMode } = this.state;
    const { toggleMode, updateSearchFilter } = this;

    return (
      <GlobalStyles>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <MainContainer>
          <FilterComponent updateSearchFilter={updateSearchFilter} />
        </MainContainer>
      </GlobalStyles>
    );
  }
}

export default App;
