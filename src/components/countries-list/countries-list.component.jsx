import React from 'react';

import { CountryCard } from '../country-card/country-card.component';


export const CountriesList = props => (
  <div className='global-passport-scores'>
      <div className='score-line'>
        {props.countries.map(country => (
          <CountryCard key={country.id} country={country} selectedmode={props.selectedmode} />
        ))}
        </div>
      
  </div>
);
