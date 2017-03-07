import React from "react";

import {About} from '../About/About';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contact} from '../Contact/Contact';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      <Header />
      {this.props.children}
      <Footer />
        </div>
      );
  }
}
