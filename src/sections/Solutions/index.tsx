import React from "react";
import cn from "classnames";

import styles from "./Solutions.module.scss";

const solutionList = [];

const Solutions = () => {
  return (
    <section id="solutions" className={styles.section}>
      <div className={cn("container", styles.container)}></div>
    </section>
  );
};

export default Solutions;
