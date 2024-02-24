
//WhyWe
import React from 'react';
import styles from './WhyWe.module.css';
import Image from 'next/image';

export const WhyWe = () => {
  return (

    




    <div className={styles.WhyWe__container}>

      

        <div className={styles.WhyWe__container_images}>
          <Image className={styles.WhyWe__container__image__img} src="whywe.svg"  alt="wyhywephoto" width={400} height={400} />
        </div>
        
        <div className={styles.WhyWe__container_text}>
          <h2 className={styles.LastNews__title}>Propuesta<span className={styles.Dot}>.</span></h2>
          <p>En Alphaqueb, somos expertos en desarrollar Apps Odoo personalizadas que se ajustan a las necesidades específicas de tu negocio. Te ayudamos a automatizar procesos, mejorar la eficiencia y alcanzar tus metas de forma más rápida y efectiva.</p>
          </div>
      
    </div>
  );
}

export default WhyWe;