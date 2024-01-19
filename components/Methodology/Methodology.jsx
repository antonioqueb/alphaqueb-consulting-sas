
  //Methodology
import React from 'react';
import styles from './Methodology.module.css';
import Image from 'next/image';

export const Methodology = () => {
  return (
    <div className={styles.Methodology__container}>
      <div className={styles.Methodology__container_text}>
        <h2>Metodología</h2>
      </div>
      <div className={styles.Methodology__container_steps}>
        <section className={styles.Methodology__container_steps_step}>
        </section>
      </div>

    
    </div>
  );
}

export default Methodology;