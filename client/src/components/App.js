import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
import Province from './Province'
import Provinces from "./Provinces"
import City from './City';
import Cities from './Cities';
import Results from './Results';
import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire';
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




export default function App(props) {
  
  const [cities, setCities] = useState([]);

  

  return (
    <Router>

         <body>
      <Header />
        <Switch>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cities/:id">
            <City />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/quiz">
            <Questionnaire />
          </Route>
          <Route path="/questions/:id">
          <Questionnaire setCities={setCities} />
          </Route>
          <Route path="/provinces/:id">
            <Provinces />
          </Route> 
          <Route path="/provinces">
            <Province />
          </Route>
          <Route path="/provinces">
            <Provinces />
          </Route>
          <Route path="/results">
            <Results cities={cities}/>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </body>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions


}
