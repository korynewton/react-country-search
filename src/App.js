import React from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import Header from './components/Header/HeaderComponent';
import { GlobalStyles } from './App.styles';
import MainContainer from './styles/Main/mainContainer.styles';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

// temporary so I dont have to keep fetching 250 countries
import api_data from './api.json';

class App extends React.Component {
  state = {
    isDarkMode: false,
    searchFilter: '',
    filteredRegion: '',
    countries: api_data,
    filteredCountries: []
  };

  // componentDidMount() {
  //   axios
  //     .get('https://restcountries.eu/rest/v2/all')
  //     .then(res => this.setState({ countries: res.data }))
  //     .catch(err => console.log(err));
  // }

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  updateSearchFilter = e => {
    const { value } = e.target;
    this.setState({ searchFilter: value });
    if (value.length >= 3) this.filterCountries();
    if (value === '') this.setState({ filteredCountries: [] });
  };

  updateFilteredRegion = filteredRegion => {
    const { countries, filteredCountries } = this.state;
    let filtered;
    if (filteredCountries.length) {
      filtered = filteredCountries.filter(country => {
        if (country.region === filteredRegion) return true;
        return false;
      });
    } else {
      filtered = countries.filter(country => {
        if (country.region === filteredRegion) return true;
        return false;
      });
    }
    this.setState({ filteredCountries: filtered, filteredRegion });
  };

  filterCountries = () => {
    const { filteredCountries, searchFilter, countries } = this.state;
    let filtered;
    if (filteredCountries.length) {
      filtered = filteredCountries.filter(country => {
        if (country.name.toLowerCase().includes(searchFilter)) return true;
        return false;
      });
    } else {
      filtered = countries.filter(country => {
        if (country.name.toLowerCase().includes(searchFilter)) return true;
        return false;
      });
    }
    this.setState({ filteredCountries: filtered });
  };

  render() {
    const {
      isDarkMode,
      filteredRegion,
      countries,
      filteredCountries
    } = this.state;
    const { toggleMode, updateSearchFilter, updateFilteredRegion } = this;

    return (
      <GlobalStyles>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <MainContainer>
          <Route
            exact
            path="/"
            render={({ history }) => {
              return (
                <HomePage
                  filteredCountries={filteredCountries}
                  countries={countries}
                  updateSearchFilter={updateSearchFilter}
                  filteredRegion={filteredRegion}
                  updateFilteredRegion={updateFilteredRegion}
                  history={history}
                />
              );
            }}
          />

          <Route
            path="/country/:countryCode"
            render={({ match, ...rest }) => {
              const countryDetails = countries.find(
                ({ alpha3Code }) => alpha3Code === match.params.countryCode
              );

              const borderCountries = countries.filter(country => {
                if (countryDetails.borders.includes(country.alpha3Code))
                  return true;
                return false;
              });

              return (
                <DetailsPage
                  countryDetails={countryDetails}
                  borderCountries={borderCountries}
                  {...rest}
                />
              );
            }}
          />
        </MainContainer>
      </GlobalStyles>
    );
  }
}

export default App;
