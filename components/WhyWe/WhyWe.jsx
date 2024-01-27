
//WhyWe
import React from 'react';
import styles from './WhyWe.module.css';
import Image from 'next/image';

export const WhyWe = () => {
  return (

    




    <div className={styles.WhyWe__container}>

      

        <div className={styles.WhyWe__container_images}>
          <Image className={styles.WhyWe__container__image__img} src="whywe.svg"  alt="wyhywephoto" width={700} height={700} />
        </div>
        
        <div className={styles.WhyWe__container_text}>
          <h2 className={styles.LastNews__title}>Propuesta<span className={styles.Dot}>.</span></h2>
          <p>Tu viaje digital comienza aquí. Con una metodología única, diagnosticamos, planificamos, implementamos, formamos y evaluamos, asegurando que cada fase sea un avance hacia tu visión.</p>
          <p>La transformación digital no es una promesa, es una realidad palpable con Alphaqueb.</p>        
          </div>
      
    </div>
  );
}

export default WhyWe;