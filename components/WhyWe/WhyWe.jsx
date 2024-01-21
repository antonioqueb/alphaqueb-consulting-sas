
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
          <h2>¿Por Qué Elegirnos?</h2>
          <p>Enfrenta los retos de la era digital con nuestras soluciones innovadoras y personalizadas. Nos comprometemos a facilitar tu transición hacia lo digital, asegurando un proceso eficiente y efectivo.</p>
          <p>Maneja el cambio con confianza y asegura innovación y resultados duraderos. Con nosotros, cada paso hacia la transformación digital es un avance seguro hacia el éxito.</p>        
          </div>
      
    </div>
  );
}

export default WhyWe;