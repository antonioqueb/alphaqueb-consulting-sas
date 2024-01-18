
//WhyWe
import React from 'react';
import styles from './WhyWe.module.css';
import Image from 'next/image';

export const WhyWe = () => {
  return (
    <div className={styles.WhyWe__container}>

      <div className={styles.WhyWe__container_text}>
          <h2>¿Por qué nosotros?</h2>
          <p>Porque somos los mejores</p>
        </div>

        <div className={styles.WhyWe__container_images}>
          <Image src="logo.svg"  alt="wyhywephoto" width={200} height={200} />
        </div>
  
      
    </div>
  );
}

export default WhyWe;