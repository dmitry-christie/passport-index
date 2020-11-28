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

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const mobilityData = "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/mobility_data/all/ES";


const getCountryColor = code => {
    const map = {
        VR: "#da1939",
        VF: "green",
        90: "orange",
        180: "orange",
        VOA: "yellow",
        '-1': "blue",
        'ETA': "grey",
        15: "orange"

    }
    return map[code];
}
const VisaRequirementsMap = (mobility_data) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/mobility_data/all/ES")
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
              const value = data[geo.properties.ISO_A2.toLowerCase()];
             

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
  );
};

export default VisaRequirementsMap;