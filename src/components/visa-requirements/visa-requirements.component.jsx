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
        'ETA': "grey",
        90: "#17a9bc",
        180: "#17a9bc",
        360: "#17a9bc",
        21: "#17a9bc",
        15: "#17a9bc",
        14: "#17a9bc",
        30: "#17a9bc"


    }
    return map[code];
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
        console.log(jsonData, 'data')

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
        <td className="country-column-value">{key}</td>
        <td>{value}</td>
    </tr>
))}

 
</table>
</div>
</div>
  );
};

export default VisaRequirementsMap;