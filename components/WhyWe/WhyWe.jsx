
//WhyWe
import React from 'react';
import styles from './WhyWe.module.css';
import Image from 'next/image';

export const WhyWe = () => {
  return (

    




    <div className={styles.WhyWe__container}>

      

        <div className={styles.WhyWe__container_images}>
          <Image className={styles.WhyWe__container__image__img} src="whywe.svg"  alt="wyhywephoto" width={500} height={500} />
        </div>
        
        <div className={styles.WhyWe__container_text}>
          <h2 className={styles.LastNews__title}>Propuesta<span className={styles.Dot}>.</span></h2>
          <p>Emprende un viaje transformador con nuestra metodología integral en Alphaqueb. Aseguramos que cada fase de tu proyecto, desde el diagnóstico hasta la evaluación, marque un avance significativo hacia la realización de tu visión.</p>
          <p>Nuestro compromiso es convertir la promesa de la transformación digital en una realidad tangible, guiándote en cada paso del camino hacia el éxito digital.</p>        
          </div>
      
    </div>
  );
}

export default WhyWe;