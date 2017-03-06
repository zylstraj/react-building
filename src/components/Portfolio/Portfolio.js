import React from "react";
import styles from './portfolio.css'
import Link from "react-dom"

export class Portfolio extends React.Component {
  render(){
    return(
      <section className={styles.portfolio_work}>
        {/* <p className={styles.portfolio}>Currently Finishing Up A Few Projects</p>*/}
         <h1 className={styles.portfolio_h1}><a href="http://no-water.surge.sh">No Water.<br></br>You Die.</a></h1>
       {/* // <p>Raise awareness about the lack of world through the world</p>*/}
       <h1 className={styles.portfolio_h1}><a href="http://miniyoutubereact.herokuapp.com">Mini YouTube</a></h1>
       <h1 className={styles.portfolio_h1}><a href="http://pnwweatherreact.herokuapp.com">PNW Weather</a></h1>
      </section>
  )
  }
}
