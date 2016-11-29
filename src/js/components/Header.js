import React from "react";
import { Router, Route, Link } from 'react-router'

export class Title extends React.Component {
  render(){
    return(
      <div className="menu">
        <ul>
            <li className="nav_josh">
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav_josh">
            <Link to="/about">About</Link>
            </li>
            <li className="nav_josh">
            <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </div>
      );
  }
}
