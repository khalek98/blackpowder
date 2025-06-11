import cn from 'classnames';
import { motion } from 'motion/react';

import styles from './Hero.module.scss';
import { useAppContext } from '@/context/AppContext';

const Hero = () => {
  const { setShowForm } = useAppContext();

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        initial={{ transform: 'scale(1)' }}
        whileInView={{ transform: 'scale(1.1)' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 1 }}
        className={styles.background}
      ></motion.div>
      <div className={cn('container', styles.container)}>
        <motion.h1
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          className={styles.title}
        >
          Engineering Resilience for a Complex World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={styles.description}
        >
          Global technology solutions built for national security, critical infrastructure, and demanding environments.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, transform: 'translateY(10px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={styles.button}
          onClick={() => setShowForm(true)}
        >
          Discover Our Capabilities
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
