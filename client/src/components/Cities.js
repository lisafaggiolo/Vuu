import React from 'react'
import { 
  BrowserRouter as Router,
  useRouteMatch, 
  Route,
  Switch,
  Link,
  useParams
} from "react-router-dom";
import "./App.scss";

function Cities() {
  let match = useRouteMatch();

  return (
    <main>
      
      <div className="banner" >
        <div className="card transparent z-depth-5">
          <div className="container">
            <br/>
            <br/>
            <div className="caption left-align">
              
              <div className="banner-text">
                <h3 className="header left white-text">Quebec</h3>
                <div className="row left white-text">
                  <h5 >"La Belle Province"</h5>
                  <p >As September draws to a close, the forests don fiery hues as the leaves turn their characteristic colours. Vines and orchards are laden with fruit, while clouds of snow geese fill the skies in a spectacular pre-Christmas pageant. With its dry, crisp air and brilliant blue skies, fall is the perfect time for long rambles through the hills and leisurely bike rides along country roads.</p>
                </div>
              </div>

            </div>  
            <br/>
            <br/>
          </div>
        </div>
        
      </div>

      <div className="container">
        <h2 className="center">Cities</h2>

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
      </div>
      <Switch>
        <Route path={`${match.path}/:cityId`}>
          <City />
        </Route>
        <Route path={match.path}>
          <h5>Please select a city.</h5>
        </Route>
      </Switch>
    </main>
  );
}

function City() {
  let { cityId } = useParams();
  return <h3>Requested city ID: {cityId}</h3>;
}

export default Cities;