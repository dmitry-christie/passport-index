import React from "react";
import TableLeft from '../table-left-side/table-left-side.component';
import IconInvestementGrade from '../icon-investment-grade/icon-investment-grade.component';


export const CardInvestment = (props) => (
  <div className="card-container flex">
    <TableLeft country_code={props.country.country_code} name={props.country.name} rank_combined={props.country.rank_combined} points_mobility={props.country.points_mobility} points_investor={props.country.points_investor} points_retire={props.country.points_retire} retire_rank={props.country.retire_rank} mobility_rank={props.country.mobility_rank} investment_rank={props.country.investment_rank}/>
    <div className="right flex">
      <div className="mobility-container">
        <div className="investment-columns flex">
          <div className="visa-free-countries">
            ${props.country.investment_gdp_pc}
          </div>
          <div className="visa-on-arrival">
            {props.country.investment_tax_index}%
          </div>
         <IconInvestementGrade value={props.country.investment_vcpe_tier} />
        
        </div>
      </div>

      <div className="more-details-container">
        <div className="more-details">
          <a href="#morde-details">
            <p>View</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
