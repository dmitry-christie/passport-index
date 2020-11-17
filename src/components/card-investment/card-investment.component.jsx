import React from 'react';


export const CardInvestment = props => (
  <div className='card-container flex'>
    <div className="left flex">
      <div class="country">
        <p> <img src={`https://www.globalcitizensolutions.com/passport-index/${props.country.country_code}.svg`}  alt=""/>{props.country.name} </p>
      </div>
      <div className="global-results flex">
        <div className="mobility-result flex">
          <p> {props.country.mobility_pts} </p>
          <p className="rank-box rank-box-mobility"> {props.country.mobility_rank} </p>
        </div>
        <div className="investment-result flex">
          <p> {props.country.points_investor} </p>
          <p className="rank-box rank-box-investment"> {props.country.investment_rank} </p>

        </div>
        <div className="living-result flex">
          <p> {props.country.retire_pts} </p>
          <p className="rank-box rank-box-living"> {props.country.retire_rank} </p>

        </div>
      </div>
     
    </div>

    <div className="right flex">
    

    <div className="mobility-container">
    <div className="investment-columns flex">
    <div className="visa-free-countries">${props.country.investment_gdp_pc}</div>
    <div className="visa-on-arrival">{props.country.investment_gdp_pc_tier}</div>
    <div className="visa-free-access-container">{props.country.investment_vcpe_tier}
     
    </div>
                      </div>
                      </div>
      <div className="rank">
        <p>{props.country.mobility_rank} </p>
      </div>
      <div className="more-details-container">
        <div className="more-details">
          <a href="#morde-details"><p>View</p></a>
        </div>
      </div>
    </div>
    

    
  </div>
);
