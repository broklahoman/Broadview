import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Results from "../components/results";
import Search from "../components/search";
import Saved from "../components/saved";
import Main from "../main";

const routes = (
 <Router history = {browserHistory}>
 	
    <Route path="/" component={Main}>
      <Route path="search" component={Search} />
      <Route path="results" component={Results}>
        <Route path="saved" component={Saved} />
        <IndexRoute component = {Search} /> 
      </Route>
    </Route>
  </Router>
);




export default routes;