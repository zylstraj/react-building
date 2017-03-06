import React from "react";

import {About} from '../About/About';
import {Footer} from '../Footer/Footer';
import {Title} from '../Header/Header';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contact} from '../Contact/Contact';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      <Title />
      {this.props.children}
      <Footer />
        </div>
      );
  }
}
