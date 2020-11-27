import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


export const MoreDetailsButton = props => (

<div className="more-details">
    <Link
    to={
        {pathname: `country/${props.country.country_code}`,
        state: { countryCode: props.country.country_code }
    }}

    
    >
    <p>View</p>
    </Link>
        
</div>
);

export default MoreDetailsButton;