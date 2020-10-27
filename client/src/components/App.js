import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";

export default function App(props) {
  const [data, setData] = useState({});
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([])
  const [users, setUsers] = useState([]);

//   // useEffect(() => {
//     Promise.all([
//       axios.get("/api/cities"),
//       axios.get("/api/provinces"),
//       axios.get("/api/users")
//     ]).then((all) => {
//       const cities = all[0].data.data;
//       const provinces = all[1].data.data;
//       const users = all[2].data;
//       console.log("cities", cities.length, "provinces", provinces.length, "users", users.length);
//       setCities(cities)
//       setProvinces(provinces)
//       setUsers(users)
//       // setState(prev => ({ ...prev, cities : all[0].data, provinces: all[1].data,  users: all[2].data}));
//     }).catch((error) => console.log(error.errno));
//   }
// );

function getCOVIDinfo(total_hospitalizations, active_cases, current_phase) {
  return axios.get('https://api.covid19tracker.ca/provinces')
}

function getWeatherAndTimeZone(weather, time_zone) {
  return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
}

function getAveragePriceOfItems() {
  return axios.get("http://www.numbeo.com/api/city_prices_raw?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getHealthSystemQuality() {
  return axios.get("http://www.numbeo.com/api/city_healthcare?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getCrimeIndex() {
  return axios.get("http://www.numbeo.com/api/city_crime?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getAirPollution() {
  return axios.get("http://www.numbeo.com/api/city_pollution?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getCanadaIndices() {
  return axios.get("http://www.numbeo.com/api/country_indices?api_key=exkod1xx5sorso&country=Canada");
}
useEffect(() => {
Promise.all([getAveragePriceOfItems(), getCrimeIndex(), getHealthSystemQuality(), getAirPollution(), getWeatherAndTimeZone()])
  .then(function (results) {
    const itemPrices = results[0];
    const crime = results[1];
    const health = results[2];
    const air = results[3];
    const weather = results[4];
    console.log(results);
    setData({itemPrices, crime, health, air, weather})
  })
  .catch(error => {
    console.log(error);
  });
}, [])  
  
  
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <main>
      <Header />
      <Footer />
    </main>
    </div> 
  )
};

import Province from './Province'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App(props) {
  // <main>
  //   <h1>Better add all that view Shenanigans here</h1>
  // </main>
  return (
    <Router>
      <div>
        <ul>
          <h1>Better add all that view Shenanigans here</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Cities() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Cities</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The cities page has its own <Switch> with more routes
          that build on the /cities URL path. You can think of the
          2nd <Route> here as an "index" page for all cities, or
          the page that is shown when no city is selected */}
      <Switch>
        <Route path={`${match.path}/:cityId`}>
          <City />
        </Route>
        <Route path={match.path}>
          <h3>Please select a city.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function City() {
  let { cityId } = useParams();
  return <h3>Requested city ID: {cityId}</h3>;
}
