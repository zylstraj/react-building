import React from "react";
import styles from './portfolio.css'
import Link from "react-dom"

export class Portfolio extends React.Component {
  render(){
    return(
      <section className={styles.portfolio_work}>
        {/* <p className={styles.portfolio}>Currently Finishing Up A Few Projects</p>*/}
         <div className={styles.main_div}>
            <h1 className={styles.portfolio_h1}><a href="http://no-water.surge.sh">No Water.<br></br>You Die.</a></h1>
            <p>Simple static site. HTML, CSS and a variety of images produced using Adobe Illustrator</p>
         </div>
       {/* // <p>Raise awareness about the lack of world through the world</p>*/}
       <div className={styles.main_div}>
       <h1 className={styles.portfolio_h1}><a href="http://miniyoutubereact.herokuapp.com">Mini<br/>YouTube</a></h1>
       </div>
       <div className={styles.main_div}><h1 className={styles.portfolio_h1}><a href="http://pnwweatherreact.herokuapp.com">PNW<br/>Weather</a></h1>
       </div>
      </section>
  )
  }
}
