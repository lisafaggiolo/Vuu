import React, { useState } from "react";
import './App.scss';
import Header from './Header';
import Province from './Province'
import Provinces from "./Provinces"
import City from './City';
import Results from './Results';
import Home from './Home';
import About from './About';
import Questionnaire from './Questionnaire';
import Footer from './Footer';
import Login from "./Login";
import Register from "./Register";

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
  /////////// DO NOT MODIFY THE ORDER OF THE ROUTES!!!!! /////////// 
  return (
    <>
    <Router>
    <Header />
      <div>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cities/:id">
            <City />
          </Route>
          <Route path="/provinces/:id">
            <Provinces />
          </Route>
          <Route path="/provinces">
            <Province />
          </Route>
          <Route path="/questions/:id">
          <Questionnaire setCities={setCities} />
          </Route> 
          <Route path="/results">
            <Results cities={cities}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
      </div>
      <Footer />
    </Router>
  </>
  );
}