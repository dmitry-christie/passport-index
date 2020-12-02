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
  "./master.json";

const mobilityData = "https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/mobility_data/all/ES";


const getCountryColor = code => {
    const map = {
        VR: "#da1939",
        VF: "#6cad7b",
        90: "#17a9bc",
        180: "#17a9bc",
        VOA: "#faae35",
        '-1': "#469cd2",
        'ETA': "grey",
        15: "#17a9bc",
        30: "#17a9bc"

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