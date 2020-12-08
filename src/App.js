import React, { Component } from "react";




import { SearchBox } from "./components/search-box/search-box.component";
import logo from "./assets/img/passport-index-logo.png";
import footer_logo from "./assets/img/footer-logo.png";
import global from "./assets/img/global-index-icon.png";
import mobility from "./assets/img/mobility-index-icon.png";
import investor from "./assets/img/investor-index-icon.png";
import retirement from "./assets/img/retirement-index-icon.png";

import {CountriesList} from "./components/countries-list/countries-list.component";
import "./App.css";
import SelectYourPassport from "./components/select-your-passport/select-your-passport.component";



class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: "",
      sortby: "",
      selectedmode: "global",
      menuactive: "inactive",
      passportSelected: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/countries/all"
    )
      .then((response) => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then((response) => this.setState({ countries: response.items }));
    /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */
  }

  sortByMode = (selectedmode) => {
    const fields = {
      global: "rank_combined",
      retirement: "retire_rank",
      investment: "investment_rank",
      mobility: "mobility_rank",
    };
    const field = fields[selectedmode];
    let countries = [...this.state.countries];
    countries = countries.sort((a, b) => a[field] - b[field]);
    this.setState({ countries, selectedmode });
  };


  sortByColumn = (columnTitle) => {
    
   
    let countries = [...this.state.countries];
    countries = countries.sort((b, a) => a[columnTitle] - b[columnTitle]);
    this.setState({ countries});
  };

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { countries, searchField, selectedmode } = this.state;
    const filteredcountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">

        
        <div id="header" className="header">
          <div className="left">
            <div className="hamburger">
              {(() => {
                switch (this.state.menuactive) {
                  case "active":
                    return (
                      <a
                        className="menu-icon"
                        href="#menu"
                        onClick={() =>
                          this.setState({ menuactive: "inactive" })
                        }
                      >
                        X
                      </a>
                    );
                    break;

                  default:
                    return (
                      <a
                        className="menu-icon"
                        href="#menu"
                        onClick={() => this.setState({ menuactive: "active" })}
                      >
                        ☰
                      </a>
                    );
                }
              })()}
            </div>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="right">
            <ul className="language-switcher">
              <li>
                <a href="#english">EN</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="sidebar"
          className={
            this.state.menuactive === "active" ? "active" : "inactive-sidebar"
          }
        >
          <ul>
            <li>
              <a href="#global">global</a>
            </li>
            <li>
              <a href="#global">global</a>
            </li>
            <li>
              <a href="#global">global</a>
            </li>
            <li>
              <a href="#global">global</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="header-container">
            <div className="profile-selectors">
              <a
                href="#global"
                className={
                  this.state.selectedmode === "global" ? "active" : "inactive"
                }
                onClick={() => this.sortByMode("global")}
              >
                <div className="profile-selector global">
                  <img src={global} alt="" />
                  Global Index
                </div>
              </a>
              <a
                href="#mobility"
                className={
                  this.state.selectedmode === "mobility" ? "active" : "inactive"
                }
                onClick={() => this.sortByMode("mobility")}
              >
                <div className="profile-selector mobility">
                  <img src={mobility} alt="" />
                  Mobility Index
                </div>
              </a>
              <a
                href="#investment"
                className={
                  this.state.selectedmode === "investment"
                    ? "active"
                    : "inactive"
                }
                onClick={() => this.sortByMode("investment")}
              >
                <div className="profile-selector investment">
                  <img src={investor} alt="" />
                  Investor Index
                </div>
              </a>
              <a
                href="#retirement"
                className={
                  this.state.selectedmode === "retirement"
                    ? "active"
                    : "inactive"
                }
                onClick={() => this.sortByMode("retirement")}
              >
                <div className="profile-selector retirement">
                  <img src={retirement} alt="" />
                  Retirement Index
                </div>
              </a>
            </div>

            <SearchBox test="test" onSearchChange={this.onSearchChange} />
          </div>
          <SelectYourPassport countries={this.state.countries}  selectedmode={this.state.selectedmode}/>

          <div className="tables-container">
            <div className="table-header  flex">
              <div className="table-header  flex table-header-left">
                <div className="country">
                  <p>Country</p>
                </div>
                <div className="rank">
                <a href="#test" title="Sort by Global Passport Index" onClick={() => this.sortByMode("global")}><p>Rank</p></a>
                </div>
                <div className="flex column global-passport-score-container">
                  <div className="global-passport-score">
                    Global Passport Ranks
                  </div>
                  <div className="flex global-scores">
                    <div className="mobility">
                    <a href="#mobility"><p onClick={() => this.sortByMode("mobility")}>Mobility</p></a>

                    </div>
                    <div className="investment">
                    <a href="#investment"><p onClick={() => this.sortByMode("investment")}>Investment</p></a>
                    </div>
                    <div className="living">
                      <a href="#retirement"><p onClick={() => this.sortByMode("retirement")}>Living</p></a>
                    </div>
                  </div>
                </div>
              </div>

              {(() => {
                switch (this.state.selectedmode) {
                  case "mobility":
                    return (
                      <div className="table-header table-header-right flex">
                        <div className="mobility-container">
                          <div className="mobility-header">Mobility</div>
                          <div className="mobility-columns">
                            <div className="visa-free-countries">
                              <a href="#test" title="Sort by Visa Free Countries" onClick={() => this.sortByColumn("mobility_vfree")}>Visa Free Countries</a>
                            </div>
                            <div className="visa-on-arrival">
                              <a href="#test" title="Sort by Visa on Arrival"onClick={() => this.sortByColumn("mobility_voa")}>Visa on Arrival</a>
                            </div>
                            <div className="visa-free-access-container">
                              <div>Visa Free Access To</div>
                              <div className="flags-visa-free flex">
                                <div className="eu flex">
                                <a href="#test" title="Sort by access to the EU" onClick={() => this.sortByColumn("visafree_eu")}><img
                                    src="https://www.globalcitizensolutions.com/passport-index/EU.svg"
                                    alt=""
                                  />

                                  <span>EU</span></a>
                                </div>
                                <div className="us flex">
                                <a href="#test" title="Sort by access to the US" onClick={() => this.sortByColumn("visafree_us")}><img
                                    src="https://www.globalcitizensolutions.com/passport-index/US.svg"
                                    alt=""
                                  /> 
                                  <span>US</span></a>
                                </div>
                                <div className="uk flex">
                                <a href="#test" title="Sort by access to the UK" onClick={() => this.sortByColumn("visafree_gb")}><img
                                    src="https://www.globalcitizensolutions.com/passport-index/GB.svg"
                                    alt=""
                                  />

                                  <span>UK</span>
                                </a>
                                </div>
                                <div className="eu flex">
                                <a href="#test" title="Sort by access to JP" onClick={() => this.sortByColumn("visafree_jp")}> <img
                                    src="https://www.globalcitizensolutions.com/passport-index/JP.svg"
                                    alt=""
                                  />
                                  <span>JP</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="more-details">
                          <p>More Details</p>
                        </div> 
                      </div>
                    );
                    break;
                  case "investment":
                    return (
                      <div className="table-header table-header-right flex">
                        <div className="mobility-container">
                          <div className="investment-header">Investment</div>
                          <div className="investment-columns flex">
                            <div className="visa-free-countries">
                              <a href="#test" title="Sort by Global Passport Index" onClick={() => this.sortByColumn("investment_gdp_pc")}>GDP per CAP</a>
                            </div>
                            <div className="visa-on-arrival"><a href="#test" title="Sort by Global Passport Index" onClick={() => this.sortByColumn("investment_tax_index")}>Personal Tax</a></div>
                            <div className="visa-free-access-container">
                            <a href="#test" title="Sort by Global Passport Index" onClick={() => this.sortByColumn("investment_vcpe_index")}>Investment Grade</a>
                            </div>
                          </div>
                        </div>
                        <div className="more-details">
                          <p>More Details</p>
                        </div> 
                      </div>
                    );
                    break;
                  case "retirement":
                    return (
                      <div className="table-header table-header-right flex">
                        <div className="mobility-container">
                          <div className="retirement-header">Living</div>
                          <div className="retirement-columns flex">
                            <div className="visa-free-countries">
                              Cost of living
                            </div>
                            <div className="visa-on-arrival">HDI</div>
                            <div className="visa-free-access-container">
                              Freedom
                            </div>
                          </div>
                        </div>
                        <div className="more-details">
                          <p>More Details</p>
                        </div> 
                      </div>
                    );
                    break;
                  default:
                    return (
                      <div className="table-header table-header-right flex">
                        <div className="combined">
                          <p >Combined Scores</p>
                        </div>
                        <div className="more-details">
                          <p>More Details</p>
                        </div> 
                      </div>
                    );
                }
              })()}
            </div>
            <div className="table-body">
              <CountriesList countries={filteredcountries} selectedmode={this.state.selectedmode} />
             
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="footer-logo">
              <img src={footer_logo} alt="" />
            </div>
            <div className="copyright">
              Developed by <a href="#test">Global Citizen Solutions</a>. All
              right reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
