import React from "react"
import styles from '../../css/contact.css'

console.log('Contact styles:', styles);

export class Contact extends React.Component{
  render(){
    return(
      <section>
        <h1 className={styles.contact}>Get At Me</h1>
        <ul className={styles.contact_list}>
            <li className={styles.contact_icon}><a href="mailto:zylstrajosh@gmail.com"><span className="icon-envelope-o">Email</span></a></li>
            <li className={styles.contact_icon}><a href="https://linkedin.com/in/zylstraj"><span className="icon-linkedin-square"></span>Linked</a></li>
            <li className={styles.contact_icon}><a href="https://github.com/zylstraj"><span className="icon-github-square">Github</span></a></li>
        </ul>
    </section>
    );
}
}
