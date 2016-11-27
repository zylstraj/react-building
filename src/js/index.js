import React from "react"
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {About} from './components/About'
import {Layout} from './components/Layout'
const app = document.getElementById('app');


// <Router history="browserHistory">
//   <Route path="/" component={Layout}>
//   <IndexRoute component={Layout}></IndexRoute>
//   <Route path="about" component={About}></Route>
//   </Route>
//   </Router>

ReactDOM.render(<Layout />,
  app);

