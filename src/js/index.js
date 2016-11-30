import React from "react"
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {About} from './components/About'
import {Layout} from './components/Layout'
import {Portfolio} from './components/Portfolio'
import {Contact} from './components/Contact'
const app = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={Layout}>
  <Route path="portfolio" component={Portfolio} />
  <Route path="about" component={About} />
  <Route path="contact" component={Contact} />
  </Route>
  </Router>
  ),
  app);

