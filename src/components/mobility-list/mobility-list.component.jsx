import React from 'react';

import { CardMobility } from '../card-mobility/card-mobility.component';


export const MobilityList = props => (
  <div className='mobility-passport-scores'>
      <div className='score-line'>
        {props.countries.map(country => (
          <CardMobility key={country.id} country={country} />
        ))}
        </div>
      
  </div>
);
