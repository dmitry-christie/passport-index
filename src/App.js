import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: '',
      sortby: '',
    };
  }

 componentDidMount() {

    
    fetch('https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/')
      .then(response => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then(response => this.setState({ countries: response.items }))
      /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */
     
      
  } 

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { countries, searchField } = this.state;
    const filteredcountries = countries.filter(country =>
      country.country_code.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Global Passport Index 2020</h1>
        <div className='header-container'>
          <div className='profile-selectors'>
            <a href="#global">
              <div className='profile-selector global'>Global</div>
            </a>
            <div className='profile-selector global'>Investment</div>
            <div className='profile-selector global'>Retirement</div>
          </div>
          <SearchBox onSearchChange={this.onSearchChange} />

        </div>

       <div className="tables-container">
          <CardList countries={filteredcountries} />
          <CardList countries={filteredcountries} />
        </div>
        
      </div>
    );
  }
}

export default App;
