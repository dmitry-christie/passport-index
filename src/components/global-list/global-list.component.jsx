import React from 'react';

import { Card } from '../card/card.component';

import './global-list.styles.css';

export const GlobalList = props => (
  <div className='global-passport-scores'>
      <div className='score-line'>
        {props.countries.map(country => (
          <Card key={country.id} country={country} />
        ))}
        </div>
      
  </div>
);
