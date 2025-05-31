import cn from "classnames";

import styles from "./Hero.module.scss";
import { useAppContext } from "@/context/AppContext";

const Hero = () => {
  const { setShowForm } = useAppContext();

  return (
    <section id="hero" className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <h1 className={styles.title}>
          Engineering Resilience for a Complex World
        </h1>
        <p className={styles.description}>
          Global technology solutions built for national security, critical
          infrastructure, and demanding environments.
        </p>

        <button className={styles.button} onClick={() => setShowForm(true)}>
          Discover Our Capabilities
        </button>
      </div>
    </section>
  );
};

export default Hero;
