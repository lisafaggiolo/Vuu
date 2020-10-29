import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";
import Province from './Province'
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
  const [provinces, setProvinces] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
   
  function getCOVIDinfo() {
    return axios.get('https://api.covid19tracker.ca/provinces')
  }

//not working even with API key 
  function getWeatherAndTimeZone(city) {
    return axios({
      "method":"GET",
      "url":"https://community-open-weather-map.p.rapidapi.com/weather",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key":"10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866",
      "useQueryString":true
      },"params":{
      "lat":"0",
      "lon":"0",
      "callback":"test",
      "id":"2172797",
      "lang":"null",
      "units":"%22metric%22 or %22imperial%22",
      "mode":"xml%2C html",
      "q":`${city}`
      }
      })
  }
 //cors issue 
  function getAveragePriceOfItems(city) {
    return axios.get(`http://www.numbeo.com/api/city_prices_raw?api_key=exkod1xx5sorso&query=${city},Canada`)
  }
 //cors issue
  function getHealthSystemQuality(city) {
    return axios.get(`http://www.numbeo.com/api/city_healthcare?api_key=exkod1xx5sorso&query=${city}, Canada`)
  }
 //cors  
  function getCrimeIndex(city) {
    return axios.get(`http://www.numbeo.com/api/city_crime?api_key=exkod1xx5sorso&query=${city}, Canada`)
  }
 //cors 
  function getAirPollution(city) {
    return axios.get(`http://www.numbeo.com/api/city_pollution?api_key=exkod1xx5sorso&query=${city}, Canada`)
  }
  
  function getCanadaIndices() {
    return axios.get("http://www.numbeo.com/api/country_indices?api_key=exkod1xx5sorso&country=Canada");
  }
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/cities"),
      axios.get("/api/provinces"),
      axios.get("/api/users"),
      getCOVIDinfo(),
      getAveragePriceOfItems("Montreal"),
      getWeatherAndTimeZone("Montreal"),
      getHealthSystemQuality("Montreal"),
      getCrimeIndex("Montreal"),
      getAirPollution("Montreal"),
      getCanadaIndices()
    ]).then((all) => {
      
      const cities = all[0].data.data;
      const provinces = all[1].data.data;
      const users = all[2].data;
      console.log(all);
      console.log("cities", cities.length, "provinces", provinces.length, "users", users.length);
      setCities(cities)
      setProvinces(provinces)
      setUsers(users)

      const COVID = all[3].data;
      const itemPrices = all[4].data;
      const weather = all[5].data;
      const health = all[6].data;
      const crime = all[7].data;
      const air = all[8].data;
      const stats = all[9].data;
      setData({COVID, itemPrices, crime, health, air, weather, stats}) 
    }).catch((error) => console.log(error));
  }, []
);

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
