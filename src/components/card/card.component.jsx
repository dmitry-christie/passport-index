import React from 'react';

import './card.styles.css';

export const Card = props => (
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
      <div className="combined-bar-container">
        <div clasName="combined-bar">
          {props.country.visa_free} 
        </div>   
      </div>
      <div className="rank">
        <p>{props.country.rank_combined} </p>
      </div>
      <div className="more-details-container">
        <div className="more-details">
          <a href="#morde-details"><p>View</p></a>
        </div>
      </div>
    </div>
    

    
  </div>
);
