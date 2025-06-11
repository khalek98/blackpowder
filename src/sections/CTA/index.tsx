import React from "react";
import cn from "classnames";

import styles from "./CTA.module.scss";

import { useAppContext } from "@/context/AppContext";

const CTA = () => {
  const { setShowForm } = useAppContext();
  return (
    <section id="cta" className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        muted
        playsInline
        controls={false}
      >
        <source src="/drone_bg.mp4" type="video/mp4" />
      </video>
      <div className={cn("container", styles.container)}>
        <h2 className={styles.title}>Let’s Build What Matters</h2>
        <p className={styles.description}>
          Talk to our experts and discover how Black Powder can support your
          mission
        </p>
        <button onClick={() => setShowForm(true)} className={styles.button}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
