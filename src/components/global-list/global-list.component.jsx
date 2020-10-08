import React from 'react';

import { Card } from '../card/card.component';

import './global-list.styles.css';

export const GlobalList = props => (
  <div className='global-passport-scores'>
    <p>Global Passport Scores</p>
    <table className="card-list">
      <thead>
        <tr>
          <th>Country</th>
          <th>Mobility</th>
          <th>Investment</th>
          <th>Living</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map(country => (
          <Card key={country.id} country={country} />
        ))}
      </tbody>
    </table>
  </div>
);
