import React, {Component} from 'react';

import './select-your-passport.styles.css';

import TableLeft from '../table-left-side/table-left-side.component';

class SelectYourPassport extends Component {
    constructor() {
      super();
  
      this.state = {
        passportSelected: "",
      };
    }
    render() {
        return(<div className="selectYourPassport">

    {this.state.passportSelected ? (
        <div className="SelectYourPassport-Left">
            <p className="close-button"><a href="#close">x</a></p>
            <TableLeft />
        </div>
      ) : (
        <select className="passport-selector"> 
        <option>Select your passport</option>
        </select>
      )}
        
       
    </div>
)}};

export default SelectYourPassport;