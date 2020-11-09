import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { GlobalList } from './components/global-list/global-list.component';
import { CombinedScores } from './components/combined-scores/combined-scores.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './assets/img/passport-index-logo.png';
import footer_logo from './assets/img/footer-logo.png';

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
      selectedmode: 'global',
      menuactive: 'inactive',
    };
  }

 componentDidMount() {

    
    fetch('https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/countries/all')
      .then(response => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then(response => this.setState({ countries: response.items }))
      /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */
     
      
  } 



  sortByMode = (selectedmode) => {
    const fields = {
      global:'rank_combined',
      retirement:'retire_rank',
      investment:'investment_rank',
      mobility:'mobility_rank',
    }
    const field = fields[selectedmode];
    let countries = [...this.state.countries];
    countries = countries.sort((a,b) => a[field] - b[field])
    this.setState({countries, selectedmode})
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

            {(() => {
                switch(this.state.menuactive) {
                  case 'active':
                    return            <a className="menu-icon" href="#menu" onClick={() => this.setState({ menuactive: 'inactive' })}>
                    X
                  </a>
                    break;
                
                  default: 
                  return           <a className="menu-icon" href="#menu" onClick={() => this.setState({ menuactive: 'active' })}>
                  ☰
                </a>
                    

                    
                }
            })()}
               
               
            </div>
            <div className='logo'>
              <img src={logo} alt=""/>
            </div>
            
          </div>
          <div className='right'>
            <ul className='language-switcher'>
              <li><a href="#english">EN</a></li>
            </ul>
          </div>
        </div>
        <div id="sidebar" className={this.state.menuactive === 'active' ? "active" : "inactive-sidebar"}>
          <ul>
            <li><a href="#global">global</a></li>
            <li><a href="#global">global</a></li>
            <li><a href="#global">global</a></li>
            <li><a href="#global">global</a></li>
          </ul>
        </div>
        <div className='container'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue tellus urna, sed interdum augue vulputate tristique. Morbi iaculis sed est in venenatis. </p>
        <div className='header-container'>
          <div className='profile-selectors'>
            <a href="#global" className={this.state.selectedmode === 'global' ? "active" : "inactive"} onClick={() => this.sortByMode('global')} >
              <div className='profile-selector global'> <img src={global} alt=""/>Global Index</div>
            </a>
            <a href="#mobility" className={this.state.selectedmode === 'mobility' ? "active" : "inactive"} onClick={() => this.sortByMode('mobility' )} >
              <div className='profile-selector mobility'><img src={mobility} alt=""/>Mobility Index</div>
            </a>
            <a href="#investement" className={this.state.selectedmode === 'investment' ? "active" : "inactive"} onClick={() => this.sortByMode('investment' )} >
              <div className='profile-selector investment'><img src={investor} alt=""/>Investor Index</div>
            </a>
            <a href="#retirement" className={this.state.selectedmode === 'retirement' ? "active" : "inactive"}  onClick={() => this.sortByMode('retirement')} >
              <div className='profile-selector retirement'><img src={retirement} alt=""/>Retirement Index</div>
            </a>
          </div>
          
          <SearchBox test='test' onSearchChange={this.onSearchChange} />

        

        </div>

       <div className="tables-container">
         <div className="table-header  flex">

         
          <div className="table-header  flex table-header-left">
            <div className="country">
              <p>Country</p>
            </div>
            <div className="flex column global-passport-score-container">
              <div className="global-passport-score">
                Global Passport Score
              </div>
              <div className="flex global-scores">
                <div className="mobility">
                  <p>Mobility</p>
                </div>
                <div className="investment">
                  <p>Investment</p>
                </div>
                <div className="living">
                  <p>Living</p>
                </div>
              </div>
             
            </div>
          </div>

            <div className="table-header table-header-right flex">
              <div className="combined">
                <p>Combined Scores</p>
              </div>
              <div className="rank">
                <p>Rank</p>
              </div>
              <div className="more-details">
                <p>More Details</p>
              </div>
          </div>
          </div>
          <div className="table-body">

          


         
        <GlobalList countries={filteredcountries} test='test' selectedmode={selectedmode}/>
         {/* {(() => {
                switch(this.state.selectedmode) {
                  case 'mobility':
                    return           <div className='living-scores'>
                    <CardList countries={filteredcountries} /></div>
                    break;
                  case 'investment':
                    return           <div className='living-scores'>
                    <CardList countries={filteredcountries} /></div>
                    break;
                  case 'retirement':
                    return           <div className='living-scores'>
                    <CardList countries={filteredcountries} /></div>
                    break;
                  default: 
                  return           <div className='living-scores'>
                  
                  <CombinedScores countries={filteredcountries} /></div>
                    

                    
                }
            })()}

          */}
          
        </div>
        </div>
        </div>
        <footer>
        <div className="container">
            <div className="footer-logo">
              <img src={footer_logo} alt=""/>
            </div>
            <div className="copyright">
              
                Developed by <a href="#test">Global Citizen Solutions</a>. All right reserved.
              
            </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
