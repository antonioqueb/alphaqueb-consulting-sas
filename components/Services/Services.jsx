
  //Services
import React from 'react';
import styles from './Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Services = () => {
  return (
    <div className={styles.Services__container}>
      <div className={styles.Services__container__title}>
        <h2>Servicios<span className={styles.Dot}>.</span></h2>
        </div>
      <div className={styles.Services__container__content}>
        <div className={styles.Services__container__content__item}>
          <Image src="/sistemas.svg" alt="Desarrollo de sistemas" width={200} height={200} />
          <h3>Software</h3>
          <Link href="/services/desarrollo-de-sistemas">
            <span className={styles.LinkButton}>Conocer Más</span> {/* Usar span o div en lugar de a */}
          </Link> 
        </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/bot.svg" alt="Data e Inteligencia Artificial" width={200} height={200} />
          <h3>I. A.</h3>
          <Link href="/services/desarrollo-de-sistemas">
            <span className={styles.LinkButton}>Conocer Más</span> {/* Usar span o div en lugar de a */}
          </Link>
        </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/estrategia-digital.svg" alt="Estrategia Digital" width={200} height={200} />
          <h3>Digitalización</h3>
          <Link href="/services/desarrollo-de-sistemas">
            <span className={styles.LinkButton}>Conocer Más</span> {/* Usar span o div en lugar de a */}
          </Link>
        </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/learn.svg" alt="Soporte Capacitacion Continua" width={200} height={200} />
          <h3>Consultoría</h3>
          <Link href="/services/desarrollo-de-sistemas">
            <span className={styles.LinkButton}>Conocer Más</span> {/* Usar span o div en lugar de a */}
          </Link>
        </div>
        </div>
  
      
    </div>
  );
}

export default Services;