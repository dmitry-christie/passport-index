import React from 'react';

import { CardInvestment } from '../card-investment/card-investment.component';


export const InvestementList = props => (
  <div className='mobility-passport-scores'>
      <div className='score-line'>
        {props.countries.map(country => (
          <CardInvestment key={country.id} country={country} />
        ))}
        </div>
      
  </div>
);

export default InvestementList;