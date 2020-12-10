import React from 'react';

import './icon-tier.styles.css';

export const IconTier = ({ type, value}) => (
    <div className={` flex justify-center icon-tier-${type} icon-tier-${value}`}>
         <div> </div>
    </div>
);

export default IconTier;