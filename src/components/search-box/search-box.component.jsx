import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (
 
<div className="search-container"> 
  <form action="" class="search-bar">
    <input type="search" name="search" pattern=".*\S.*" required 
    placeholder='search countries'
    onChange={props.onSearchChange}/> 
    <button class="search-btn" type="submit">
      <span>Search</span>
    </button>
  </form>
</div>
 
);
