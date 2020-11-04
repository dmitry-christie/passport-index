import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { GlobalList } from './components/global-list/global-list.component';
import { CombinedScores } from './components/combined-scores/combined-scores.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './assets/img/passport-index-logo.png';
import global from './assets/img/global-index-icon.png';
import mobility from './assets/img/mobility-index-icon.png';
import investor from './assets/img/investor-index-icon.png';
import retirement from './assets/img/retirement-index-icon.png';



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
        <div id="header" className='header'>
          <div className='left'>          
            <div className='hamburger'>
                <a href="#">
                  ☰
                </a>
            </div>
            <div className='logo'>
              <img src={logo} alt=""/>
            </div>
            
          </div>
          <div className='right'>
            <ul className='language-switcher'>
              <li>EN</li>
            </ul>
          </div>
        </div>
        <div id="sidebar" className='sidebar'>
          <ul>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
          </ul>
        </div>
        <div className='container'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue tellus urna, sed interdum augue vulputate tristique. Morbi iaculis sed est in venenatis. </p>
        <div className='header-container'>
          <div className='profile-selectors'>
            <a href="#global" onClick={() => this.setState({ selectedmode: 'global' })} >
              <div className='profile-selector global'> <img src={global} alt=""/>Global Index</div>
            </a>
            <a href="#mobility" onClick={() => this.setState({ selectedmode: 'mobility' })} >
              <div className='profile-selector mobility'><img src={mobility} alt=""/>Mobility Index</div>
            </a>
            <a href="#investement" onClick={() => this.setState({ selectedmode: 'investment' })} >
              <div className='profile-selector investment'><img src={investor} alt=""/>Investor Index</div>
            </a>
            <a href="#retirement" onClick={() => this.setState({ selectedmode: 'retirement' })} >
              <div className='profile-selector retirement'><img src={retirement} alt=""/>Retirement Index</div>
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
        <footer>
            <div className="footer-logo">
              <img src="{logo}" alt=""/>
            </div>
            <div className="copyright">
              Developed by <a href="#test">Global Citizen Solutions</a>. All right reserved.
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
