
  //Services
  import React from 'react';
import styles from './Services.module.css';

export const Services = () => {
  return (
    <div className={styles.Services__container}>
      <div className={styles.Services__container__title}>
        <h1>Services</h1>
        </div>
      <div className={styles.Services__container__content}>
        <div className={styles.Services__container__content__item}>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className={styles.Services__container__content__item}>
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className={styles.Services__container__content__item}>
          <h3>Mobile Applications</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        </div>
  
      
    </div>
  );
}

export default Services;