import React from "react";
import styles from '../../css/portfolio.css'
import Link from "react-dom"

export class Portfolio extends React.Component {
  render(){
    return(
      <section className={styles.portfolio_work}>
        {/* <p className={styles.portfolio}>Currently Finishing Up A Few Projects</p>*/}
         <h1 className={styles.portfolio_h1}><a href="http://no-water.surge.sh">No Water.<br></br>You Die.</a></h1>
      </section>
  )
  }
}
