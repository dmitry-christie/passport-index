import React from 'react';

import ScoreBar from '../score-bar/score-bar.component';

import './card.styles.css';

export const Card = props => (
  <div className='card-container flex'>
    <div className="left flex">
      <div class="country">
        <p> <img src={`https://www.globalcitizensolutions.com/passport-index/${props.country.country_code}.svg`}  alt=""/>{props.country.name} </p>
      </div>
      <div className="global-results flex">
        <div className="mobility-result flex">
          <p> {props.country.points_mobility} </p>
          <p className="rank-box rank-box-mobility"> {props.country.mobility_rank} </p>
        </div>
        <div className="investment-result flex">
          <p> {props.country.points_investor} </p>
          <p className="rank-box rank-box-investment"> {props.country.investment_rank} </p>
        </div>
        <div className="living-result flex">
          <p> {props.country.points_retire} </p>
          <p className="rank-box rank-box-living"> {props.country.retire_rank} </p>
        </div>
      </div>
    </div>
    <div className="right flex">
      <div className="combined-bar-container">
        <div className="combined-bar flex">
          <ScoreBar parent_id={props.country.country_code} type='mobility-bar' value={props.country.points_mobility} />
          <ScoreBar parent_id={props.country.country_code} type='investment-bar' value={props.country.points_investor} />
          <ScoreBar parent_id={props.country.country_code} type='living-bar' value={props.country.points_retire} />  
        </div>  
        {props.country.points_combined}  
      </div>
      <div className="rank">
        <p>{props.country.rank_combined} </p>
      </div>
      <div className="more-details-container">
        <div className="more-details">
          <a href="#more-details"><p>View</p></a>
        </div>
      </div>
    </div>
  </div>
);
