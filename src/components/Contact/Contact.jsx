import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:prasadraju0525@email.com">Drop Me a Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prasad-raju-a83a1a207?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B93qhhKSkRo6Dhup6H7W0Jg%3D%3D" target="_blank">linkedin.com/Prasad</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/PrasadRaju03">github.com/Prasad</a>
        </li>
      </ul>
    </footer>
  );
};
