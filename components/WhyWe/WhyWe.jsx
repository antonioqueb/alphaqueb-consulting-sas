
// WhyWe
import React from 'react'
import styles from './WhyWe.module.css'
import Image from 'next/image'

export default function WhyWe () {
  return (
    <div className={styles.WhyWe__container}> 
        <div className={styles.WhyWe__container_images}>
          <Image className={styles.WhyWe__container__image__img} src='whywe.svg'  alt='wyhywephoto' width={700} height={700} />
        </div>   
        <div className={styles.WhyWe__container_text}>
          <h2 className={styles.LastNews__title}>Aportamos valor a tus servicios<span className={styles.Dot}>.</span></h2>
          <p>En Alphaqueb, a demás de implementar soluciones personalizadas Odoo, les acompañamos en todo el proceso, desde la definición de sus necesidades hasta la implementación y evolución de la aplicación.</p>
          <p>Aumenten su productividad, reduzcan costos y mejoren la toma de decisiones con desarrollos de aplicaciones Odoo a medida de tu implementación Odoo.</p>
          </div>     
    </div>
  )
}

