import React from 'react';

import './icon-investment-grade.styles.css';

export const IconInvestmentGrade = ({ value}) => (
    <div className={` flex investment-grade-container investment-grade-value-${value}`}>
        <p>{value}</p>
    </div>
);

export default IconInvestmentGrade;