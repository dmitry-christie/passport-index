import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

import HomePage from './pages/home/home.component';
import CountryPage from './pages/country/country.component';

import './index.css';



ReactDOM.render(
    <Router>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/country/:country' component={CountryPage}/>
    </Switch>
    </Router>, 
document.getElementById('root')
);
