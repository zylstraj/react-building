import React from "react";
// import {Router, Route, browserHistory, indexRoute} from "react-router";

// import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
// import Portfolio from "./Portfolio";

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header title="fun" />
        // <Portfolio />
        // <About />
        <Footer />
      </div>
      );
  }
}
