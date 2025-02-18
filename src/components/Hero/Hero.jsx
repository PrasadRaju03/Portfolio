import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <span className={styles.whiteText}>I'm</span>
        <h1 className={styles.title}>Prasad Raju</h1>
      </div>
        {/* <h1 className={styles.title}><span>I'm</span> Prasad Raju</h1> */}
        <p className={styles.description}>
          I'm a full-stack developer with  hands-on experience using ReactJS and
          NodeJS. Reach out if you'd like to know more!
        </p>
        <a href="mailto:prasadraju0525@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mainphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
