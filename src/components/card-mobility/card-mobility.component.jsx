import React from "react";

import { Icon } from "../icon/icon.component";
import TableLeft from "../table-left-side/table-left-side.component";

export const CardMobility = (props) => (
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