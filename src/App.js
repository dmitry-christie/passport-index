

import React, { useEffect, useState } from 'react';
import './App.css';
import CitizenshipsTable from './components/CitizenshipsTable';
import withListLoading from './components/withListLoading';
import ProfileButton from './components/ProfileButton'

function App() {
  const ListLoading = withListLoading(CitizenshipsTable);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    selectedProfile: null,
    searchField: null,
  });

  useEffect(() => {
    setAppState({ loading: true, selectedProfile: null, });
    const apiUrl = `https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries, selectedProfile: true, });
      });
  }, [setAppState]);
  return (
    <div className='App container'>
      <div className='header'>
        <a href='https://google.com'>
          <h1>Global Passport Index 2020</h1>
        </a>
        <div className='buttons-container flex'>
        <ProfileButton selected="false" profile="traveller"/> 
        <ProfileButton selected="false" profile="investor" /> 
        <ProfileButton selected="false" profile="expat"/> 
        </div>
        <div className='search-field'>
          <input type='search' placeholder='search countries' onChange={e => console.log(e.target.value)} />
        </div>
      </div>
      <div className='container'>
        <h1>Global Passport Index </h1>
      </div>
      <div className='country-container'>
        <ListLoading isLoading={appState.loading} countries={appState.countries} />
      </div>
      
    </div>
  );
}

export default App;