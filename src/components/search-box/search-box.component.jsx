import React from 'react';

import './search-box.styles.css';

import searchIcon from '../../assets/img/search-icon.png';


export const SearchBox = props => (
 
<div className="search-container"> 
  <div className="search-box-container flex">
    <input type="search" name="search" pattern=".*\S.*" required 
    placeholder='search countries'
    onChange={props.onSearchChange}/> 
    <div className="icon-container flex">
      <img src={searchIcon} alt="search icon" />
    </div>
  </div>

 
</div>
 
);
