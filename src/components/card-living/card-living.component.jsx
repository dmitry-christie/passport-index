import React from "react";

import { Icon } from "../icon/icon.component";
import TableLeft from "../table-left-side/table-left-side.component";

import IconTier from "../icon-tier/icon-tier.component";


export const CardLiving = (props) => (
  <div className="card-container flex">
    <TableLeft
      country_code={props.country.country_code}
      name={props.country.name}
      rank_combined={props.country.rank_combined}
      points_mobility={props.country.points_mobility}
      points_investor={props.country.points_investor}
      points_retire={props.country.points_retire}
      retire_rank={props.country.retire_rank}
      mobility_rank={props.country.mobility_rank}
      investment_rank={props.country.investment_rank}
    />

    <div className="right flex">
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