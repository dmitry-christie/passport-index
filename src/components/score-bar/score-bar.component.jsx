import React from 'react';

import './score-bar.styles.css';


export const ScoreBar = ({ type, value, parent_id }) => (
    <div id={`${parent_id}`} className={`bar ${type}`} style={{width: value / 2 + 'px'}}>
        
    </div>
);

export default ScoreBar;

