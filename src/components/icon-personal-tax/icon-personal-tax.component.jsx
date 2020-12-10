import React from 'react';

import './icon-personal-tax.styles.css';

export const IconPersonalTax = ({ value}) => (
    <div className="flex personal-tax-container">
        <div className={`personal-tax-value-${value}`}></div>
    </div>
);

export default IconPersonalTax;