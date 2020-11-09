import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  
    <table className="card-list">

      <tbody>
        {props.countries.map(country => (
          <Card key={country.id} country={country} />
        ))}
      </tbody>
    </table>
  
);
