
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
          <h2 className={styles.WhyWe__title}>Desarrollamos Personalizaciones en el ERP Odoo a medida.<span className={styles.Dot}>.</span></h2>
          <p>En Alphaqueb Consulting SAS somos expertos en el Desarrollo de Odoo y podemos ayudarte a aprovechar al máximo lo potencialmente personalizable que es este ERP.</p>
          <p>Te ofrecemos una amplia gama de servicios, desde la personalizaciones simples de modulos existentes hasta el desarrollo de nuevos módulos a medida.</p>
          <p>Contacta con nosotros hoy mismo y te ayudaremos a encontrar la solución perfecta para tus necesidades.</p>
          </div>     
    </div>
  )
}

