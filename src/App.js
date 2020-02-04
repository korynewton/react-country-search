import React from 'react';
import Header from './components/Header/HeaderComponent';
import { GlobalStyles } from './App.styles';
import { MainContainer } from './styles/Main/mainContainer.styles';
import FilterComponent from './components/Filter/Filter.component';

class App extends React.Component {
  state = {
    isDarkMode: false,
    searchFilter: '',
    filteredRegion: ''
  };

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  updateSearchFilter = e => {
    this.setState({ searchFilter: e.target.value });
  };

  updateFilteredRegion = filteredRegion => {
    this.setState({ filteredRegion });
  };
  render() {
    const { isDarkMode, filteredRegion } = this.state;
    const { toggleMode, updateSearchFilter, updateFilteredRegion } = this;

    return (
      <GlobalStyles>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <MainContainer>
          <FilterComponent
            updateSearchFilter={updateSearchFilter}
            filteredRegion={filteredRegion}
            updateFilteredRegion={updateFilteredRegion}
          />
        </MainContainer>
      </GlobalStyles>
    );
  }
}

export default App;
