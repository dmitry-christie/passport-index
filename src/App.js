

import React, { useEffect, useState } from 'react';
import './App.css';
import CitizenshipsTable from './components/CitizenshipsTable';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(CitizenshipsTable);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://mp2mjaut1pu90gf-passportindex.adb.eu-zurich-1.oraclecloudapps.com/ords/passportindex/country_data/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries.items });
      });
  }, [setAppState]);
  return (
    <div className='App'>
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