import React from 'react';

import ScoreBar from '../score-bar/score-bar.component';
import TableLeft from '../table-left-side/table-left-side.component';

import MoreDetailsButton  from '../more-details-button/more-details-button.component';
import IconTier from "../icon-tier/icon-tier.component";
import IconInvestementGrade from '../icon-investment-grade/icon-investment-grade.component';
import IconPersonalTax from '../icon-personal-tax/icon-personal-tax.component';

import { Icon } from "../icon/icon.component";


//import './card.styles.css';

export const CountryCard = props => (
  <div className='card-container flex'>

    <TableLeft country_code={props.country.country_code} name={props.country.name} rank_combined={props.country.rank_combined} points_mobility={props.country.points_mobility} points_investor={props.country.points_investor} points_retire={props.country.points_retire} retire_rank={props.country.retire_rank} mobility_rank={props.country.mobility_rank} investment_rank={props.country.investment_rank}/>
    
    <div className="right flex">
    {(() => {
                switch (props.selectedmode) {
                  case "mobility":
                    return (
                      <div className="mobility-container">
                        <div className="flex">
                          <div className="visa-free-countries">
                            {props.country.mobility_vfree}
                          </div>
                          <div className="visa-on-arrival">{props.country.mobility_voa}</div>
                          <div className="visa-free-access-container">
                            <div className="flags-visa-free visa-free-value-container flex">
                              <div className="eu">
                                <Icon type="true-false" value={props.country.visafree_eu} />
                              </div>
                              <div className="us">
                                <Icon type="true-false" value={props.country.visafree_us} />
                              </div>
                              <div className="gb">
                                <Icon type="true-false" value={props.country.visafree_gb} />
                              </div>
                              <div className="jp">
                                <Icon type="true-false" value={props.country.visafree_jp} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    break;
                  case "investment":
                    return (
                      <div className="mobility-container">
                        <div className="investment-columns flex">
                          <div className="visa-free-countries">
                            ${props.country.investment_gdp_pc}
                          </div>
                          <IconPersonalTax value={props.country.investment_tax_display} />
                          <IconInvestementGrade value={props.country.investment_vcpe_display} />
                        
                        </div>
                      </div>
                    );
                    break;
                  case "retirement":
                    return (
                      <div className="mobility-container living-card-container"> 
                          <div className="investment-columns flex">
                            <div className="visa-free-countries">
                              <IconTier type="col" value={props.country.retire_col_tier} />
                            </div>
                            <div className="visa-on-arrival">
                              <IconTier type="hdi" value={props.country.retire_hdi_tier} />
                            </div>
                            <div className="visa-free-access-container">
                              <IconTier type="freedom" value={props.country.retire_freedom_tier} />
                            </div>
                        </div>
                    </div>
                    );
                    break;
                  default:
                    return (
                      <div className="combined-bar-container">
                      <div className="combined-bar flex">
                        <ScoreBar parent_id={props.country.country_code} type='mobility-bar' value={props.country.points_mobility} />
                        <ScoreBar parent_id={props.country.country_code} type='investment-bar' value={props.country.points_investor} />
                        <ScoreBar parent_id={props.country.country_code} type='living-bar' value={props.country.points_retire} />  
                      </div>  
                      {props.country.points_combined} pts.
                    </div>
                    );
                }
              })()}
    
     
      <div className="more-details-container">
        <MoreDetailsButton country={props.country} />
      </div>
    </div>
  </div>
);
