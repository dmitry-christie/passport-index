import React from "react";

export const TableLeft = ({ country_code, name, rank_combined, points_mobility, points_investor, points_retire, retire_rank, mobility_rank, investment_rank }) => (
  <div className="left flex">
    <div class="country">
      <p>  
        <img
          src={`https://www.globalcitizensolutions.com/passport-index/${country_code}.svg`}
          alt={`${name} flag`}
        />
        {name} 
      </p>
    </div>
    <div className="rank flex">
      <p className="rank-box rank-box-global">
        #{rank_combined} 
      </p>
    </div>
    <div className="global-results flex">
      <div className="mobility-result flex">
        <p className="pts"> {points_mobility}pts</p>
        <p className="rank-box rank-box-mobility">    
          #{mobility_rank} 
        </p>
      </div>
      <div className="investment-result flex">
        <p className="pts"> {points_investor}pts</p>
        <p className="rank-box rank-box-investment"> 
          #{investment_rank} 
        </p>
      </div>
      <div className="living-result flex">
        <p className="pts"> {points_retire}pts</p>
        <p className="rank-box rank-box-living">          
          #{retire_rank} 
        </p>
      </div>
    </div>
  </div>
);

export default TableLeft;