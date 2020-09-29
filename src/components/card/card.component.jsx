import React from 'react';

import './card.styles.css';

export const Card = props => (
  <tr className='card-container'>
    
    <td><h2> {props.country.name} </h2></td>
    <td><p> Visa free: {props.country.visa_free} </p></td>
    <td><p> Visa free: {props.country.visa_arrival} </p></td>
    <td><p> GDP per capita: {props.country.visa_arrival} </p></td>
  </tr>
);
