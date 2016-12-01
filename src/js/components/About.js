import React from "react";
import styles from '../../css/about.css'

export class About extends React.Component{
  render(){
    return(
      <div className={styles.todayfix}>
        <section className={styles.about_josh}>
            <p className={styles.about_paragraph}> Seattle is my home. The Chicago Cubs will always be my first love. And Donald Glover.</p>
        </section>
    </div>
      );
  }
}

