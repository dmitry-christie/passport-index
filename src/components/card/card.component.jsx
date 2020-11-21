import React from 'react';

import ScoreBar from '../score-bar/score-bar.component';
import TableLeft from '../table-left-side/table-left-side.component';

import './card.styles.css';

export const Card = props => (
  <div className='card-container flex'>

    <TableLeft country_code={props.country.country_code} name={props.country.name} rank_combined={props.country.rank_combined} points_mobility={props.country.points_mobility} points_investor={props.country.points_investor} points_retire={props.country.points_retire} retire_rank={props.country.retire_rank} mobility_rank={props.country.mobility_rank} investment_rank={props.country.investment_rank}/>
    
    <div className="right flex">
      <div className="combined-bar-container">
        <div className="combined-bar flex">
          <ScoreBar parent_id={props.country.country_code} type='mobility-bar' value={props.country.points_mobility} />
          <ScoreBar parent_id={props.country.country_code} type='investment-bar' value={props.country.points_investor} />
          <ScoreBar parent_id={props.country.country_code} type='living-bar' value={props.country.points_retire} />  
        </div>  
        {props.country.points_combined}  
      </div>
     
      <div className="more-details-container">
        <div className="more-details">
          <a href="#more-details"><p>View</p></a>
        </div>
      </div>
    </div>
  </div>
);
