import React from 'react';

import './icon.styles.css';

export const Icon = ({ type, value}) => (
  <div className={`icon icon-${type} icon-${type}-${value}`}>
    
  </div>
);

export default Icon;