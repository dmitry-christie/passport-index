import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import {countries} from 'country-data';


import './visa-requirements.styles.css'

const geoUrl =
  "https://raw.githubusercontent.com/dmitry-christie/passport-index/master/public/CSV/master.json";
// update the ISO2 codes without _





const getCountryColor = code => {
    const map = {
        VR: "#da1939",
        VF: "#6cad7b",
        VOA: "#faae35",
        '-1': "#469cd2",
        ETA : "grey",
        90: "#17a9bc",
        120: "#17a9bc",
        180: "#17a9bc",
        360: "#17a9bc",
        21: "#17a9bc",
        15: "#17a9bc",
        14: "#17a9bc",
        30: "#17a9bc",
        60: "#17a9bc"


    }
    return map[code];
}


const getVisaRequirementString = code => {
  const strings = {
    VR: "Visa Required",
    VF: "Visa Free",
    VOA: "Visa On Arrival",
    '-1': "Home Country",
    ETA : "eVisa",
    90: "90 days",
    120: "120 days",
    180: "180 days",
    360: "360 days",
    21: "21 days",
    15: "15 days",
    14: "14 days",
    30: "30 days",
    60: "60 days"
      


  }

  if (strings[code]) {
    return strings[code];

  } else {
    return 'not found';
  }
}
const VisaRequirementsMap = (props) => {
const [data, setData] = useState([]);

const mobilityDataBaseUrl = "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/mobility_data/all/";
var mobiliDataFullUrl = mobilityDataBaseUrl.concat(props.country_code);

  useEffect(() => {
    fetch(mobiliDataFullUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
         delete jsonData.id_1;
         delete jsonData.passport;
         delete jsonData.link;
         delete jsonData.links;

        setData(jsonData);
    });
  }, []);

  return (
    <div className="visa-requirements-mega-section">
      <div className="retirement-index-container section-container">
          <h2>Visa Requirement Map</h2> 
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
     
      {data.es && (
        <Geographies geography={geoUrl}>
          
            
          {({ geographies }) => {
            return geographies.map((geo) => {
              //const d = data.mobility_data.find((s) =>  === geo.properties.ISO_A3);
              var value = 0;
              if(geo.properties.ISO_A2) {
               value = data[geo.properties.ISO_A2.toLowerCase()];
              }
             

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountryColor(value)}
                />
              );
            })
        }
          }
        </Geographies>
      )}
    </ComposableMap>
    <table className="country-simple-table">
      <tr className="country-simple-table-header">
      <th>
        Visa Free
      </th>
      <th>
        Visa on Arrival
      </th>
    
      <th>
       Visa Required
      </th>
      </tr>
      <tr className="country-simple-table-body">
        <td>
         <div className="map-number-container map-number-container-vf">{props.vf}</div>
        </td>
        <td>
          <div className="map-number-container map-number-container-voa">{props.voa}</div>

        </td>
       
        <td>
          <div className="map-number-container map-number-container-vr">{props.vr}</div>
        </td>

      </tr>
    </table>
    </div>

<div className="retirement-index-container section-container">
<h2>Visa Requirements</h2> 
<table className="visa-requirements-table">
  <tr className="visa-requirements-table-header">
    <th className="country-column">
      Country
    </th>
    <th className="visa-type-column">
      Visa Type
    </th>
  </tr>
  {Object.entries(data).map(([key, value]) => (
    <tr key={key}>
        <td className="country-column-value"> 
          <div className="country-column-value-div flex">
          <img className="country-page-flag"
          src={`https://www.globalcitizensolutions.com/passport-index/${key.replace('_', '').toUpperCase()}.svg`} alt="flag"/>
          <span>{countries[key.replace('_', '').toUpperCase()].name}</span>
          </div>
          </td>

       
        
        <td className={`visa-type-string-${value} `}>{getVisaRequirementString(value)}</td>
    </tr>
))}

 
</table>
</div>
</div>
  );
};

export default VisaRequirementsMap;