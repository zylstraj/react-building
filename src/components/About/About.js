import React from "react";
import styles from './about.css'

export class About extends React.Component{
  render(){
    return(
      <div className={styles.todayfix}>
        <section className={styles.about_josh}>
            <img src="../../LinkedIn.jpg" alt="Photo of Josh" className={styles.joshPhoto} />
            <p className={styles.about_paragraph}> I am a Full Stack Developer in the Seattle area. I graduated from the University of Michigan and have completed two cerfications at Code Fellows in Seattle.</p>
        </section>
    </div>
      );
  }
}
