import React from "react";
import { Router, Route, Link } from 'react-router'

import styles from './header.css'

export class Header extends React.Component {
  render(){
    return(
      <div className={styles.menu}>
      {/*<img src="./IAmJosh.png" alt="Josh logo" className={styles.joshLogo}/>*/}
      <h1 className={styles.mainMenu}>I Am Josh</h1>
      <nav className={styles.header_baby}>
        <ul>
            <li className={styles.nav_josh}>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className={styles.nav_josh}>
            <Link to="/about">About/Contact</Link>
            </li>

        </ul>
        </nav>

    </div>
      );
  }
}
