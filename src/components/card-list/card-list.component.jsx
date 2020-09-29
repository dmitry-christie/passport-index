import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <table className="card-list">
  <th>Country Name</th>
  <th>Visa Free</th>
  <th>Visa Free</th>
  <th>GDP</th>
    {props.countries.map(country => (
      <Card key={country.id} country={country} />
    ))}
  </table>
);
