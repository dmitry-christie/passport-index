import React from 'react';
import './CitizenshipsTable.css';




const CitizenshipTable = (props) => {
  
  const { countries } = props;
  if (!countries || countries.length === 0) return <p>No repos, sorry</p>;
  return (
    <table classname='citizenships_table'>
      <tr>
        <th>Country</th>
        <th>Visa Free</th>
        <th>Visa Arrival</th>
        <th>E visa</th>
        <th>GDP per capita</th>
        <th>Taxation</th>
        <th>VCPE index</th>
        <th>Cost of Living</th>
        <th>HDI</th>
        <th>Freedom</th>

      </tr>
      {countries.map((country) => {
        return (
          
          <tr key={country.id} className='list'>
            <td className='country_code'>{country.country_code} </td>
            <td className='repo-description'>{country.visa_free}</td>
            <td className='visa_arrival'>{country.visa_arrival}</td>
            <td className='e_visa'>{country.e_visa}</td>
            <td className='gdp_per_cap'>$ {country.gdp_per_cap}</td>
            <td className='taxation'>{country.taxation}%</td>
            <td className='vcpe_index'>{country.vcpe_index}</td>
            <td className='cost_of_living'>{country.cost_of_living}</td>
            <td className='hdi'>{country.hdi}</td>
            <td className='freedom'>{country.freedom}</td>

          </tr>
        );
      })}
    </table>
  );
};

export default CitizenshipTable;