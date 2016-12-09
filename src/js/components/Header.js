import React from "react";
import { Router, Route, Link } from 'react-router'

import styles from '../../css/header.css'

export class Title extends React.Component {
  render(){
    return(
      <div className={styles.menu}>
      <img src="./IamJosh.png" alt="Josh logo" className={styles.joshLogo}/>
      <nav className={styles.header_baby}>
        <ul>
            <li className={styles.nav_josh}>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className={styles.nav_josh}>
            <Link to="/about">About</Link>
            </li>
            <li className={styles.nav_josh}>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </nav>

    </div>
      );
  }
}
