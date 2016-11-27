import React from "react";

import {About} from './About';
import {Footer} from './Footer';
import {Title} from './Header';
import {Portfolio} from './Portfolio';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      <Title />
      <About />
      <Portfolio />
      <Footer />
        </div>
      );
  }
}
