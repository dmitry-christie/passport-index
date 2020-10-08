import React from 'react';

import { Card } from '../card/card.component';

import './combined-scores.styles.css';

export const CombinedScores = props => (
  <div className='combined-passport-scores'>

    <table className="card-list">
     
      <tbody>
        {props.countries.map(country => (
          <Card key={country.id} country={country} />
        ))}
      </tbody>
    </table>
  </div>
);
