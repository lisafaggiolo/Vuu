import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
//import Footer from './Footer';
import axios from "axios";
//import Province from './Province'
import City from './City';
import Results from './Results';
import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire'
import "sass/materialize.scss";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




export default function App(props) {
  // const [cities, setCities] = useState([]);
  // const [provinces, setProvinces] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [data, setData] = useState({});
   
  return (
    <Router>
      <body>
        <Header />
        

      </body>
      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/city/:id">
          <City />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/quizz">
          <Questionnaire submitFilters={ submitFilters } />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions
  function submitFilters(userAnswers) {
    console.log(userAnswers);
    axios.get('')
    
    Router.redirect("/results")
  }

}
