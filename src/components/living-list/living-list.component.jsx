import React from 'react';

import { CardLiving } from '../card-living/card-living.component';


export const LivingList = props => (
  <div className='mobility-passport-scores'>
      <div className='score-line'>
        {props.countries.map(country => (
          <CardLiving key={country.id} country={country} />
        ))}
        </div>
      
  </div>
);
