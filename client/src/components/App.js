import React, { useState, useEffect } from "react";
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";
import Province from './Province'
import City from './City';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire'


export default function App(props) {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
   


  return (
    <Router>
      <div>
        <ul>
          <Header />
        </ul>

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
        </Switch>
      </div>
    </Router>

  );

  // set up a view/react Route for the quizz
  // pass submitFilter via prop, Questions
  function submitFilters(userAnswers) {
    axios.post()
    
    Router.redirect
  }

}
