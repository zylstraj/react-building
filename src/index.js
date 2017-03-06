import React from "react"
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {About} from './components/About/About'
import {Layout} from './components/Layout/Layout'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Contact} from './components/Contact/Contact'
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
