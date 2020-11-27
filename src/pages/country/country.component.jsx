import React, { Component } from "react";
import logo from "../../assets/img/passport-index-logo.png";
import "./country.styles.css";
import VisaRequirementsMap from "../../components/visa-requirements-map/visa-requirements-map.component";

import VisaRequirementsRow from "../../components/visa-requirements-row/visa-requirements-row.component";
import { withRouter } from "react-router";

import ScoreBar from '../../components/score-bar/score-bar.component';







class CountryPage extends Component {


 


  componentDidMount() {


    var countryDataUrlBase = "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/countries/";
    const countryCode = this.props.match.params.country;
    var countryDataUrl = countryDataUrlBase.concat(countryCode);


 

    fetch(
      countryDataUrl
    )
      .then((response) => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then((response) => this.setState({ country: response.items[0] }));
    /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */
  
    const that = this;
    fetch("https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/mobility_data/all/ES")
        .then(function(response) {
            return response.json();
        })
        
        .then(function(jsonData) {
         
            that.setState({ mobility_data: jsonData });
        });
      }






    constructor() {
      super();
  
      this.state = {
        countries: [],
        searchField: "",
        sortby: "",
        menuactive: "inactive",
        passportSelected: "",
        country: "",
        mobility_data: "",
      };
    }
    render() {
      const countryCode = this.props.match.params.country;
      var countryFlagUrlBase = "https://www.passportindex.org/countries/";
      var countryFlagUrl = countryFlagUrlBase.concat(countryCode.toLowerCase());
      var countryFlagUrlFinal = countryFlagUrl.concat(".png");
  
      return (
    <div className="App country-profile">

        
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
        
    <div className="container country-page-container ">
        <div className="country-header flex">
          <div className="passport-photo">
              <div className="passport-photo-inner-container">
                <img alt="us" src={countryFlagUrlFinal} />
              </div>
          </div>
          <div className="info">
            <div className="row row1">
              <div className="global-rank flex">
                <p id="global-rank-string">Global Rank</p> 
                <div className="rank flex">
                  <p className="rank-box rank-box-global">
                    {this.state.country.rank_combined} 
                  </p>
                </div> 
              </div>
              <div className="country-name">
                {this.state.country.name}
              </div>
            </div>
            

            <div className="row row2">
              <p className="combinedScoresString">Combined Scores</p>
              <div className="combined-bar-container">
                
                <div className=" flex">
                  <ScoreBar parent_id={this.state.country.country_code} type='mobility-bar' value={this.state.country.points_mobility} />
                  <ScoreBar parent_id={this.state.country.country_code} type='investment-bar' value={this.state.country.points_investor} />
                  <ScoreBar parent_id={this.state.country.country_code} type='living-bar' value={this.state.country.points_retire} />  
                </div>  
                {this.state.country.points_combined}  
              </div>
            </div>

          </div>
        </div>

        <div className="mobility-index-container section-container">
          <div className="top">
            <h2>Mobility Index</h2>
          </div>
        </div>


       
        <div className="mega-section-container flex">
          <div className="investment-index-container section-container">
            <div className="top">
              <h2>Investment Index</h2>
            </div>
          </div>

          <div className="retirement-index-container section-container">
            <div className="top">
              <h2>Retirement Index</h2>
            </div>
         </div>
        </div>
        
        
        <div className="retirement-index-container section-container">
          <h2>Visa Requirement Map</h2> 
          <VisaRequirementsMap />

        </div>

        <div className="retirement-index-container section-container">
          <h2>Visa Requirement</h2> 
          <div className="visa-requirements-table">
            <div className="visa-requirements-table-header">
              <div className="country-column">
                Country
              </div>
              <div className="visa-type-column">
                Visa Type
              </div>
            </div>

            <VisaRequirementsRow mobility_data={this.state.mobility_data} />
           
          </div>
        </div>


        
    </div>
    </div>
)}};

export default withRouter(CountryPage);
