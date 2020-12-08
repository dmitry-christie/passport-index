import React, { Component } from "react";
import logo from "../../assets/img/passport-index-logo.png";
import footer_logo from "../../assets/img/footer-logo.png";

import "./country.styles.css";
import VisaRequirementsMap from "../../components/visa-requirements/visa-requirements.component";

import { withRouter } from "react-router";

import ScoreBar from "../../components/score-bar/score-bar.component";
import HelpTip from "../../components/help-tip/help-tip.component";

import { Icon } from "../../components/icon/icon.component";

class CountryPage extends Component {
  componentDidMount() {
    var countryDataUrlBase =
      "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/countries/";
    const countryCode = this.props.match.params.country;
    var countryDataUrl = countryDataUrlBase.concat(countryCode);

    fetch(countryDataUrl)
      .then((response) => response.json())
      /*.then(response => this.setState({countries: response.items}))*/
      .then((response) => this.setState({ country: response.items[0] }));
    /*.then(items => this.setState({ countries: items }).catch(error => console.error(error))); */

    
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
              <a href="/">
                <img src={logo} alt="" />
              </a>
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
                <div className="country-name">{this.state.country.name}</div>
              </div>

              <div className="row row2">
                <p className="combinedScoresString">Combined Scores</p>
                <div className="combined-bar-container">
                  <div className=" flex">
                    <ScoreBar
                      parent_id={this.state.country.country_code}
                      type="mobility-bar"
                      value={this.state.country.points_mobility}
                    />
                    <ScoreBar
                      parent_id={this.state.country.country_code}
                      type="investment-bar"
                      value={this.state.country.points_investor}
                    />
                    <ScoreBar
                      parent_id={this.state.country.country_code}
                      type="living-bar"
                      value={this.state.country.points_retire}
                    />
                  </div>
                  {this.state.country.points_combined}
                </div>
              </div>
            </div>
          </div>

          <div className="mobility-index-container section-container">
            <div className="top">
              <div className="header flex">
                <h2>Mobility Index</h2>
                <HelpTip text="Lorem Ipsum" />
                <div className="country-points-container  country-points-container-m ">
                  {this.state.country.mobility_pts} pts.
                </div>
              </div>

              <div className="country-table mobility-index-table">
                <div className="country-table-header flex">
                  <div className="country-table-header-item">Rank</div>
                  <div className="country-table-header-item">
                    Visa Free Countries
                  </div>
                  <div className="country-table-header-item">
                    Visa On Arrival
                  </div>

                  <div className="country-table-header-item">Visa Required</div>
                  <div className="visa-free-access-to-th">
                    <div className="visa-free-access-to">
                      <div className="text">Visa Free Access To</div>
                      <div className="countries flex">
                        <div>EU</div>
                        <div>US</div>
                        <div>UK</div>
                        <div>JP</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="country-table-row flex">
                  <div className="country-table-header-item">
                    {this.state.country.mobility_rank}{" "}
                  </div>
                  <div className="country-table-header-item">
                    {this.state.country.mobility_vfree}
                  </div>
                  <div className="country-table-header-item">
                    {this.state.country.mobility_voa}
                  </div>
                  <div className="country-table-header-item">
                    {this.state.country.mobility_vr}
                  </div>

                  <div className="visa-free-access-to-th">
                    <div className="countries flex">
                      <div>
                        <Icon
                          type="true-false"
                          value={this.state.country.visafree_eu}
                        />
                      </div>
                      <div>
                        <Icon
                          type="true-false"
                          value={this.state.country.visafree_us}
                        />
                      </div>
                      <div>
                        <Icon
                          type="true-false"
                          value={this.state.country.visafree_gb}
                        />
                      </div>
                      <div>
                        <Icon
                          type="true-false"
                          value={this.state.country.visafree_jp}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mega-section-container flex">
            <div className="investment-index-container section-container">
              <div className="header flex">
                <h2>Investment Index</h2>
                <HelpTip text="Investment Index Ipsum" />
                <div className="country-points-container  country-points-container-i ">
                  {this.state.country.investment_pts} pts.
                </div>
              </div>
              <div className="country-table mobility-index-table investment-index-table">
                <div className="country-table-header flex">
                  <div className="country-table-header-item">Rank</div>
                  <div className="country-table-header-item">GDP per Cap</div>
                  <div className="country-table-header-item">Personal Tax</div>
                  <div className="country-table-header-item">
                    Investment Grade
                  </div>
                </div>
              </div>
              <div className="country-table-row flex">
                <div className="country-table-header-item">
                  {this.state.country.investment_rank}
                </div>
                <div className="country-table-header-item">
                  ${this.state.country.investment_gdp_pc}
                </div>
                <div className="country-table-header-item">
                  {this.state.country.investment_tax_index}
                </div>
                <div className="country-table-header-item">
                  {this.state.country.investment_vcpe_tier}
                </div>
              </div>
            </div>

            <div className="retirement-index-container section-container">
              <div className="header flex">
                <h2>Retirement Index</h2>
                <HelpTip text="Retirement Index Ipsum" />
                <div className="country-points-container  country-points-container-r">
                  {this.state.country.retire_pts} pts.
                </div>
              </div>
              <div className="country-table mobility-index-table investment-index-table">
                <div className="country-table-header flex">
                  <div className="country-table-header-item">Rank</div>
                  <div className="country-table-header-item">Cost of Living</div>
                  <div className="country-table-header-item">HDI</div>
                  <div className="country-table-header-item">
                    Freedom
                  </div>
                </div>
              </div>
              <div className="country-table-row flex">
                <div className="country-table-header-item">
                  {this.state.country.retire_rank}
                </div>
                <div className="country-table-header-item">
                  {this.state.country.retire_col_tier}
                </div>
                <div className="country-table-header-item">
                  {this.state.country.retire_hdi_tier}
                </div>
                <div className="country-table-header-item">
                  {this.state.country.retire_freedom_tier}
                </div>
              </div>
            </div>
          </div>

          <VisaRequirementsMap
            country_code={countryCode}
            vf={this.state.country.mobility_vfree}
            voa={this.state.country.mobility_voa}
            vr={this.state.country.mobility_vr}
          />
        </div>
        <footer className="footer-country">
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

export default withRouter(CountryPage);
