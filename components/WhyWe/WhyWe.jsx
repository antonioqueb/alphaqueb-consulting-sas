
// WhyWe
import React from 'react'
import styles from './WhyWe.module.css'
import Image from 'next/image'

export const WhyWe = () => {
  return (
    <div className={styles.WhyWe__container}> 
        <div className={styles.WhyWe__container_images}>
          <Image className={styles.WhyWe__container__image__img} src='whywe.svg'  alt='wyhywephoto' width={700} height={700} />
        </div>   
        <div className={styles.WhyWe__container_text}>
          <h2 className={styles.LastNews__title}>Propuesta<span className={styles.Dot}>.</span></h2>
          <p>En Alphaqueb, no solo creamos soluciones personalizadas en Odoo, sino que te acompañamos en todo el proceso, desde la definición de tus necesidades hasta la implementación y evolución de la aplicación.</p>
          <p>Aumenta tu productividad, reduce costes y mejora la toma de decisiones con Desarrollos de Apps Odoo a medida.</p>
          </div>     
    </div>
  )
}

export default WhyWe;