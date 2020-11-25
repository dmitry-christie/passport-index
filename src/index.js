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

import './index.css';

const CountryPage = () => (
    <div>
        <h1> Countries page</h1>
    </div>
);

ReactDOM.render(
    <Router>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/country/:country_code' component={CountryPage}/>
    </Switch>
    </Router>, 
document.getElementById('root')
);
