// import React from 'react'
// import { 
//   useRouteMatch, 
//   Route,
//   Switch,
//   Link,
//   useParams
// } from "react-router-dom";

// function Cities() {
//   let match = useRouteMatch();

//   return (
//     <div class="container">
//       <h2 class="center">Cities</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The cities page has its own <Switch> with more routes
//           that build on the /cities URL path. You can think of the
//           2nd <Route> here as an "index" page for all cities, or
//           the page that is shown when no city is selected */}
//       <Switch>
//         <Route path={`${match.path}/:cityId`}>
//           <City />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a city.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function City() {
//   let { cityId } = useParams();
//   return <h3>Requested city ID: {cityId}</h3>;
// }

// export default Cities;