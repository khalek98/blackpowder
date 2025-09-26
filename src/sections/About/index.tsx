import cn from 'classnames';

import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={cn('container', styles.container)}>
        <h2 className={styles.label}>About Us</h2>
        <h3 className={styles.title}>Precision-Driven Solutions for Real-World Challenges</h3>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            At BPG Albania, we integrate advanced technologies to build systems that perform where failure is not an
            option. Our mission is to empower governments, institutions, and businesses to operate with intelligence,
            resilience, and control—no matter the challenge.
          </p>

          <p className={styles.description}>
            With a presence across strategic regions, we deliver tailored, high-performance solutions that combine data,
            communication, and security into unified operational platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
