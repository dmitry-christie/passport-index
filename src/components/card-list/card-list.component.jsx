import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  
    <table className="card-list">
      <thead>
        <tr>
         
          <th>Visa Free</th>
          <th>Visa Free</th>
          <th>GDP</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map(country => (
          <Card key={country.id} country={country} />
        ))}
      </tbody>
    </table>
  
);
