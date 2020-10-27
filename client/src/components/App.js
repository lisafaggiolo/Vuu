import React from 'react';
import './App.css';
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
