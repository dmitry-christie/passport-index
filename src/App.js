import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [
        {
          "id": 4,
          "name": "France",
          "country_code": "FRA",
          "visa_free": 86,
          "visa_arrival": 32,
          "e_visa": 82,
          "gdp_per_cap": 43720,
          "taxation": 45,
          "vcpe_index": 79,
          "cost_of_living": 88.83,
          "hdi": 0.891,
          "freedom": 8.04,
          "calculated_mobility_score": 119,
          "calculated_investment_score": 100,
          "calculated_living_score": 90,
          "links": [
            {
              "rel": "self",
              "href": "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/4"
            }
          ]
        },
        {
          "id": 1,
          "country_code": "JPN",
          "name": "Japan",
          "visa_free": 83,
          "visa_arrival": 36,
          "e_visa": 81,
          "gdp_per_cap": 48766,
          "taxation": 55.95,
          "vcpe_index": 91.2,
          "cost_of_living": 89.69,
          "hdi": 0.909,
          "freedom": 8.3,
          "calculated_mobility_score": 118,
          "calculated_investment_score": 200,
          "calculated_living_score": 75,
          "links": [
            {
              "rel": "self",
              "href": "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/1"
            }
          ]
        },
        {
          "id": 2,
          "name": "New Zealand",
          "country_code": "NZL",
          "visa_free": 78,
          "visa_arrival": 41,
          "e_visa": 81,
          "gdp_per_cap": 38764,
          "taxation": 33,
          "vcpe_index": 33,
          "cost_of_living": 76.91,
          "hdi": 0.917,
          "freedom": 8.9,
          "calculated_mobility_score": 178,
          "calculated_investment_score": 40,
          "calculated_living_score": 100,
          "links": [
            {
              "rel": "self",
              "href": "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/2"
            }
          ]
        },
        {
          "id": 3,
          "name": "Belgium",
          "country_code": "BEL",
          "visa_free": 87,
          "visa_arrival": 32,
          "e_visa": 82,
          "gdp_per_cap": 47116,
          "taxation": 53.7,
          "vcpe_index": 79.6,
          "cost_of_living": 73.69,
          "hdi": 0.919,
          "freedom": 8.22,
          "calculated_mobility_score": 60,
          "calculated_investment_score": 50,
          "calculated_living_score": 30,
          "links": [
            {
              "rel": "self",
              "href": "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/3"
            }
          ]
        }
      ],
      searchField: ''
    };
  }

 /* componentDidMount() {

    
    fetch('https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/')
      .then(response => response.json())
      .then( console.log())
      .then(items => this.setState({ countries: items }).catch(error => console.error(error)));
     
      
  } */

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { countries, searchField } = this.state;
    const filteredcountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Global Passport Index 2020</h1>
        <div className='header-container'>
          <div className='profile-selectors'>
            <div className='profile-sector global'>Global</div>
            <div className='profile-sector global'>Investment</div>
            <div className='profile-sector global'>Retirement</div>
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
