import React, { useState, useEffect } from "react";
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
<<<<<<< HEAD

=======
>>>>>>> 7ec0169ebbb00cb8423bad034cc7f593226e9fbf
  return (
    <Router>

      <body>
        <Header />
        <Switch>
<<<<<<< HEAD
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
=======
>>>>>>> 7ec0169ebbb00cb8423bad034cc7f593226e9fbf
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
          <Questionnaire setCities={setCities} />
          </Route>
          <Route path="/provinces">
            <Province />
          </Route>
<<<<<<< HEAD
          <Route path="/provinces/:id">
            <Provinces />
          </Route> 
=======
>>>>>>> 7ec0169ebbb00cb8423bad034cc7f593226e9fbf
          <Route path="/results">
            <Results cities={cities}/>
          </Route>
        </Switch>
<<<<<<< HEAD
        <Footer />
=======
        <Footer/>
>>>>>>> 7ec0169ebbb00cb8423bad034cc7f593226e9fbf
      </body>
    </Router>

  );



}