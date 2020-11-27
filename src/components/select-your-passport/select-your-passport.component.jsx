import React, { Component } from "react";

import "./select-your-passport.styles.css";

import TableLeft from "../table-left-side/table-left-side.component";

import Select from "react-select";



class SelectYourPassport extends Component {
  constructor() {
    super();

    this.state = {
      passportSelected: "",
      countryData: "",
    };
  }

  handleChangeSelect = passportSelected => {
    let currentCountryCode = passportSelected.value;
    let countryData = this.props.countries.find(o => o.country_code === currentCountryCode);
    console.log(countryData);
    this.setState(
      { passportSelected, countryData }
    );

   
 

  };

  resetSelectedPassport = passportSelected => {
    this.setState(
        { passportSelected: 0,  }
      );
  }





  render() {
    var countryCodeName = [];

    this.props.countries.forEach((element) =>
      countryCodeName.push({
        label: element.name,
        value: element.country_code,
      })
    );




   

    countryCodeName.sort(function(a, b){
        var x = a.label.toLowerCase();
        var y = b.label.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

    
    
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "red" : "blue",
        padding: 10,
      }),
      control: () => ({
        width: 250,
        display: "flex",
        margin: " 0px 0px 0px 1em",
        color: "white",
        background: "#222c39",
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return {
          ...provided,
          opacity,
          transition,
        };
      },
    };



    const { passportSelected } = this.state;
    let countryData = 0;



    return (
      <div className="selectYourPassport">
        {this.state.passportSelected ? (
          <div className="SelectYourPassport-Left flex">
            <p className="close-button">
              <a href="#close" onClick={() => this.resetSelectedPassport()}> x </a>
            </p>
            <TableLeft  country_code={this.state.countryData.country_code} name={this.state.countryData.name} rank_combined={this.state.countryData.rank_combined} points_mobility={this.state.countryData.points_mobility} points_investor={this.state.countryData.points_investor} points_retire={this.state.countryData.points_retire} retire_rank={this.state.countryData.retire_rank} mobility_rank={this.state.countryData.mobility_rank} investment_rank={this.state.countryData.investment_rank}/>
          </div>
        ) : (
          <div className="passport-select-container">
            <Select 
            value={passportSelected}

            styles={customStyles} 
            options={countryCodeName} 
            theme={theme => ({
            ...theme,
            borderRadius: 10,
            colors: {
                ...theme.colors,
                primary25: '#da1939',
                primary: '#1e57a4',
                
            },
            })} 
            onChange={this.handleChangeSelect}

            />
          </div>
        )}
      </div>
    );
  }
}

export default SelectYourPassport;
