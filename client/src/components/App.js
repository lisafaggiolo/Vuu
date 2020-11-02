import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
// import axios from "axios";
import Province from './Province'
import Provinces from "./Provinces"
import City from './City';
import Results from './Results';
import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function App(props) { 
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cities/:id">
            <City />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/questions/:id">
          <Questionnaire />
          </Route>
          <Route path="/provinces/:id">
            <Provinces />
          </Route> 
          <Route path="/provinces">
            <Province />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions


}
