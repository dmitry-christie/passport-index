import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { GlobalList } from './components/global-list/global-list.component';
import { CombinedScores } from './components/combined-scores/combined-scores.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: '',
      sortby: '',
      selectedmode: '',
    };
  }

 componentDidMount() {

    
    fetch('https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/countries/all')
      .then(response => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then(response => this.setState({ countries: response.items }))
      /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */
     
      
  } 

  

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
   
    const { countries, searchField, selectedmode } = this.state;
    const filteredcountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Global Passport Index 2020</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue tellus urna, sed interdum augue vulputate tristique. Morbi iaculis sed est in venenatis. </p>
        <div className='header-container'>
          <div className='profile-selectors'>
            <a href="#global" onClick={() => this.setState({ selectedmode: 'global' })} >
              <div className='profile-selector global'>Global</div>
            </a>
            <a href="#investement" onClick={() => this.setState({ selectedmode: 'investment' })} >
              <div className='profile-selector global'>Investment</div>
            </a>
            <a href="#retirement" onClick={() => this.setState({ selectedmode: 'retirement' })} >
              <div className='profile-selector global'>Retirement</div>
            </a>
          </div>
          
          <SearchBox test='test' onSearchChange={this.onSearchChange} />

        </div>

       <div className="tables-container">

         
       <GlobalList countries={filteredcountries} test='test' selectedmode={selectedmode}/>
          {(() => {
                switch(this.state.selectedmode) {
                  case 'Oranges':
                    console.log('test');
                    break;
                  case 'investment':
                    return           <div className='living-scores'>
                    <div className='table-header-text'>
                      <p>Living</p> <a className='close' href="#close" onClick={() => this.setState({ selectedmode: '' })}>x</a>
                    </div><CardList countries={filteredcountries} /></div>
                    break;
                  default: 
                  return           <div className='living-scores'>
                  <div className='table-header-text combined-scores-header'>
                    <p>Combined Scores</p>
                    
                  </div><p className='freespace'></p>
                  <CombinedScores countries={filteredcountries} /></div>
                    

                    
                }
            })()}
          
        </div>
        
      </div>
    );
  }
}

export default App;
